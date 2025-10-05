'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"

export function SplineHeroSection() {
  return (
    <Card className="w-full h-screen bg-intel-brand relative overflow-hidden border-0 rounded-none">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#47A7FF"
      />

      {/* Intel 2024 background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-intel-600/30 via-intel-400/25 to-intel-300/30"></div>
      </div>

      <div className="flex h-full flex-col md:flex-row">
        {/* Left content */}
        <div className="flex-1 p-8 md:p-12 lg:p-16 relative z-10 flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black intel-text-white mb-6 leading-tight">
            IoSC-EDC
          </h1>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold intel-text-white mb-6">
            Intel oneAPI Students Club
          </h2>

          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold intel-text-white mb-8">
            East Delhi Campus
          </h3>

          <div className="mb-6">
            <p className="text-lg md:text-xl font-medium text-intel-400 mb-2">
              A FUTURE-FOCUSED, TECH-DRIVEN COMMUNITY
            </p>
          </div>

          <p className="mt-4 intel-text-white max-w-2xl text-lg md:text-xl leading-relaxed">
            Our mission is to bring hands-on education based on collaboration and real-life problem-solving through workshops, hackathons, coding competitions, and networking sessions. With those, we equip our members with contemporary skills and industry insights.
          </p>
        </div>

        {/* Right content - 3D Scene */}
        <div className="flex-1 relative min-h-[400px] md:min-h-full">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />

          {/* Intel 2024 overlay with enhanced colors */}
          <div className="absolute inset-0 bg-gradient-to-l from-intel-brand/10 via-intel-600/8 to-intel-800/12 pointer-events-none"></div>

          {/* IoSC Boot Text - Centered */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-intel-400 mb-2">
                IoSC
              </h2>
              <p className="text-lg md:text-xl font-semibold text-intel-400 tracking-wider">
                BOT
              </p>
            </div>
          </div>

          {/* Mobile fallback - Show on small screens when Spline might not load well */}
          <div className="absolute inset-0 md:hidden bg-gradient-to-br from-intel-600/30 to-intel-800/40 flex items-center justify-center">
            <div className="text-center p-8">
              <h2 className="text-5xl font-black intel-text-white-glow mb-4">
                IoSC
              </h2>
              <p className="text-xl font-semibold text-intel-400 tracking-wider mb-6">
                BOOT
              </p>
              <div className="w-16 h-16 border-4 border-intel-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}