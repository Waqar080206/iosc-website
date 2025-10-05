'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"

export function SplineHeroSection() {
  return (
    <Card className="w-full h-screen bg-gradient-to-br from-[#1E1E1E] via-[#003C71] to-[#0071C5] relative overflow-hidden border-0 rounded-none">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#00C7FD"
      />

      {/* Intel-inspired background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0071C5]/20 via-[#00C7FD]/20 to-[#00D4AA]/20"></div>
      </div>

      <div className="flex h-full flex-col md:flex-row">
        {/* Left content */}
        <div className="flex-1 p-8 md:p-12 lg:p-16 relative z-10 flex flex-col justify-center">
          {/* Intel oneAPI branding */}
          <div className="mb-4">
            <span className="text-[#00C7FD] text-lg md:text-xl font-semibold tracking-wide">INTEL oneAPI</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-[#00C7FD] to-[#00D4AA] mb-6 leading-tight">
            IoSC-EDC
          </h1>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0071C5] via-[#00C7FD] to-[#00D4AA] mb-6">
            Intel oneAPI Students Club
          </h2>

          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white/90 mb-8">
            East Delhi Campus
          </h3>

          <div className="mb-6">
            <p className="text-lg md:text-xl font-medium text-[#00C7FD] mb-2">
              A FUTURE-FOCUSED, TECH-DRIVEN COMMUNITY
            </p>
          </div>

          <p className="mt-4 text-white/80 max-w-2xl text-lg md:text-xl leading-relaxed">
            Empowering innovation through Intel oneAPI technology, parallel computing, and hands-on learning experiences at GGSIPU. Join our community of developers and researchers shaping the future of computing.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-6">
            <button className="px-8 py-4 bg-gradient-to-r from-[#0071C5] to-[#003C71] hover:from-[#003C71] hover:to-[#0071C5] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-[#0071C5]/25 transform hover:scale-105 transition-all duration-300 border border-[#00C7FD]/30">
              Explore Events
            </button>
            <button className="px-8 py-4 bg-gradient-to-r from-[#00C7FD] to-[#00D4AA] hover:from-[#00D4AA] hover:to-[#00C7FD] text-[#1E1E1E] font-bold text-lg rounded-xl shadow-lg hover:shadow-[#00C7FD]/25 transform hover:scale-105 transition-all duration-300">
              Join Community
            </button>
          </div>

          {/* Intel oneAPI badge */}
          <div className="mt-8 flex items-center gap-4">
            <div className="px-4 py-2 bg-[#0071C5]/20 border border-[#00C7FD]/30 rounded-lg backdrop-blur-sm">
              <span className="text-[#00C7FD] text-sm font-semibold">Powered by Intel oneAPI</span>
            </div>
            <div className="px-4 py-2 bg-[#00D4AA]/20 border border-[#00D4AA]/30 rounded-lg backdrop-blur-sm">
              <span className="text-[#00D4AA] text-sm font-semibold">GGSIPU Official</span>
            </div>
          </div>
        </div>

        {/* Right content - 3D Scene */}
        <div className="flex-1 relative min-h-[400px] md:min-h-full">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />

          {/* Intel-inspired overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0071C5]/5 to-[#003C71]/10 pointer-events-none"></div>
        </div>
      </div>
    </Card>
  )
}