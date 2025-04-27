import perfil from "../assets/carlos odette.png";
export function Hero() {
  return (
    <section id="home" className="py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Carlos Odette De La Cruz López</h1>
            <h2 className="text-2xl md:text-3xl mb-6">Ingeniero en Computación</h2>
            <p className="text-lg mb-8">
              Desarrollador web con experiencia en automatización de procesos y gestión de servidores. Apasionado por la
              optimización de sistemas y la implementación de soluciones tecnológicas eficientes.
            </p>
            <div className="flex space-x-4">
              <a
                href="#project_personal"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300"
              >
                Ver Proyectos
              </a>
              <a
                href="#contact"
                className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
              >
                Contactar
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 rounded-full bg-white p-2">
              <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center">
                <img src={perfil} alt="Carlos Odette" className="w-full h-full rounded-full object-cover" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
