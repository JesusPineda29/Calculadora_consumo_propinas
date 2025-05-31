
export const Footer = () => {
  return (
    <footer className="bg-teal-700 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="mb-6 md:mb-0">
            <p className="text-2xl font-bold text-white">Calculadora de Propinas y Consumo</p>
            <p className="mt-2 text-sm">
              Desarrollado por <strong className="font-semibold text-white">Jesús Pineda</strong>
            </p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a
              href="https://jesus-pineda-portafolio.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-white transition-colors"
            >
              <i className="fas fa-globe"></i>
              <span>Sitio Web</span>
            </a>

            <a
              href="https://www.linkedin.com/in/jesús-pineda-630a3b300"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-white transition-colors"
            >
              <i className="fab fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/JesusPineda29"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-white transition-colors"
            >
              <i className="fab fa-github"></i>
              <span>GitHub</span>
            </a>
          </div>

          <p className="text-xs text-white md:text-right">
            © {new Date().getFullYear()} - Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};
