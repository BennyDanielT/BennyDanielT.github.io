import React from "react";
import {
  Sphere,
  MeshDistortMaterial,
  OrbitControls
} from "@react-three/drei";

const AnimatedBlob = () => {
  return (
    <Sphere args={[1, 50, 50]} scale={[0, 0, 0]} position={[-3, 0, -3]}>
      <OrbitControls enableZoom={true} />
      <MeshDistortMaterial
        color="#1976D2"
        distort={0.5}
        speed={1.5}
        roughness={5}
      />
    </Sphere>
  );
};

export default AnimatedBlob;
