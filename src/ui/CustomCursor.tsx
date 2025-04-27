"use client"

import { useEffect, useState } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove)
      document.addEventListener("mouseenter", onMouseEnter)
      document.addEventListener("mouseleave", onMouseLeave)
      document.addEventListener("mousedown", onMouseDown)
      document.addEventListener("mouseup", onMouseUp)
    }

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseenter", onMouseEnter)
      document.removeEventListener("mouseleave", onMouseLeave)
      document.removeEventListener("mousedown", onMouseDown)
      document.removeEventListener("mouseup", onMouseUp)
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setHidden(false)
    }

    const onMouseEnter = () => {
      setHidden(false)
    }

    const onMouseLeave = () => {
      setHidden(true)
    }

    const onMouseDown = () => {
      setClicked(true)
    }

    const onMouseUp = () => {
      setClicked(false)
    }

    const handleLinkHoverEvents = () => {
      document.querySelectorAll("a, button, input, textarea, select").forEach((el) => {
        el.addEventListener("mouseenter", () => setLinkHovered(true))
        el.addEventListener("mouseleave", () => setLinkHovered(false))
      })
    }

    addEventListeners()
    handleLinkHoverEvents()

    return () => {
      removeEventListeners()
    }
  }, [])

  const cursorDotStyle = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    width: linkHovered ? "12px" : "8px",
    height: linkHovered ? "12px" : "8px",
    backgroundColor: linkHovered ? "var(--portfolio-secondary)" : "var(--portfolio-accent)",
    transform: clicked ? "translate(-50%, -50%) scale(0.7)" : "translate(-50%, -50%) scale(1)",
    opacity: hidden ? 0 : 1,
  }

  const cursorOutlineStyle = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    width: linkHovered ? "50px" : "40px",
    height: linkHovered ? "50px" : "40px",
    borderColor: linkHovered ? "var(--portfolio-accent)" : "var(--portfolio-secondary)",
    transform: clicked ? "translate(-50%, -50%) scale(0.7)" : "translate(-50%, -50%) scale(1)",
    opacity: hidden ? 0 : 1,
  }

  return (
    <>
      <div className="cursor-dot" style={cursorDotStyle} />
      <div className="cursor-outline" style={cursorOutlineStyle} />
    </>
  )
}
