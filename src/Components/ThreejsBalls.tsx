import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import CANNON from "cannon";


const ThreeCanvas: React.FC = () => {
    const originalPositionsRef = useRef<CANNON.Vec3[]>([]);
    // const worldRef = useRef<CANNON.World>(new CANNON.World());
    const cubeBodiesRef = useRef<CANNON.Body[]>([]);
    const canvasRef = useRef<HTMLDivElement>(null);
    const useCustomForceRef = useRef(false);
    const [useCustomForce, setUseCustomForce] = React.useState(false);

    useEffect(() => {
        useCustomForceRef.current = useCustomForce;
    }, [useCustomForce]);

    useEffect(() => {
        // Three.js setup
        const scene = new THREE.Scene(); // These values can be adjusted based on your scene's size and scaling

        const scale = 30;
        const left = -window.innerWidth / 2 / scale;
        const right = window.innerWidth / 2 / scale;
        const top = window.innerHeight / 2 / scale;
        const bottom = -window.innerHeight / 2 / scale;
        const near = 0.01;
        const far = 1000;

        // const camera = new THREE.OrthographicCamera(
        //     left,
        //     right,
        //     top,
        //     bottom,
        //     near,
        //     far
        // );
        // camera.position.set(0, 5, 100);
        const camera = new THREE.PerspectiveCamera(
            45,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );

        camera.position.set(0, 10, 26);

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.shadowMap.enabled = true; // Enable shadow mapping
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        // camera.position.z = 5;
        camera.lookAt(new THREE.Vector3(0, 3, 0));

        if (canvasRef.current) {
            canvasRef.current.appendChild(renderer.domElement);
        }

        // Cannon.js setup
        const world = new CANNON.World();
        world.gravity.set(0, -9.82, 0); // Earth gravity

        // Shared material
        const physMaterial = new CANNON.Material("physicsMaterial");
        const contactMaterial = new CANNON.ContactMaterial(
            physMaterial,
            physMaterial,
            {
                restitution: 0.01, // Increased bounciness
                friction: 0.005, // Decreased friction
            }
        );
        world.addContactMaterial(contactMaterial);

        // Cannon.js - Ground
        const groundShape = new CANNON.Plane();
        const groundBody = new CANNON.Body({
            mass: 0, // Mass 0 makes the ground static
            shape: groundShape,
            material: physMaterial,
        });
        groundBody.quaternion.setFromAxisAngle(
            new CANNON.Vec3(1, 0, 0),
            -Math.PI / 2
        );
        world.addBody(groundBody);

        // Three.js - Ground
        const ground = new THREE.Mesh(
            new THREE.PlaneGeometry(10, 10),
            new THREE.MeshPhongMaterial({
                color: 0x888888,
                side: THREE.DoubleSide,
            })
        );
        ground.rotation.x = -Math.PI / 2;
        ground.receiveShadow = true;
        scene.add(ground);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0x404040);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.3);
        directionalLight.position.set(5, 10, 7.5);
        directionalLight.castShadow = true; // Enable shadows for this light

        const spotLight = new THREE.SpotLight(0xddffff, 300);
        spotLight.position.set(0, 20, -35);
        spotLight.angle = Math.PI / 4;
        spotLight.penumbra = 0.1;
        spotLight.decay = 1;
        spotLight.distance = 100;

        // If you want this light to cast shadows
        spotLight.castShadow = true;
        spotLight.shadow.mapSize.width = 1024;
        spotLight.shadow.mapSize.height = 1024;

        const spotLightHelper = new THREE.SpotLightHelper(spotLight);
        // scene.add(spotLightHelper);

        // Optional: Fine-tune shadow properties
        directionalLight.shadow.mapSize.width = 512; // Default
        directionalLight.shadow.mapSize.height = 512; // Default
        directionalLight.shadow.camera.near = 0.5; // Default
        directionalLight.shadow.camera.far = 500;
        // scene.add(ambientLight);
        scene.add(spotLight);
        scene.add(directionalLight);

        // Cannon.js and Three.js - Cubes

        const cubeMeshes: THREE.Mesh[] = [];
        // const cubeBodies: CANNON.Body[] = [];
        // Grid parameters

        const gridSize = 800; // 5x5x5 grid
        const spacing = 1.001; // 2 units apart from each other
        // const originalPositions: CANNON.Vec3[] = [];

        for (let x = 0; x < gridSize; x++) {
            for (let y = 0; y < gridSize; y++) {
                for (let z = 0; z < gridSize; z++) {
                    // if (
                    //     x === 0 ||
                    //     x === gridSize - 1 ||
                    //     y === 0 ||
                    //     y === gridSize - 1 ||
                    //     z === 0 ||
                    //     z === gridSize - 1
                    // ) {
                      if (x== gridSize/2 && z==gridSize/2) 
                      {
                        // Calculate position based on grid coordinates (x, y, z) and spacing
                        const posX = (x - gridSize / 2) * spacing + (Math.random() * 0.001);
                        const posY =
                            (y - gridSize / 2) * spacing + gridSize / 2 + 5 + (Math.random() * 0.001);
                        const posZ = (z - gridSize / 2) * spacing + (Math.random() * 0.001);

                        // ... Inside your loop where cubes are created:
                        const originalPosition = new CANNON.Vec3(
                            posX,
                            posY,
                            posZ
                        );
                        originalPositionsRef.current.push(
                            originalPosition.clone()
                        );

                        // Cannon.js body
                        // const cubeShape = new CANNON.Box(
                        //     new CANNON.Vec3(0.5, 0.5, 0.5)
                        // );
                        // const cubeBody = new CANNON.Body({
                        //     mass: 1,
                        //     position: new CANNON.Vec3(posX, posY, posZ),
                        //     shape: cubeShape,
                        //     material: physMaterial,
                        // });
                        // // cubeBody.quaternion.setFromEuler(
                        // //     Math.random() * Math.PI, // random rotation around x
                        // //     Math.random() * Math.PI, // random rotation around y
                        // //     Math.random() * Math.PI // random rotation around z
                        // // );
                        // world.addBody(cubeBody);
                        // cubeBodiesRef.current.push(cubeBody);

                        // Cannon.js body for a sphere
                        const sphereRadius = 0.5; // Set the radius of the sphere
                        const sphereShape = new CANNON.Sphere(sphereRadius);
                        const sphereBody = new CANNON.Body({
                            mass: 1, // Adjust mass as needed
                            position: new CANNON.Vec3(posX, posY, posZ),
                            shape: sphereShape,
                            material: physMaterial,
                        });
                        world.addBody(sphereBody);
                         cubeBodiesRef.current.push(sphereBody);

                        // // Three.js mesh
                        // const cube = new THREE.Mesh(
                        //     new THREE.BoxGeometry(1, 1, 1),
                        //     new THREE.MeshStandardMaterial({
                        //         color: 0xffffff,
                        //         roughness: 0.3, // Lower roughness makes the surface shinier
                        //         metalness: 0, // Adjust metalness for shininess
                        //     })
                        // );
                        // cube.position.set(posX, posY, posZ);
                        // // const cubeQuaternion = new THREE.Quaternion(
                        // //     cubeBody.quaternion.x,
                        // //     cubeBody.quaternion.y,
                        // //     cubeBody.quaternion.z,
                        // //     cubeBody.quaternion.w
                        // // );
                        // // cube.quaternion.copy(cubeQuaternion); // Apply the same quaternion as the Cannon.js body
                        // cube.castShadow = true; // Cubes can cast shadows
                        // cube.receiveShadow = true;
                        // scene.add(cube);
                        // cubeMeshes.push(cube);

                          const sphere = new THREE.Mesh(
                            new THREE.SphereGeometry(sphereRadius, 32, 32),  // 32 segments for both width and height for a smooth sphere
                            new THREE.MeshStandardMaterial({
                                color: 0xffffff,
                                roughness: 0.3,
                                metalness: 0,
                            })
                        );
                        sphere.position.set(posX, posY, posZ);
                        sphere.castShadow = true;
                        sphere.receiveShadow = true;
                        scene.add(sphere);
                        cubeMeshes.push(sphere);
                    }
                }
            }
        }

        const mouseSphereGeometry = new THREE.SphereGeometry(1, 32, 32);
        const mouseSphereMaterial = new THREE.MeshStandardMaterial({
            color: 0xff00ff,
        });
        const mouseSphere = new THREE.Mesh(
            mouseSphereGeometry,
            mouseSphereMaterial
        );
        mouseSphere.castShadow = true;
        // scene.add(mouseSphere);

        const mouseSphereBody = new CANNON.Body({
            mass: 0,
            shape: new CANNON.Sphere(1),
            material: physMaterial,
        });
        // mouseSphereBody.material.restitution = 1;

        // world.addBody(mouseSphereBody);

        // Mouse coordinates and raycaster setup
        const mouse = new THREE.Vector2();
        const raycaster = new THREE.Raycaster();
        let plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -3); // Horizontal plane

        // function updateMouseSpherePosition(targetPosition: THREE.Vector3) {
        //     // Smoothly move the sphere towards the target position
        //     const smoothingFactor = 0.2; // Adjust this factor to control the smoothing
        //     const targetPositionCannon = new CANNON.Vec3().set(
        //         targetPosition.x,
        //         targetPosition.y,
        //         targetPosition.z
        //     );
        //     mouseSphereBody.position.lerp(
        //         targetPositionCannon,
        //         smoothingFactor
        //     );
        // }

        function onMouseMove(event: MouseEvent) {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);
            let intersection = new THREE.Vector3();
            raycaster.ray.intersectPlane(plane, intersection);

            mouseSphere.position.copy(intersection);
            mouseSphereBody.position.set(
                intersection.x,
                intersection.y,
                intersection.z
            );
            mouseSphereBody.velocity.set(0, 0, 0); // Reset velocity to avoid unnatural motion

            // const targetPosition = new THREE.Vector3().copy(intersection);
            // updateMouseSpherePosition(targetPosition);
        }

        window.addEventListener("mousemove", onMouseMove, false);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            world.step(1 / 60);

            // attach the mouse sphere cannon to three
            mouseSphereBody.position.set(
              mouseSphere.position.x,
              mouseSphere.position.y,
              mouseSphere.position.z
            );

            // Sync Three.js meshes with Cannon.js bodies
            cubeMeshes.forEach((mesh, index) => {
                const body = cubeBodiesRef.current[index];

                // Manually update the position and rotation (quaternion) of the mesh from the body
                mesh.position.set(
                    body.position.x,
                    body.position.y,
                    body.position.z
                );
                mesh.quaternion.set(
                    body.quaternion.x,
                    body.quaternion.y,
                    body.quaternion.z,
                    body.quaternion.w
                ); // Set each component separately

                if (useCustomForceRef.current) {
                    cubeBodiesRef.current.forEach((body, index) => {
                        const originalPosition =
                            originalPositionsRef.current[index];

                        // Calculate the directional force towards the original position
                        const forceDirection = originalPosition.vsub(
                            body.position
                        );
                        let forceMagnitude = Math.min(forceDirection.norm() * 10, 2000);
                        forceDirection.normalize();

                        // Calculate damping force - force opposing the velocity
                        const dampingCoefficient = 0.01; // Tune this value as needed
                        const dampingForce =
                            body.velocity.scale(dampingCoefficient);

                            // const dampingForce = body.velocity
                            // .clone()
                            // .scale(body.velocity.norm() * dampingCoefficient);

                        // Total force is a combination of moving towards the original position
                        // and opposing the current velocity
                        forceDirection.scale(forceMagnitude, forceDirection);
                        forceDirection.vsub(dampingForce, forceDirection);

                        body.applyForce(forceDirection, body.position);
                    });
                }
            });

            // Render
            renderer.render(scene, camera);
        };

        animate();

        // Handle window resize
        window.addEventListener("resize", () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.setSize(width, height);
            // camera.aspect = width / height;
            camera.updateProjectionMatrix();
        });

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            if (canvasRef.current) {
                canvasRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    // useEffect(() => {
    //   // This effect only handles updating gravity,
    //   // it should not reinitialize the scene
    //   if (useCustomForce) {
    //      cubeBodiesRef.current.forEach((body, index) => {
    //       const originalPosition = originalPositionsRef.current[index];
    //       const forceDirection = originalPosition.vsub(body.position);
    //       const forceMagnitude = forceDirection.norm() * 80; // Adjust 10 as needed
    //       forceDirection.normalize();
    //       forceDirection.scale(forceMagnitude, forceDirection);
    //       body.applyForce(forceDirection, body.position); // Provide the position of the body as the second argument
    //     });
    //   } else {
    //     // worldRef.current.gravity.set(0, -9.82, 0); // Normal gravity
    //   }
    // }, [useCustomForce]);

    return (
        <div>
            <button
                onClick={() => setUseCustomForce(!useCustomForce)}
                style={{
                    color: useCustomForce ? "red" : "white",
                }}
            >
                Toggle Gravity
            </button>
            <div ref={canvasRef} />
        </div>
    );
};

export default ThreeCanvas;
