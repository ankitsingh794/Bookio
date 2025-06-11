// StardustCanvas.jsx
import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// Utility hook for responsive detection
function useIsMobile() {
  return window.matchMedia("(max-width: 600px)").matches;
}

function Stardust() {
  const points = useRef();
  const { size } = useThree();
  const isMobile = useIsMobile();

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Particle count and spread based on screen size
  const particles = useMemo(() => {
    // Fewer particles and smaller spread on mobile for performance and clarity
    const density = isMobile ? 0.15 : 0.4;
    const spread = isMobile ? 10 : 20;
    const count = Math.floor(size.width * density);
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * spread;
    }
    return positions;
  }, [size.width, isMobile]);

  // Update parallax drift on mouse/touch move
  useEffect(() => {
    const handlePointerMove = (e) => {
      let clientX, clientY;
      if (e.touches && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }
      setMouse({
        x: (clientX / size.width - 0.5) * 2,
        y: (clientY / size.height - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("touchmove", handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("touchmove", handlePointerMove);
    };
  }, [size]);

  useFrame(() => {
    if (!points.current) return;
    points.current.rotation.y += isMobile ? 0.0002 : 0.0005;
    points.current.rotation.x += isMobile ? 0.0001 : 0.00025;
    points.current.position.x = mouse.x * (isMobile ? 0.2 : 0.5);
    points.current.position.y = -mouse.y * (isMobile ? 0.2 : 0.5);
  });

  return (
    <points ref={points}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        color="#a2ccff"
        size={isMobile ? 0.09 : 0.05} // Larger points on mobile for visibility
        sizeAttenuation
        transparent
        opacity={isMobile ? 0.7 : 0.6}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function StardustCanvas() {
  const isMobile = useIsMobile();
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        touchAction: "none",
      }}
      camera={{
        position: [0, 0, isMobile ? 7 : 5], // Pull back camera on mobile for more coverage
        fov: isMobile ? 90 : 75,
      }}
    >
      <Stardust />
    </Canvas>
  );
}
