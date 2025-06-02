import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"



export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)

    
    const addItem = (item : MenuItem) => {
        const itemExist = order.find(orderItem => orderItem.id === item.id) // Verifica si el item ya existe en la orden
        if(itemExist) {
            const updateOrder = order.map(orderItem => orderItem.id === item.id ?  {...orderItem, quantity: orderItem.quantity + 1}  :   orderItem)
            setOrder(updateOrder)
        } else {
            const newItem : OrderItem = {...item, quantity: 1} // Crea un nuevo item con la cantidad inicial de 1
            setOrder([...order, newItem]) // Agrega el nuevo item a la orden
        }
    }


    const removeItem = (id: MenuItem['id']) => {
        setOrder(order.filter(item => item.id !== id)) // Elimina el item de la orden filtrando por id
    }


    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }


  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem,
    placeOrder
    }
}





