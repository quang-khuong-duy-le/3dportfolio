import { useRef, useEffect } from 'react'

import planeScene from '../assets/3d/plane.glb';
import { useAnimations, useGLTF } from '@react-three/drei';

const Plane = ({ isRotating, ...props }) => {
    const ref = useRef();
    const {scene, animations} = useGLTF(planeScene);
    const { actions } = useAnimations(animations, ref);

    useEffect(() => {
      if (isRotating) {
        actions['Take 001'].play();
        ref.current.position.y += 0.2;
      } else {
        actions['Take 001'].stop();
        ref.current.position.y -= 0.2;
      }
    }, [ref, actions, isRotating]);

    return (
      <mesh {...props} ref={ref}>
          <primitive object={scene} />
      </mesh>
    )
}

export default Plane