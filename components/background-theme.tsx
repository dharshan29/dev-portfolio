"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"

export default function Component() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDarkMode = theme === "dark"

  // Generate random positions for stars (dark mode)
  const staticStars = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    top: Math.random() * 40 + 10,
    left: Math.random() * 100,
    opacity: Math.random() * 0.5 + 0.5,
  }))

  // Generate random positions for falling snow (dark mode)
  const fallingSnow = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    duration: Math.random() * 4 + 8,
    delay: Math.random() * 6,
  }))

  // Generate random trees
  const trees = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: i * 12,
    trunkHeight: Math.random() * 5 + 6,
    treeHeight: Math.random() * 10 + 20,
    treeWidth: Math.random() * 3 + 7,
  }))

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark")
  }

  return (
    <div className="relative overflow-hidden">
      {/* Fixed background with animated elements */}
      <div className="fixed inset-0 z-0 transition-opacity duration-700">
        <div className="absolute inset-0 overflow-hidden">
          {/* Main gradient background */}
          <div
            className={`absolute inset-0 transition-all duration-1000 ${
              isDarkMode
                ? "bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700"
                : "bg-gradient-to-b from-blue-300 via-blue-200 to-blue-100"
            }`}
          ></div>

          {/* Sun (light mode) */}
          {!isDarkMode && (
            <div className="absolute top-20 right-20 w-16 h-16 transition-opacity duration-1000">
              <div className="absolute inset-0 bg-yellow-300 rounded-full opacity-90"></div>
              <div className="absolute inset-2 bg-yellow-200 rounded-full"></div>
            </div>
          )}

          {/* Moon (dark mode) */}
          {isDarkMode && (
            <div className="absolute top-16 right-24 w-14 h-14 transition-opacity duration-1000">
              <div className="absolute inset-0 bg-gray-100 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full absolute top-3 left-3"></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full absolute top-6 right-4"></div>
              <div className="w-3 h-3 bg-gray-300 rounded-full absolute bottom-3 right-2"></div>
            </div>
          )}

          {/* Floating clouds (light mode) with diagonal movement */}
          {!isDarkMode && (
            <>
              <div className="absolute top-16 left-16 w-20 h-8 bg-white rounded-full opacity-80 animate-float-diagonal-1 transition-opacity duration-1000"></div>
              <div
                className="absolute top-12 left-20 w-12 h-6 bg-white rounded-full opacity-70 animate-float-diagonal-2 transition-opacity duration-1000"
                style={{ animationDelay: "2s" }}
              ></div>
              <div className="absolute top-24 right-32 w-16 h-6 bg-white rounded-full opacity-75 animate-float-diagonal-3 transition-opacity duration-1000"></div>
              <div
                className="absolute top-32 left-1/3 w-14 h-5 bg-white rounded-full opacity-60 animate-float-diagonal-4 transition-opacity duration-1000"
                style={{ animationDelay: "4s" }}
              ></div>
              <div
                className="absolute top-28 left-1/2 w-18 h-7 bg-white rounded-full opacity-70 animate-float-depth transition-opacity duration-1000"
                style={{ animationDelay: "6s" }}
              ></div>
            </>
          )}

          {/* Static stars (dark mode) */}
          {isDarkMode &&
            staticStars.map((star) => (
              <div
                key={star.id}
                className="absolute w-1 h-1 bg-white rounded-full transition-opacity duration-1000"
                style={{
                  top: `${star.top}%`,
                  left: `${star.left}%`,
                  opacity: star.opacity,
                }}
              />
            ))}

          {/* Falling snow animation (dark mode) */}
          {isDarkMode &&
            fallingSnow.map((flake) => (
              <div
                key={flake.id}
                className="absolute w-1 h-1 bg-white rounded-full animate-snow opacity-60 transition-opacity duration-1000"
                style={{
                  left: `${flake.left}%`,
                  animationDuration: `${flake.duration}s`,
                  animationDelay: `${flake.delay}s`,
                }}
              />
            ))}

          {/* Mountain layers */}
          <div className="absolute bottom-0 left-0 right-0">
            {/* Back mountain layer */}
            <div
              className={`absolute bottom-0 w-full h-[300px] transition-colors duration-1000 ${
                isDarkMode ? "bg-green-700" : "bg-green-600"
              }`}
              style={{
                clipPath: "polygon(0% 60%, 15% 40%, 30% 50%, 50% 30%, 70% 45%, 85% 25%, 100% 35%, 100% 100%, 0% 100%)",
              }}
            ></div>
            <div
              className={`absolute bottom-0 w-full h-[300px] transition-all duration-1000 bg-white ${
                isDarkMode ? "opacity-90" : "opacity-85"
              }`}
              style={{
                clipPath:
                  "polygon(0% 60%, 10% 50%, 20% 60%, 15% 40%, 25% 30%, 35% 40%, 30% 50%, 45% 40%, 55% 30%, 50% 30%, 65% 20%, 75% 35%, 70% 45%, 80% 35%, 90% 15%, 85% 25%, 95% 30%, 100% 35%, 100% 100%, 0% 100%)",
              }}
            ></div>

            {/* Middle mountain layer */}
            <div
              className={`absolute bottom-0 w-full h-[220px] transition-colors duration-1000 ${
                isDarkMode ? "bg-green-600" : "bg-green-500"
              }`}
              style={{ clipPath: "polygon(0% 70%, 20% 50%, 40% 60%, 60% 35%, 80% 55%, 100% 40%, 100% 100%, 0% 100%)" }}
            ></div>
            <div
              className={`absolute bottom-0 w-full h-[220px] transition-all duration-1000 bg-white ${
                isDarkMode ? "opacity-85" : "opacity-80"
              }`}
              style={{
                clipPath:
                  "polygon(0% 70%, 15% 60%, 25% 70%, 20% 50%, 35% 40%, 45% 50%, 40% 60%, 55% 45%, 65% 25%, 60% 35%, 75% 45%, 85% 45%, 80% 55%, 95% 50%, 100% 40%, 100% 100%, 0% 100%)",
              }}
            ></div>

            {/* Front mountain layer */}
            <div
              className={`absolute bottom-0 w-full h-[140px] transition-colors duration-1000 ${
                isDarkMode ? "bg-green-800" : "bg-green-700"
              }`}
              style={{ clipPath: "polygon(0% 80%, 25% 60%, 50% 40%, 75% 65%, 100% 50%, 100% 100%, 0% 100%)" }}
            ></div>
            <div
              className={`absolute bottom-0 w-full h-[140px] transition-all duration-1000 bg-white ${
                isDarkMode ? "opacity-80" : "opacity-75"
              }`}
              style={{
                clipPath:
                  "polygon(0% 80%, 20% 70%, 30% 80%, 25% 60%, 45% 50%, 55% 30%, 50% 40%, 70% 55%, 80% 55%, 75% 65%, 95% 60%, 100% 50%, 100% 100%, 0% 100%)",
              }}
            ></div>
          </div>

          {/* Trees */}
          <div className="absolute bottom-0 w-full h-32 overflow-hidden">
            {trees.map((tree) => (
              <div key={tree.id} className="absolute bottom-0" style={{ left: `${tree.left}%` }}>
                {/* Tree trunk */}
                <div
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-colors duration-1000 ${
                    isDarkMode ? "bg-amber-900" : "bg-amber-800"
                  }`}
                  style={{
                    width: "3px",
                    height: `${tree.trunkHeight}px`,
                  }}
                ></div>
                {/* Tree top */}
                <div
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-colors duration-1000 ${
                    isDarkMode ? "bg-green-900" : "bg-green-800"
                  }`}
                  style={{
                    width: `${tree.treeWidth}px`,
                    height: `${tree.treeHeight}px`,
                    clipPath: "polygon(50% 0%, 20% 100%, 80% 100%)",
                    bottom: `${tree.trunkHeight * 0.667}px`,
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Atmospheric overlay */}
        <div
          className={`absolute inset-0 transition-colors duration-700 ${isDarkMode ? "bg-black/40" : "bg-white/20"}`}
        ></div>
      </div>
    </div>
  )
}
