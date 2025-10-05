'use client';

import { useEffect, useState } from "react";
import { Orbitron, Inter } from "next/font/google";
import { SplineHeroSection } from "@/components/ui/spline-hero";

const orbitron = Orbitron({
    weight: ['400', '700', '900'],
    subsets: ['latin'],
    display: 'swap',
})

const inter = Inter({
    weight: ['400', '500', '600'],
    subsets: ['latin'],
    display: 'swap',
})

const HeroSection = () => {
    const [showSplash, setShowSplash] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);
    const [heroAnimating, setHeroAnimating] = useState(false);

    useEffect(() => {
        // Load splash screen
        const loadTimer = setTimeout(() => {
            setIsLoaded(true);
        }, 500);

        // Click handler to reveal hero section
        const handleClick = () => {
            if (showSplash) {
                setHeroAnimating(true);
                setTimeout(() => {
                    setShowSplash(false);
                }, 100);
            }
        };

        // Event listeners
        if (showSplash) {
            window.addEventListener('click', handleClick);
            window.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    handleClick();
                }
            });
        }

        return () => {
            clearTimeout(loadTimer);
            window.removeEventListener('click', handleClick);
        };
    }, [showSplash]);

    // Simple 2D Splash Screen with Intel Branding
    if (showSplash) {
        return (
            <section className="fixed inset-0 bg-gradient-to-br from-[#1E1E1E] via-[#003C71] to-[#0071C5] w-full h-full flex items-center justify-center cursor-pointer z-50">
                {/* Intel-inspired background pattern */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0071C5]/30 via-[#00C7FD]/20 to-[#00D4AA]/30 animate-pulse"></div>
                </div>
                
                {/* Simple 2D IoSC Text with Intel Colors */}
                <div className="text-center relative z-10">
                    {/* Intel oneAPI badge */}
                    <div className={`mb-8 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <span className="text-[#00C7FD] text-lg md:text-xl font-semibold tracking-wide">INTEL oneAPI</span>
                    </div>
                    
                    <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                        <h1 className={`${orbitron.className} text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-[#00C7FD] to-[#00D4AA] select-none whitespace-nowrap`}>
                            IoSC
                        </h1>
                    </div>
                    
                    {/* Subtitle */}
                    <div className={`mt-4 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <p className={`${inter.className} text-xl md:text-2xl text-[#00C7FD] font-semibold`}>
                            Students Club - East Delhi Campus
                        </p>
                    </div>
                    
                    {/* Click instruction */}
                    <div className={`mt-8 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <p className={`${inter.className} text-lg text-white/70 animate-pulse`}>
                            Click anywhere to continue
                        </p>
                        <div className="mt-4 flex justify-center">
                            <div className="w-8 h-8 border-2 border-[#00C7FD] rounded-full animate-ping"></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    // Main Hero Section - Only Spline 3D Component
    return (
        <section className={`relative min-h-screen w-full transition-all duration-1000 ${
            heroAnimating ? 'animate-hero-entrance' : ''
        }`}>
            <SplineHeroSection />
        </section>
    );
}

export default HeroSection;