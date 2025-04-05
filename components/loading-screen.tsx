"use client"

import { useState, useEffect } from "react"
import { Terminal } from "lucide-react"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [text, setText] = useState("")

  const loadingTexts = [
    "Initializing cybernetic interface...",
    "Connecting to the digital realm...",
    "Loading tech arsenal...",
    "Assembling 8-bit warriors...",
    "Preparing for digital battle...",
  ]

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 1
      })
    }, 25)

    let currentTextIndex = 0
    const textInterval = setInterval(() => {
      setText(loadingTexts[currentTextIndex])
      currentTextIndex = (currentTextIndex + 1) % loadingTexts.length
    }, 500)

    return () => {
      clearInterval(progressInterval)
      clearInterval(textInterval)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background cyber-grid">
      <div className="w-full max-w-md px-4 text-center">
        <div className="mb-8 flex items-center justify-center">
          <Terminal className="h-16 w-16 text-primary animate-pulse" />
        </div>

        <h1 className="mb-2 text-2xl font-bold tracking-tight glitch">
          <span>8 Bit Warriors</span>
          <span>8 Bit Warriors</span>8 Bit Warriors
        </h1>

        <div className="mb-4 h-1 w-full overflow-hidden rounded-full bg-muted">
          <div className="h-full bg-primary transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>

        <div className="h-6">
          <p className="text-sm text-muted-foreground terminal-text">{text}</p>
        </div>

        <div className="mt-8 w-full h-1 loading-bar" />
      </div>
    </div>
  )
}

