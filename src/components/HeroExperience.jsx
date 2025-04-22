import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive'

const HeroExperience = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" }); // Check if the device is mobile
    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" }); // Check if the device is tablet

  return (
    <Canvas  camera={{ position: [0, 0, 15], fov: 45 }}>
        <ambientLight intensity={0.2} color="#1a1a40" />
        <directionalLight position={[5,5,5]} intensity={1} />
        <OrbitControls 
            enablePan = {false} // Disable panning handling
            enableZoom = {!isTablet} // Allow zoom to happen on an PC and not a tablet
            maxDistance={20} // Maximum distance for zooming out
            minDistance={5}  // Minimum distance for zooming in
            minPolarAngle={Math.PI / 5} // Minium angle for vertical rotation 
            maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
        />
        <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#00ff00" />
        </mesh>
    </Canvas>
  )
}

export default HeroExperience