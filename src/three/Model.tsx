import { useRef, useEffect } from 'react';
import { GLTFLoader } from 'three-stdlib';
import { useLoader } from '@react-three/fiber';
import { GLTF } from 'three-stdlib';
import { useAnimations } from '@react-three/drei';
import { MeshStandardMaterial, Mesh } from 'three';




interface ModelProps {
  modelPath: string;
}

const Model = ({ modelPath }: ModelProps) => {
  const gltf = useLoader(GLTFLoader, modelPath) as GLTF;
  const { animations } = gltf;
  const { ref, mixer, names } = useAnimations(animations);

  // Create a standard material
  const material = new MeshStandardMaterial({ color: 'white', roughness: 0, metalness: 0 });

  useEffect(() => {
    if (names.length > 0) {
      mixer.clipAction(animations[0]).play();
    }

    // Traverse the model and apply the material
    gltf.scene.traverse((child) => {
      if (child instanceof Mesh) {
        child.material = material;
      }
    });
  }, [mixer, animations, names, gltf.scene, material]);

  return <primitive object={gltf.scene} ref={ref} />;
};

export default Model;



// import { useRef, useEffect } from 'react';
// import { GLTFLoader } from 'three-stdlib';
// import { useLoader, useThree } from '@react-three/fiber';
// import { GLTF } from 'three-stdlib';
// import { useAnimations, MeshTransmissionMaterial } from '@react-three/drei';
// import { Mesh } from 'three';

// interface ModelProps {
//   modelPath: string;
// }

// const Model = ({ modelPath }: ModelProps) => {
//   const gltf = useLoader(GLTFLoader, modelPath) as GLTF;
//   const { animations } = gltf;
//   const { ref, mixer, names } = useAnimations(animations);

//   useEffect(() => {
//     if (names.length > 0) {
//       mixer.clipAction(animations[0]).play();
//     }
//   }, [mixer, animations, names]);

//   return (
//     <group ref={ref}>
//       {gltf.scene.children.map((child, index) => {
//         if (child instanceof Mesh) {
//           // Apply the MeshTransmissionMaterial to each mesh
//           return (
//             <mesh key={index} geometry={child.geometry} castShadow receiveShadow>
//               <MeshTransmissionMaterial
//                 clearcoat={1}
//                 thickness={0.1}
//                 anisotropicBlur={0.1}
//                 chromaticAberration={0.1}
//                 samples={8}
//                 resolution={512}
//                 distortionScale={1}
//                 temporalDistortion={1}
//               />
//             </mesh>
//           );
//         }
//         // Return other types of objects without modification
//         return <primitive key={index} object={child} />;
//       })}
//     </group>
//   );
// };

// export default Model;

