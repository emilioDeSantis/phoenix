import React, { useRef, useEffect, useMemo } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three-stdlib";
import { useAnimations } from "@react-three/drei";
import { Color, LoopRepeat, Mesh, MeshStandardMaterial, PointsMaterial, ShaderMaterial, SkinnedMesh, UniformsLib, UniformsUtils } from "three";
import ParticleSystem from "./Particles";

const RandomShape = () => {
    const meshRef = useRef();

    const gltf = useLoader(GLTFLoader, "/20880out.gltf");
    // const gltf = useLoader(GLTFLoader, "/phoenix.glb");
    const { animations } = gltf;
    const { ref, mixer, names } = useAnimations(animations, meshRef);

    const material = new MeshStandardMaterial({ color: 'white', roughness: 0, metalness: 0, visible: false });
    
    // const material = new ShaderMaterial({
    // //   vertexShader: vertexShader,
    //   fragmentShader: fragmentShader
    // });


    const vertexShader = `
    #include <skinning_pars_vertex>
    void main() {
        #include <skinbase_vertex>
        #include <begin_vertex>
        #include <skinning_vertex>
        #include <project_vertex>
    }`;

    const fragmentShader = `
    void main() {
        gl_FragColor = vec4(0, 0.0, 0.0, 1.0); // Red color for testing
    }`;
    
      

    const customMaterial = useMemo(() => {
        return new ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: UniformsUtils.merge([
                UniformsLib['lights'],
                {
                    time: { value: 1.0 }
                    // Add additional uniforms if needed
                }
            ]),
            skinning: true, // Enable skinning
            lights: true, // Considering the lights for this material
        });
    }, []);
      
    // useEffect(() => {
    //     if (names.length > 0) {
    //         mixer.clipAction(animations[0]).play();
    //       }

    //   gltf.scene.traverse((child) => {
    //     if (child instanceof Mesh) {
    //       child.material = material;
    //     }
    //   });
    // }, [mixer, animations, names, gltf.scene, material]);

    useEffect(() => {
        let action;
        if (names.length > 0) {
            action = mixer.clipAction(animations[0]); // Assuming the bird animation is the first one
            action.play();
            // action.setEffectiveTimeScale(1);  // Adjust the speed here. 0.5 for half speed, etc.
        }
    
        gltf.scene.traverse((child) => {
            if (child instanceof SkinnedMesh) {
                child.material = material;
            }
        });
    
        return () => {
            // Cleanup: Reset the timeScale when the component unmounts or if the dependency changes
            if (action) {
                action.setEffectiveTimeScale(1);
            }
        }
    }, [mixer, animations, names, gltf.scene, material]);
    

    useFrame((state, delta) => {
        mixer.update(delta);
    });

    return (
        <>
            {gltf.scene && (
                <>
                    <primitive object={gltf.scene} ref={ref} />
                    <ParticleSystem particleCount={10} groupRef={meshRef} />
                </>
            )}
        </>
    );
};

export default RandomShape;
