import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const useLenis = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const lenis = new Lenis({
        lerp: 0.1,
        // you can add more options here based on your requirements
      });

      const onRAF = () => {
        lenis.raf(1);
        requestAnimationFrame(onRAF);
      };

      onRAF();

      return () => {
        lenis.destroy();
      };
    }
  }, []);
};

export default useLenis;
