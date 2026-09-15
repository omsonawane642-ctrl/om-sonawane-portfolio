"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

type PointerRef = React.MutableRefObject<{ x: number; y: number }>;

function PortraitGlobe({ pointer }: { pointer: PointerRef }) {
  const root = useRef<THREE.Group>(null);
  const portrait = useRef<THREE.Mesh>(null);
  const current = useRef({ x: 0, y: 0 });
  const texture = useMemo(
    () => new THREE.TextureLoader().load("/hero.png"),
    []
  );

  useEffect(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.needsUpdate = true;

    return () => texture.dispose();
  }, [texture]);

  useFrame((state, delta) => {
    if (!root.current) return;

    const px = THREE.MathUtils.clamp(pointer.current.x, -1, 1);
    const py = THREE.MathUtils.clamp(pointer.current.y, -1, 1);

    const tx = -py * 0.62;
    const ty = px * 1.05;

    current.current.x = THREE.MathUtils.damp(
      current.current.x,
      tx,
      7,
      delta
    );

    current.current.y = THREE.MathUtils.damp(
      current.current.y,
      ty,
      7,
      delta
    );

    const idle = state.clock.elapsedTime * 0.055;

    root.current.rotation.x = current.current.x;
    root.current.rotation.y = current.current.y + idle;
    root.current.rotation.z =
      Math.sin(state.clock.elapsedTime * 0.35) * 0.012;

    // Portrait remains stable and does not rotate with the globe.
    if (portrait.current) {
      portrait.current.rotation.set(0, 0, 0);
    }
  });

  return (
    <>
      {/* Stable portrait */}
      <mesh
        ref={portrait}
        position={[0, -0.02, 1.38]}
        scale={0.92}
        renderOrder={10}
      >
        <planeGeometry args={[2.72, 2.72]} />
        <shaderMaterial
          transparent
          depthTest={false}
          depthWrite={false}
          uniforms={{ map: { value: texture } }}
          vertexShader={`varying vec2 vUv; void main(){vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`}
          fragmentShader={`uniform sampler2D map; varying vec2 vUv; void main(){vec2 p=vUv-0.5; float r=length(p); float a=1.0-smoothstep(0.47,0.51,r); vec4 c=texture2D(map,vUv); c.rgb*=vec3(0.92,0.98,1.04); gl_FragColor=vec4(c.rgb,a*0.97);}`}
        />
      </mesh>

      {/* Rotating globe */}
      <group ref={root} scale={0.92}>
        {/* warm/cool spherical atmosphere */}
        <mesh scale={1.025}>
          <sphereGeometry args={[1.74, 64, 64]} />
          <meshBasicMaterial
            color="#06232c"
            transparent
            opacity={0.13}
          />
        </mesh>

        {/* Fine digital wireframe matching the reference style. */}
        <mesh renderOrder={12}>
          <icosahedronGeometry args={[1.77, 5]} />
          <meshBasicMaterial
            color="#65eaff"
            wireframe
            transparent
            opacity={0.18}
            depthTest={false}
            depthWrite={false}
          />
        </mesh>

        <mesh scale={1.008} renderOrder={13}>
          <sphereGeometry args={[1.70, 48, 28]} />
          <meshBasicMaterial
            color="#c5f8ff"
            wireframe
            transparent
            opacity={0.0}
            depthTest={false}
            depthWrite={false}
          />
        </mesh>

        {/* Globe latitude rings */}
        {[-0.72, -0.40, 0, 0.40, 0.72].map((y, i) => {
          const radius =
            Math.sqrt(Math.max(0.08, 1 - y * y)) * 1.70;

          return (
            <mesh
              key={i}
              position={[0, y * 1.70, 0]}
              rotation={[0, 0, 0]}
              renderOrder={14}
            >
              <torusGeometry args={[radius, 0.006, 6, 128]} />
              <meshBasicMaterial
                color="#58e7ff"
                transparent
                opacity={0.1}
                depthTest={false}
                depthWrite={false}
              />
            </mesh>
          );
        })}
      </group>
    </>
  );
}

function Orbit({
  radius,
  rotation,
  color,
  speed,
  opacity,
}: {
  radius: number;
  rotation: [number, number, number];
  color: string;
  speed: number;
  opacity: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.z += delta * speed;
    }
  });

  return (
    <mesh ref={ref} rotation={rotation}>
      <torusGeometry args={[radius, 0.012, 12, 180]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={opacity}
      />
    </mesh>
  );
}

function Particles({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const a = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const r = 2.45 + Math.random() * 2.4;
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);

      a[i * 3] = r * Math.sin(p) * Math.cos(t);
      a[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
      a[i * 3 + 2] = r * Math.cos(p);
    }

    return a;
  }, [count]);

  useFrame((_, d) => {
    if (ref.current) {
      ref.current.rotation.y += d * 0.012;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#bff6ff"
        size={0.014}
        opacity={0.1}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function GlobeScene({
  pointerRef,
  isTouch,
}: {
  pointerRef: PointerRef;
  isTouch: boolean;
}) {
  const [dpr, setDpr] = useState<[number, number]>([1, 1.5]);

  useEffect(() => {
    setDpr(window.innerWidth < 768 ? [1, 1.2] : [1, 1.7]);
  }, []);

  return (
    <div className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 40 }}
        dpr={dpr}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <PortraitGlobe pointer={pointerRef} />

        <Orbit
          radius={2.25}
          rotation={[Math.PI / 2.45, 0.22, 0.08]}
          color="#5eeaff"
          speed={0.07}
          opacity={0.5}
        />

        <Orbit
          radius={2.55}
          rotation={[Math.PI / 1.92, -0.28, 0.45]}
          color="#ffb25f"
          speed={-0.045}
          opacity={0.28}
        />

        <Particles count={isTouch ? 100 : 320} />
      </Canvas>
    </div>
  );
}
