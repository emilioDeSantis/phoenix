import { useThree, extend, ReactThreeFiber } from '@react-three/fiber';
import { PerspectiveCamera } from 'three';
import { useEffect, useRef } from 'react';

extend({ PerspectiveCamera });

const Camera = (props: ReactThreeFiber.Object3DNode<PerspectiveCamera, typeof PerspectiveCamera>) => {
  const ref = useRef<PerspectiveCamera>();
  const { setDefaultCamera } = useThree();

  useEffect(() => {
    if (ref.current) {
      setDefaultCamera(ref.current);
    }
  }, [setDefaultCamera]);

  return <perspectiveCamera ref={ref} {...props} />;
};

export default Camera;
