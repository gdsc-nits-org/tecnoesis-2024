/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
  useAnimations,
  Html,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { Suspense, useEffect, useRef } from "react";
import LoadingFallback from "./LoadingFallback";
import * as THREE from "three";
import CountdownTimer from "./CountdownTimer";
import { useMediaQuery } from "usehooks-ts";

export const runtime = "edge";

function Model() {
  const { scene, animations } = useGLTF("/landing.glb");
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
  const matches = useMediaQuery("(max-width: 1024px)");

  return (
    <Suspense fallback={<LoadingFallback />}>
      <Canvas style={{ height: "100vh", width: "100vw" }}>
        <Environment preset="forest" />
        <PerspectiveCamera
          makeDefault
          ref={cameraRef}
          position={[300, 100, 1000]}
          fov={45}
          near={50}
          far={100000}
        />
        <EffectComposer>
          <DepthOfField
            focusDistance={0}
            focalLength={0.2}
            bokehScale={1.5}
            height={480}
          />
          <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
          <Vignette eskil={true} offset={0.7} darkness={1.1} />
        </EffectComposer>

        <ambientLight intensity={0.8} />
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
          enablePan={true}
          maxPolarAngle={Math.PI}
          minDistance={600}
          maxDistance={1600}
          target={[0, 0, 800]}
        />
        {matches ? null : (
          <>
            <Html position={[-90000, 5000, 0]} transform={false}>
              <CountdownTimer />
            </Html>
            <Html position={[90000, 5000, 0]} transform={false}>
              <CountdownTimer />
            </Html>
          </>
        )}
      </Canvas>
    </Suspense>
  );
};

export default Scene;
