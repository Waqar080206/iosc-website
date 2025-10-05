'use client'

import { Suspense, lazy, useRef } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const splineRef = useRef<any>(null)

  const onLoad = (spline: any) => {
    splineRef.current = spline

    // Try to find and recolor objects
    try {
      const scene = spline.scene
      if (scene) {
        // Intel colors
        const intelBlue = 0x0F2793
        const intelLightBlue = 0x1991FF

        // Traverse and recolor objects
        scene.traverse((child: any) => {
          if (child.isMesh && child.material) {
            // Change material color to Intel blue
            if (child.material.color) {
              child.material.color.setHex(intelBlue)
            }
            // Add emission for glow effect
            if (child.material.emissive) {
              child.material.emissive.setHex(intelLightBlue)
              child.material.emissiveIntensity = 0.2
            }
          }
        })
      }
    } catch (error) {
      console.log('Could not programmatically change Spline colors:', error)
    }
  }

  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center bg-intel-brand">
          <div className="intel-spinner"></div>
        </div>
      }
    >
      <div className="spline-container relative w-full h-full">
        <Spline
          scene={scene}
          className={`${className} block mx-auto`}
          onLoad={onLoad}
          ref={splineRef}
        />
      </div>
    </Suspense>
  )
}