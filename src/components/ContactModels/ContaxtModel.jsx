import  Tamagotchi from './Tamagotchi.jsx'
import { PresentationControls, Float } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'


const ContaxtModel = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.2} color="#1a1a40" />
      <directionalLight position={[5,5,5]} intensity={3} />
      <PresentationControls
        enabled={false}>
        <group
          position={[1,-2, -3]} // Centered horizontally
          rotation={[0, 0, 0]} // No rotation for straight-on view
          scale={0.1}
          >
          <Float rotationIntensity={0.7}>
            <Tamagotchi/>
          </Float>
        </group>
      </PresentationControls>
    </Canvas>
  )
}

export default ContaxtModel