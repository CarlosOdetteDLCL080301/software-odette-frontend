import { VueSkillsChart } from "./VueSkillsChart";

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Sobre Mí</h2>

        <div className="flex flex-col md:flex-row">
          {/* Información personal */}
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h3 className="text-2xl font-bold mb-4">¿Quién soy?</h3>
            <p className="text-gray-700 mb-6">
              Estudiante en el último semestre de Ingeniería en Computación en la Facultad
              de Ingeniería de la UNAM. Experiencia combinada como{" "}
              <span className="font-semibold">Analista de Datos y Desarrollador Web</span>,
              participando en la preparación, limpieza y automatización de datos, así como
              en el diseño de reportes y dashboards para la toma de decisiones. He trabajado
              en la implementación de procesos ETL con SQL y Python, automatización de
              reportes con Excel/VBA y desarrollo de funciones web para exportación y
              análisis de información. Además, cuento con experiencia en mantenimiento de
              aplicaciones web, gestión de servidores y configuración de campañas digitales.
              Apasionado por la optimización de sistemas, la analítica de datos y la
              implementación de soluciones tecnológicas eficientes, con facilidad para
              integrarme en equipos multidisciplinarios y mejorar estructuras de software y
              procesos ya existentes.
            </p>

            <h3 className="text-2xl font-bold mb-4">Educación</h3>
            <div className="mb-6">
              <h4 className="text-xl font-semibold">
                Universidad Nacional Autónoma de México
              </h4>
              <p className="text-gray-600">
                Ingeniería en computación | Agosto 2019 – Actualidad
              </p>
              <p className="text-gray-700 mt-2">Cursos Relevantes:</p>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Seguridad Informática Avanzada</li>
                <li>Minería de Datos</li>
                <li>Computación Cuántica</li>
                <li>Inteligencia Artificial</li>
                <li>Redes de Datos Seguras</li>
                <li>Sistemas Distribuidos</li>
                <li>Compiladores</li>
                <li>Sistemas Operativos</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mb-4">Idiomas</h3>
            <ul className="list-disc pl-5 text-gray-700 mb-6">
              <li>Español: Nativo</li>
              <li>Inglés: Intermedio</li>
            </ul>

            {/* Skills Adicionales */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-3">Skills Adicionales</h4>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Capacidad de análisis y resolución de problemas.</li>
                <li>Experiencia en trabajo autónomo y en equipo.</li>
                <li>Adaptabilidad a entornos tecnológicos en evolución.</li>
                <li>
                  Habilidad para aprender nuevas herramientas rápidamente.
                </li>
              </ul>
            </div>
          </div>

          {/* Habilidades */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-6">Habilidades Técnicas</h3>

            {/* Lenguajes de Programación */}
            <div className="tech-category">
              <h4>
                <img
                  src="https://media2.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif?cid=ecf05e47a0n3gi1bfqntqmob8g9aid1oyj2wr3ds3mg700bl&rid=giphy.gif"
                  alt="Coding"
                />
                Lenguajes de Programación
              </h4>
              <div className="tech-container">
                <div className="tech-icon">
                  <img
                    src="https://www.vectorlogo.zone/logos/java/java-icon.svg"
                    alt="Java"
                  />
                  <span>Java</span>
                </div>
                <div className="tech-icon">
                  <img
                    src="https://www.vectorlogo.zone/logos/python/python-icon.svg"
                    alt="Python"
                  />
                  <span>Python</span>
                </div>
                <div className="tech-icon">
                  <img
                    src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                    alt="HTML"
                  />
                  <span>HTML</span>
                </div>
                <div className="tech-icon">
                  <img
                    src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
                    alt="CSS"
                  />
                  <span>CSS</span>
                </div>
                <div className="tech-icon">
                  <img
                    src="https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg"
                    alt="JavaScript"
                  />
                  <span>JavaScript</span>
                </div>
                <div className="tech-icon">
                  <img
                    src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg"
                    alt="TypeScript"
                  />
                  <span>TypeScript</span>
                </div>
                <div className="tech-icon">
                  <img
                    src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                    alt="React"
                  />
                  <span>React</span>
                </div>
                <div className="tech-icon">
                  <img
                    src="https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg"
                    alt="Vue"
                  />
                  <span>Vue</span>
                </div>
              </div>
            </div>

            {/* Bases de Datos */}
            <div className="tech-category">
              <h4>
                <i className="bi bi-database"></i>
                Bases de Datos
              </h4>
              <div className="tech-container">
                <div className="tech-icon">
                  <img
                    src="https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg"
                    alt="MySQL"
                  />
                  <span>MySQL</span>
                </div>
                <div className="tech-icon">
                  <img
                    src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg"
                    alt="PostgreSQL"
                  />
                  <span>PostgreSQL</span>
                </div>
                <div className="tech-icon">
                  <img
                    src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg"
                    alt="SQL Server"
                  />
                  <span>SQL Server</span>
                </div>
              </div>
            </div>

            {/* Herramientas y Tecnologías */}
            <div className="tech-category">
              <h4>
                <i className="bi bi-tools"></i>
                Herramientas y Tecnologías
              </h4>
              <div className="tech-container">
                <div className="tech-icon">
                  <img
                    src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                    alt="Git"
                  />
                  <span>Git</span>
                </div>
                <div className="tech-icon">
                  <img
                    src="https://www.vectorlogo.zone/logos/docker/docker-icon.svg"
                    alt="Docker"
                  />
                  <span>Docker</span>
                </div>
                <div className="tech-icon">
                  <img
                    src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg"
                    alt="Spring Boot"
                  />
                  <span>Spring Boot</span>
                </div>
                <div className="tech-icon">
                  <img
                    src="https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg"
                    alt="Bootstrap"
                  />
                  <span>Bootstrap</span>
                </div>
                <div className="tech-icon">
                  <img
                    src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                    alt="Tailwind CSS"
                  />
                  <span>Tailwind CSS</span>
                </div>
                <div className="tech-icon">
                  <img
                    src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
                    alt="Node.js"
                  />
                  <span>Node.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
