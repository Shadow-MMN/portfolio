"use client";
import React, { useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
//@ts-expect-error so that you won't disturb me
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = (props: React.ComponentProps<typeof Points>) => {
  const ref = useRef<THREE.Points>(null);

  // Memoize the sphere generation to prevent recreation on every render
  const sphere = useMemo(() => {
    const positions = random.inSphere(new Float32Array(5000), { radius: 1.2 });
    // Check for NaN values and replace them
    for (let i = 0; i < positions.length; i++) {
      if (isNaN(positions[i])) {
        positions[i] = 0;
      }
    }
    return positions;
  }, []);

  // Use a more consistent rotation speed
  useFrame((state, delta) => {
    if (ref.current) {
      // Clamp delta to prevent large jumps during frame drops
      const smoothDelta = Math.min(delta, 0.016); // Cap at ~60fps equivalent
      ref.current.rotation.x -= smoothDelta / 6;
      ref.current.rotation.y -= smoothDelta / 8;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
          alphaTest={0.01} // Helps with rendering performance
          blending={THREE.AdditiveBlending} // Smoother blending
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-[-1]">
    <Canvas
      camera={{ position: [0, 0, 1] }}
      dpr={[1, 2]} // Adaptive pixel ratio for better performance
      performance={{ min: 0.5 }} // Maintain at least 30fps
      gl={{
        antialias: true, // Smooth edges
        alpha: true,
        powerPreference: "high-performance",
      }}
    >
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);
export default StarsCanvas;
