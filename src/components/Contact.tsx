export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Elementos de animación de fondo */}
      <div className="contact-animation">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Contáctame</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          ¿Tienes un proyecto interesante o una oportunidad laboral? ¡Me
          encantaría escucharte! Puedes contactarme a través de cualquiera de
          los siguientes medios.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Tarjeta de Email */}
          <div className="contact-card">
            <div className="contact-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <h3 className="contact-title">Email</h3>
            <p className="contact-value">
              <a
                href="mailto:ing.delacruz.carlosodette@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                ing.delacruz.carlosodette@gmail.com
              </a>
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Respuesta en 24-48 horas
            </p>
          </div>

          {/* Tarjeta de Teléfono */}
          <div className="contact-card">
            <div className="contact-icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h3 className="contact-title">Teléfono</h3>
            <p className="contact-value">
              <a href="tel:+525660156828">5660156828</a>
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Disponible de lunes a viernes, 9am - 6pm
            </p>
          </div>

          {/* Tarjeta de LinkedIn */}
          <div className="contact-card">
            <div className="contact-icon">
              <i className="fab fa-linkedin-in"></i>
            </div>
            <h3 className="contact-title">LinkedIn</h3>
            <p className="contact-value">
              <a
                href="https://www.linkedin.com/in/carlosodettedelacuzlopez/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/carlosodettedelacuzlopez
              </a>
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Conéctate profesionalmente
            </p>
          </div>

          {/* Tarjeta de GitHub */}
          <div className="contact-card">
            <div className="contact-icon">
              <i className="fab fa-github"></i>
            </div>
            <h3 className="contact-title">GitHub</h3>
            <p className="contact-value">
              <a
                href="https://github.com/CarlosOdetteDLCL080301"
                target="_blank"
                rel="noreferrer"
              >
                github.com/CarlosOdetteDLCL080301
              </a>
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Explora mis proyectos y contribuciones
            </p>
          </div>

          {/* Tarjeta de Ubicación */}
          <div className="contact-card">
            <div className="contact-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3 className="contact-title">Ubicación</h3>
            <p className="contact-value">Estado de México, Méx.</p>
            <p className="text-sm text-gray-500 mt-2">
              Disponible para trabajo remoto o presencial
            </p>
          </div>

          {/* Tarjeta de Disponibilidad */}
          <div className="contact-card">
            <div className="contact-icon">
              <i className="far fa-calendar-alt"></i>
            </div>
            <h3 className="contact-title">Disponibilidad</h3>
            <p className="contact-value">
              Disponible para proyectos freelance y oportunidades laborales
            </p>
            <p className="text-sm text-gray-500 mt-2">
              ¡Contáctame para discutir tu proyecto!
            </p>
          </div>
        </div>

        {/* Llamada a la acción */}
        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6">
          <a
            href="mailto:ing.delacruz.carlosodette@gmail.com"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg"
          >
            <i className="fas fa-paper-plane mr-2"></i> Envíame un mensaje
          </a>
          <a
            href="https://admimpulsa.com.mx/visualizarEvidencia?idServicio=1706"
            className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition duration-300 shadow-lg"
          >
            <i className="fa-solid fa-file"></i> Descargar CV
          </a>
          <a
            href="https://wa.me/5660156828"
            className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition duration-300 shadow-lg"
          >
            <i className="fa-brands fa-whatsapp mr-2"></i> Envíame un WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
