// import React from "react";
// import { Canvas } from "@react-three/fiber";
// import { Box, Cloud, Sky, OrbitControls } from "@react-three/drei";
// import { BoxGeometry } from "three";
// import * as THREE from "three";

// const Fun = () => {
//   return (
//     <div style={{ borderRadius: "15px" }}>
//       <Canvas>
//         <Cloud color="white" opacity="0.2" />
//         <OrbitControls />
//         <ambientLight intensity={1} />
//         <directionalLight color="orange" position={[0, 0, 5]} />
//         <Sky />
//         <mesh>
//           <torusGeometry />
//           <meshStandardMaterial color={"orange"} />
//         </mesh>
//         <mesh position={[1, 1, 2]}>
//           <coneGeometry />
//           <meshStandardMaterial color={"pink"} />
//         </mesh>
//         <mesh position={[0, -1.2, 0]} scale={20} rotation={[1, 0, 0]}>
//           <planeGeometry args={[5, 5]} />
//           <meshStandardMaterial side={THREE.DoubleSide} color={"#fefefe"} />
//         </mesh>
//       </Canvas>
//     </div>
//   );
// };

// export default Fun;
