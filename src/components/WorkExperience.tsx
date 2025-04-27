"use client"

import { useEffect, useRef } from "react"
import { experienceData } from "../domain/experience-data"

export function WorkExperience() {
  const timelineRef = useRef<HTMLDivElement>(null)

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

    const timelineItems = timelineRef.current?.querySelectorAll(".timeline-item")
    timelineItems?.forEach((item) => {
      observer.observe(item)
    })

    return () => {
      timelineItems?.forEach((item) => {
        observer.unobserve(item)
      })
    }
  }, [])

  return (
    <section id="work" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Experiencia Profesional</h2>

        <div ref={timelineRef} className="relative">
          {/* Línea vertical del timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

          {experienceData.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-16 timeline-item opacity-0`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Punto del timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                <div className="w-6 h-6 rounded-full bg-blue-500 border-4 border-white"></div>
              </div>

              {/* Contenido del timeline (alternando izquierda y derecha) */}
              <div
                className={
                  index % 2 === 0 ? "ml-4 md:ml-0 md:w-5/12 md:mr-auto md:pr-8" : "ml-4 md:ml-auto md:w-5/12 md:pl-8"
                }
              >
                <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                  <h4 className="text-lg font-semibold mb-2 text-blue-600">{exp.company}</h4>
                  <p className="text-gray-600 mb-2">
                    {exp.location} | {exp.period}
                  </p>
                  <ul className="list-disc pl-5 text-gray-700">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
