import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

import type { Group } from "three";

const MODEL_URL = `/assets/3d_models/AURA_headphones_web.glb`;

function AuraHeadphones() {
  const groupRef = useRef<Group>(null);

  const { scene } = useGLTF(MODEL_URL);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Slow automatic rotation
    groupRef.current.rotation.y += delta * 0.15;

    // Small floating animation
    groupRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.8) * 0.05;
  });

  return (
    <group ref={groupRef} rotation={[0.05, -0.35, 0]} scale={7}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload(MODEL_URL);

export default AuraHeadphones;
