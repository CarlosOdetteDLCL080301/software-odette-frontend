export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Carlos Odette De La Cruz López</h3>
            <p className="text-gray-400">Ingeniero en Computación</p>
          </div>

          <div className="flex space-x-4 mb-6 md:mb-0">
            <a
              href="https://www.linkedin.com/in/carlosodettedelacuzlopez/"
              target="_blank"
              className="text-gray-400 hover:text-white transition duration-300"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a
              href="https://github.com/CarlosOdetteDLCL080301"
              target="_blank"
              className="text-gray-400 hover:text-white transition duration-300"
              rel="noreferrer"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a
              href="mailto:ing.delacruz.carlosodette@gmail.com"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <i className="fas fa-envelope text-2xl"></i>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Carlos Odette De La Cruz López. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
