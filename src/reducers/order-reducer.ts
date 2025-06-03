import type { MenuItem } from '../types/index';

export type OrderActions = 
{ type: 'add-item', payload: { item: MenuItem } } |
{ type: 'remove-item', payload: { id: MenuItem['id'] } } |
{ type: 'place-order' } |
{ type: 'add-tip', payload: { value: number } };

export const initialState = {
    order: [],
    tip: 0
}

