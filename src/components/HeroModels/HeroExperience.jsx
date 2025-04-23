import { PresentationControls, Float } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive'
import { Room } from './Room.jsx'
import { Leva, useControls } from 'leva'

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" })
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" })

  // POSITION AND ROTATION HELPERS
  // const { posX, posY, posZ, rotX, rotY, rotZ, scale } = useControls('Room Transform', {
  //   posX: { value: 0, min: -10, max: 10, step: 0.1 },
  //   posY: { value: -3.5, min: -10, max: 10, step: 0.1 },
  //   posZ: { value: 0, min: -10, max: 10, step: 0.1 },
  //   rotX: { value: -0.1, min: -Math.PI, max: Math.PI, step: 0.01 },
  //   rotY: { value: -Math.PI / 4, min: -Math.PI, max: Math.PI, step: 0.01 },
  //   rotZ: { value: -0.1, min: -Math.PI, max: Math.PI, step: 0.01 },
  //   scale: { value: isMobile ? 0.7 : 0.8, min: 0.1, max: 2, step: 0.01 },
  // })

  return (
    <>
      {/* This renders Leva’s GUI */}
      {/* <Leva collapsed={false} /> */}

      <Canvas camera={{ position: [0, -1.4, 6.9], fov: 45 }}>
        <ambientLight intensity={0.2} color="#1a1a40" />
        <directionalLight position={[5, 5, 5]} intensity={3} />
        <group
          position={[0, 0, -0.6]}
          rotation={[0.6, -0.8, 0]}
          scale={isMobile? 0.6 : 0.80}
          position-y={isMobile ? -1 : -0.4}
          // position={[posX, posY, posZ]}
          // rotation={[rotX, rotY, rotZ]}
          // scale={scale}
          >
          <PresentationControls
            azimuth={[-1, 0.75]}
            polar={[-0.4, 0.2]}
            damping={0.6}
            config={ { mass: 2, tension: 400 } }
            snap
            >
            <Float rotationIntensity={1}>
              <Room/>
            </Float>
          </PresentationControls>
        </group>

        
      </Canvas>
    </>
  )
}

export default HeroExperience
