import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'

export default function AnimatedCat() {
  const catRef = useRef<THREE.Group>(null)
  
  // Animation loop
  useFrame(({ clock }) => {
    if (catRef.current) {
      // Gentle floating animation
      catRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.2
      
      // Slight rotation
      catRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.2
    }
  })

  return (
    <group ref={catRef}>
      {/* Simple cat model - replace with your actual 3D model */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#ff99cc" />
        {/* Ears */}
        <mesh position={[0.5, 0.8, 0.3]}>
          <coneGeometry args={[0.3, 0.5, 4]} />
          <meshStandardMaterial color="#ff99cc" />
        </mesh>
        <mesh position={[-0.5, 0.8, 0.3]}>
          <coneGeometry args={[0.3, 0.5, 4]} />
          <meshStandardMaterial color="#ff99cc" />
        </mesh>
      </mesh>
      
      {/* "Fluffy HUGS" text */}
      <Text
        position={[0, -1.5, 0]}
        fontSize={0.5}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        Fluffy HUGS
      </Text>
    </group>
  )
}