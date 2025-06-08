// StardustCanvas.jsx
import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function Stardust() {
  const points = useRef();
  const { size } = useThree();

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Particle count based on screen width
  const particles = useMemo(() => {
    const count = Math.floor(size.width * 0.4); // ~0.4 particles per px
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, [size.width]);

  // Update parallax drift on mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({
        x: (e.clientX / size.width - 0.5) * 2,
        y: (e.clientY / size.height - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [size]);

  useFrame(() => {
    if (!points.current) return;
    points.current.rotation.y += 0.0005;
    points.current.rotation.x += 0.00025;
    points.current.position.x = mouse.x * 0.5;
    points.current.position.y = -mouse.y * 0.5;
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
        size={0.05}
        sizeAttenuation
        transparent
        opacity={0.6}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function StardustCanvas() {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <Stardust />
    </Canvas>
  );
}
