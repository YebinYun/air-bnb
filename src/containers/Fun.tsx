import React from "react";
import { Canvas } from "@react-three/fiber";
import { Box, Cloud, Sky, OrbitControls } from "@react-three/drei";
import { BoxGeometry } from "three";

const Fun = () => {
  return (
    <div style={{ borderRadius: "15px" }}>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.9} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <Sky />

          {/* <Cloud /> */}
          <torusGeometry />
          <meshStandardMaterial color={"hotpink"} />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Fun;
