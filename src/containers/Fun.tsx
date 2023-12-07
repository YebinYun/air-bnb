import React from "react";
import { Canvas } from "@react-three/fiber";
import { Box } from "three";

const Fun = () => {
  return (
    <div>
      <Canvas>
        <Box args={[2, 2, 2]} />
      </Canvas>
    </div>
  );
};

export default Fun;
