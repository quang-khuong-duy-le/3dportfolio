import { Canvas } from '@react-three/fiber'
import { Suspense, useState, useEffect, useRef } from 'react'
import Loader from '../components/Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Dragon from '../models/Dragon'
import HomeInfo from '../components/HomeInfo'
import sakuraSong from '../assets/sakura.mp3'
import { soundoff, soundon } from '../assets/icons'

const Home = () => {
  const audioRef = useRef(new Audio(sakuraSong));
  audioRef.current.volumn = 0.4;
  audioRef.current.loop = true;

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }
  
    return () => {
      audioRef.current.pause();
    }
  }, [isPlayingMusic]);
  

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 0, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.4, 0.4, 0.4];
    } else {
      screenScale = [0.6, 0.6, 0.6];
    }

    return [screenScale, screenPosition, rotation];
  }

  const adjustDragonForScreenSize = () => {
    let screenScale = null;
    let screenPosition = null;

    if (window.innerWidth < 768) {
      screenScale = [0.006, 0.006, 0.006];
      screenPosition = [0, -1, 0];
    } else {
      screenScale = [0.01, 0.01, 0.01];
      screenPosition = [0, -1, -4];
    }

    return [screenScale, screenPosition];
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [dragonScale, dragonPosition] = adjustDragonForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ? `cursor-grabbing` : `cursor-grab`}`}
        camera={{ near: 0.1, far: 1000}}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1,1,1]} intensity={1} />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={1} />

          <Sky isRotating={isRotating} />
          <Bird />

          <Island 
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />

          <Dragon
            isRotating={isRotating}
            scale={dragonScale}
            position={dragonPosition}
            rotation={[0,0,0]}
          />
        </Suspense>
      </Canvas>

      <div className='absolute bottom-2 left-2'>
        <img 
          src={isPlayingMusic ? soundon : soundoff}
          alt='sound'
          className='w-10 h-10 cursor-pointer object-contain'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  )
}

export default Home