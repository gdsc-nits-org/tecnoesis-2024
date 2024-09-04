/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";

import { Environment, OrbitControls, PerspectiveCamera ,useGLTF, useAnimations, Html } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const runtime = "edge";

function Model() {
  const { scene, animations } = useGLTF('/landing.glb');
  const { actions } = useAnimations(animations, scene);
  const modelRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (actions && animations.length) {
      animations.forEach((clip) => {
        actions[clip.name]?.play();
      });
    }

    return () => {
      if (actions) {
        animations.forEach((clip) => {
          actions[clip.name]?.stop();
        });
      }
    };
  }, [actions, animations]);

  return <primitive object={scene} ref={modelRef} />;
}

const Scene = () => {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const controlsRef = useRef(null);

  useEffect(() => {
    if (cameraRef.current && controlsRef.current) {
      // @ts-expect-error: controls ref is guranteed to be a OrbitControl
      controlsRef.current.target.set(10, 10, -400);
      // @ts-expect-error: controls ref is guranteed to be a OrbitControl
      controlsRef.current.update();
    }
  }, []);

  return (
    <Canvas style={{ height: '100vh', width: '100vw' }}>
      <Environment preset="sunset" />
      <PerspectiveCamera
        makeDefault
        ref={cameraRef}
        position={[0, 1500, 80000]}
        fov={100}
        near={50}
        far={100000}
      />
      <EffectComposer>
        <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={1.5} height={480} />
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.5} height={300} />
        <Noise opacity={0.01} />
        <Vignette eskil={false} offset={0.7} darkness={1.1} />
      </EffectComposer>

      <ambientLight intensity={2} />
      <Model />
      <meshPhysicalMaterial
        color="blue"
        metalness={0.6}
        roughness={0.2}
        clearcoat={1.0}
        clearcoatRoughness={0.1}
        transmission={2}
        ior={1.5}
      />
        <OrbitControls
        ref={controlsRef}
        enableRotate={true}
        enablePan={false}
        maxPolarAngle={Math.PI/2}
        minDistance={10}
        maxDistance={1500}
        enableDamping={true}
        dampingFactor={0.1}
        target={[0, 0, -470]}
      />
      <Html position={[-300, 1100, 0]} transform={false}>
        <div style={{ color: 'white', textWrap: "nowrap" }}>
          Beyond the Horizon, Into the Arena
        </div>
      </Html>
    </Canvas>
  );
};

export default Scene;
