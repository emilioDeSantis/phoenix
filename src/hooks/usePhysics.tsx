import { useEffect } from 'react';
import * as CANNON from 'cannon';
import { Vec3 } from 'cannon';

export interface PhysicsObject {
  update: (body: CANNON.Body) => void;
}

export const usePhysics = (objects: PhysicsObject[], gravity: Vec3 = new CANNON.Vec3(0, -9.82, 0)) => {
  useEffect(() => {
    const world = new CANNON.World();
    world.gravity.set(gravity.x, gravity.y, gravity.z);

    // Initialize physics world and objects
    objects.forEach(obj => {
      world.addBody(obj.body);
    });

    // Update physics world
    const animate = () => {
      requestAnimationFrame(animate);
      world.step(1 / 60);

      objects.forEach(obj => {
        obj.update(obj.body);
      });
    };

    animate();
  }, [objects, gravity]);
};
