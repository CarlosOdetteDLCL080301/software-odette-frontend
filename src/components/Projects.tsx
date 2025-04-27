"use client"

import { useEffect, useRef } from "react"
import { projectsData } from "../domain/project-data"

export function Projects() {
  const projectsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    const projectCards = projectsRef.current?.querySelectorAll(".project-card")
    projectCards?.forEach((card) => {
      observer.observe(card)
    })

    return () => {
      projectCards?.forEach((card) => {
        observer.unobserve(card)
      })
    }
  }, [])

  return (
    <section id="project_personal">
      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Proyectos Destacados</h2>

        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="project-card bg-white rounded-lg overflow-hidden shadow-md opacity-0"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <i className={`fas fa-${project.image} text-5xl text-gray-500`}></i>
                {/* Reemplazar con: <img src={`img/project${index+1}.jpg`} alt={project.title} className="w-full h-full object-cover" /> */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                >
                  Ver Detalles
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
