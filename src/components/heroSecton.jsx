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

    // Simple 2D Splash Screen with Intel 2024 Branding
    if (showSplash) {
        return (
            <section className="fixed inset-0 bg-intel-brand w-full h-full flex items-center justify-center cursor-pointer z-50">
                {/* Intel 2024 background pattern */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute inset-0 bg-gradient-to-r from-intel-500/40 via-intel-400/30 to-intel-300/40 animate-intel-pulse"></div>
                </div>
                
                {/* Intel Core Ultra Badge */}
                <div className="absolute top-8 left-8 intel-badge px-4 py-2 rounded-lg">
                    <span className="text-intel-400 text-sm font-semibold tracking-wider">INTEL CORE ULTRA</span>
                </div>

                {/* Simple 2D IoSC Text with Intel 2024 Colors */}
                <div className="text-center relative z-10">

                    <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                        <h1 className={`${orbitron.className} text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-black intel-text-gradient select-none whitespace-nowrap`}>
                            I o S C
                        </h1>
                    </div>

                    {/* Click instruction */}
                    <div className={`mt-8 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <p className={`${inter.className} text-lg intel-text-white-bright animate-intel-pulse`}>
                            Click anywhere to continue
                        </p>
                        <div className="mt-4 flex justify-center">
                            <div className="w-8 h-8 border-2 border-intel-400 rounded-full animate-ping"></div>
                        </div>
                    </div>
                </div>
                
                {/* Intel branding watermark */}
                <div className="absolute bottom-8 right-8 text-intel-400/60 text-sm font-medium">
                    Powered by Intel
                </div>
            </section>
        );
    }

    // Main Hero Section - Only Spline 3D Component
    return (
        <section className={`relative min-h-screen w-full transition-all duration-1000 ${heroAnimating ? 'animate-hero-entrance' : ''
            }`}>
            <SplineHeroSection />
        </section>
    );
}

export default HeroSection;