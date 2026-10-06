import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, Float } from "@react-three/drei";
import { Suspense } from "react";

import AuraHeadphones from "@/components/Three/AuraHeadphones";

function HeadphoneScene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 5],
        fov: 35,
      }}
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: true,
      }}
    >
      <Suspense fallback={null}>
        {/* General scene lighting */}
        <ambientLight intensity={0.7} />

        <directionalLight position={[5, 5, 5]} intensity={2} />

        <directionalLight position={[-4, 2, -2]} intensity={1} />

        <Float speed={1} rotationIntensity={0.05} floatIntensity={0.2}>
          <AuraHeadphones />
        </Float>

        <ContactShadows
          position={[0, -1.7, 0]}
          opacity={0.3}
          scale={7}
          blur={3}
          far={4}
        />

        <Environment preset="studio" />
      </Suspense>
    </Canvas>
  );
}

export default HeadphoneScene;
