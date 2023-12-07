import Model from "../app/three/Model";
import { OrbitControls } from "@react-three/drei";
import { PerspectiveCamera } from "three";
import * as THREE from "three";
import { useRef, useReducer, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
    useGLTF,
    MeshTransmissionMaterial,
    Environment,
    Lightformer,
} from "@react-three/drei";
import {
    CuboidCollider,
    BallCollider,
    Physics,
    RigidBody,
} from "@react-three/rapier";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import { easing } from "maath";
import Cube from "../app/three/Particles";
import GLTFModelWithParticles from "../app/three/Bird";
import RandomShape from "../app/three/Bird";

const Scene = () => {
    return (
        <Canvas
            style={{ height: "100vh" }}
            shadows
            dpr={[1, 1.5]}
            gl={{ antialias: false }}
            camera={{ position: [0, 10, 10], fov: 100, near: 0.01, far: 60 }}
        >
            <OrbitControls />
            <color attach="background" args={["#141622"]} />
            {/* <ambientLight intensity={1} /> */}
            <spotLight position={[2, 0, -20]} angle={0.8} penumbra={1} intensity={1000} castShadow />
            <Suspense fallback={null}>
                {/* <Model modelPath="/20880out.gltf" /> */}
                <RandomShape/>
                <mesh position={[0, 2, 0]}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    {/* <meshStandardMaterial
                        color={0xffffff}
                        roughness={0.3}
                        metalness={0}
                    /> */}
                    <MeshTransmissionMaterial clearcoat={1} thickness={0.1} anisotropicBlur={0.1} chromaticAberration={0.1} samples={8} resolution={512} distortionScale={1} temporalDistortion={1}/>
                </mesh>
                <Environment resolution={256}>
                    <group rotation={[-Math.PI / 3, 0, 1]}>
                        <Lightformer
                            form="circle"
                            intensity={4}
                            rotation-x={Math.PI / 2}
                            position={[0, 5, -9]}
                            scale={2}
                        />
                        <Lightformer
                            form="circle"
                            intensity={2}
                            rotation-y={Math.PI / 2}
                            position={[-5, 1, -1]}
                            scale={2}
                        />
                        <Lightformer
                            form="circle"
                            intensity={2}
                            rotation-y={Math.PI / 2}
                            position={[-5, -1, -1]}
                            scale={2}
                        />
                        <Lightformer
                            form="circle"
                            intensity={2}
                            rotation-y={-Math.PI / 2}
                            position={[10, 1, 0]}
                            scale={8}
                        />
                    </group>
                </Environment>
            </Suspense>
        </Canvas>
    );
};

export default Scene;

// https://twitter.com/lusionltd/status/1701534187545636964
// https://lusion.co

// function Scene() {
//   return (
//     <Canvas shadows dpr={[1, 1.5]} gl={{ antialias: false }} camera={{ position: [0, 0, 15], fov: 17.5, near: 1, far: 20 }}>
//       <color attach="background" args={['#141622']} />
//       <ambientLight intensity={1} />
//       <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
//       {/* <EffectComposer disableNormalPass multisampling={8}>
//         <N8AO distanceFalloff={1} aoRadius={1} intensity={4} />
//       </EffectComposer> */}
// <Environment resolution={256}>
//   <group rotation={[-Math.PI / 3, 0, 1]}>
//     <Lightformer form="circle" intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} />
//     <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
//     <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={2} />
//     <Lightformer form="circle" intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={8} />
//   </group>
// </Environment>
//       <sphereGeometry args={[0.5, 0, 0]} />
//       <Suspense fallback={null}>
//         <Model modelPath="/20880out.gltf" />
//       </Suspense>
//     </Canvas>
//   )
// }

// export default Scene;
