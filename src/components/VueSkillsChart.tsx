"use client"

import { useEffect, useRef } from "react"

// This component will load Vue and render a Vue component inside a React component
export function VueSkillsChart() {
  const chartContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Dynamically import Vue
    const loadVue = async () => {
      // We're using CDN to load Vue in this example
      const vueScript = document.createElement("script")
      vueScript.src = "https://unpkg.com/vue@3/dist/vue.global.js"
      document.head.appendChild(vueScript)

      vueScript.onload = () => {
        // Once Vue is loaded, create and mount our Vue component
        const { createApp } = (window as any).Vue

        const SkillsChart = {
          template: `
            <div class="vue-skills-chart">
              <h3 class="text-xl font-semibold mb-4">Nivel de Habilidades</h3>
              <div v-for="(skill, index) in skills" :key="index" class="mb-4">
                <div class="flex justify-between mb-1">
                  <span class="font-medium">{{ skill.name }}</span>
                  <span>{{ skill.level }}%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2.5">
                  <div class="bg-blue-600 h-2.5 rounded-full" :style="{ width: skill.level + '%' }"></div>
                </div>
              </div>
            </div>
          `,
          data() {
            return {
              skills: [
                { name: "HTML/CSS", level: 90 },
                { name: "JavaScript", level: 85 },
                { name: "React", level: 80 },
                { name: "Vue", level: 75 },
                { name: "TypeScript", level: 70 },
                { name: "Node.js", level: 65 },
              ],
            }
          },
        }

        // Create and mount the Vue app if the container exists
        if (chartContainerRef.current) {
          const app = createApp(SkillsChart)
          app.mount(chartContainerRef.current)
        }
      }
    }

    loadVue()

    // Cleanup function
    return () => {
      const vueScript = document.querySelector('script[src="https://unpkg.com/vue@3/dist/vue.global.js"]')
      if (vueScript) {
        document.head.removeChild(vueScript)
      }
    }
  }, [])

  return <div ref={chartContainerRef} className="vue-skills-chart bg-white p-6 rounded-lg shadow-md"></div>
}
