import { useRef, useEffect } from 'react'

import dragonScene from '../assets/3d/dragon.glb';
import { useAnimations, useGLTF } from '@react-three/drei';

const Dragon = ({ isRotating, ...props }) => {
    const ref = useRef();
    const {scene, animations} = useGLTF(dragonScene);
    const { actions } = useAnimations(animations, ref);

    useEffect(() => {
      if (isRotating) {
        ref.current.position.y += 0.2;
      } else {
        ref.current.position.y -= 0.2;
      }
      
      actions['GltfAnimation 0'].play();
    }, [ref, actions, isRotating]);

    return (
      <mesh {...props} ref={ref}>
          <primitive object={scene} />
      </mesh>
    )
}

export default Dragon