import React, { useRef, useMemo, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import THREE, {
    BufferGeometry,
    Float32BufferAttribute,
    Mesh,
    Raycaster,
    SkinnedMesh,
    Vector3,
} from "three";

// Configuration constants
const POINTS_SIZE = 0.05;
const POINTS_COLOR = "#FF0000";
const SIZE_ATTENUATION = true;
const TRANSPARENCY = true;
const OPACITY = 0.8;
const MOVEMENT_SCALE = 0.2;
const RESET_CHANCE = 0.5;
const RAY_ORIGIN = new Vector3(0, 10, 10);

const ParticleSystem = ({ particleCount, groupRef }) => {
    const particlesRef = useRef();
    const raycasterRef = useRef(new Raycaster());
    const [positions, setPositions] = useState([]);

    const lastDirectionRef = useRef(new Vector3(1, 0, 0));
    // const hasIntersected = useRef(false);

    const getVerticesFromGroup = (group) => {
        const vertices = [];
        group.traverse((child) => {
            if (child instanceof Mesh && child.geometry) {
                const positions = child.geometry.attributes.position.array;
                for (let i = 0; i < positions.length; i += 3) {
                    vertices.push(
                        new Vector3(
                            positions[i],
                            positions[i + 1],
                            positions[i + 2]
                        )
                    );
                }
            }
        });
        return vertices;
    };

    const getRandomSurfacePoint = (raycaster, group) => {
        let i = 0;
        while (true) {
            // console.time("test");
            raycaster.ray.origin.copy(RAY_ORIGIN);
            // console.timeEnd("test");

            // console.time("test2");
            // Use last direction and apply a small random rotation

            const NEAR_ATTEMPTS = 10;
            const randomShift = new Vector3(
                (Math.random() - 0.5) *
                    (Math.pow(i / NEAR_ATTEMPTS, 2) + MOVEMENT_SCALE),
                (Math.random() - 0.5) *
                    (Math.pow(i / NEAR_ATTEMPTS, 2) + MOVEMENT_SCALE),
                (Math.random() - 0.5) *
                    (Math.pow(i / NEAR_ATTEMPTS, 2) + MOVEMENT_SCALE)
            );
            // console.timeEnd("test2");

            // console.time("test3");
            const newDirection = lastDirectionRef.current
                .clone()
                .add(randomShift)
                .normalize();

            // console.timeEnd("test3");

            // console.time("test4");
            raycaster.ray.direction.copy(newDirection);
            // console.timeEnd("test4");

            console.time("test5");
            const intersects = raycaster.intersectObject(group, true);



            console.timeEnd("test5");
            console.log("try");
            if (Math.pow(i / 10, 2) < 2) {
                i++;
            }

            if (intersects.length > 0) {
                console.log("success");
                // Update last direction
                // hasIntersected.current = true;
                lastDirectionRef.current.copy(newDirection);
                return intersects[0].point; // Return the intersection point
            }
        }
    };

    useEffect(() => {
        console.log("trig");

        if (groupRef.current) {
            const tempPositions = [];

            for (let i = 0; i < particleCount; i++) {
                const point = getRandomSurfacePoint(
                    raycasterRef.current,
                    groupRef.current
                );
                tempPositions.push(point.x, point.y, point.z);
            }

            setPositions(tempPositions);
        }
    }, [groupRef, particleCount]);

    const particles = useMemo(() => {
        const tempParticles = new BufferGeometry();
        tempParticles.setAttribute(
            "position",
            new Float32BufferAttribute(positions, 3)
        );
        return tempParticles;
    }, [positions]);

    useFrame(() => {
        if (particlesRef.current && groupRef.current) {
            const positions =
                particlesRef.current.geometry.attributes.position.array;

            for (let i = 0; i < positions.length; i += 3) {
                // console.time("test6");
                // Original movement logic
                // positions[i] += (Math.random() - 0.5) * MOVEMENT_SCALE;
                // positions[i + 1] += (Math.random() - 0.5) * MOVEMENT_SCALE;
                // positions[i + 2] += (Math.random() - 0.5) * MOVEMENT_SCALE;

                // positions[i + 1] -= 0.1;

                // console.timeEnd("test6");

                //   Check for reset based on RESET_CHANCE
                if (Math.random() < RESET_CHANCE) {
                    const point = getRandomSurfacePoint(
                        raycasterRef.current,
                        groupRef.current
                    );
                    positions[i] = point.x;
                    positions[i + 1] = point.y;
                    positions[i + 2] = point.z;
                }
            }

            particlesRef.current.geometry.attributes.position.needsUpdate =
                true;
        }
    });

    return (
        <points ref={particlesRef} geometry={particles}>
            <pointsMaterial
                size={POINTS_SIZE}
                color={POINTS_COLOR}
                sizeAttenuation={SIZE_ATTENUATION}
                transparent={TRANSPARENCY}
                opacity={OPACITY}
            />
        </points>
    );
};

export default ParticleSystem;
