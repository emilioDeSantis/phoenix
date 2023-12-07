import { SpotLight } from '@react-three/drei';
import { useRef } from 'react';

interface SpotlightProps {
  position: [number, number, number];
  angle: number;
  penumbra: number;
  intensity: number;
}

export const MySpotlight = ({ position, angle, penumbra, intensity }: SpotlightProps) => {
  const spotLightRef = useRef(null);

  return (
    <SpotLight
      ref={spotLightRef}
      position={position}
      angle={angle}
      penumbra={penumbra}
      intensity={intensity}
      castShadow
    />
  );
};
