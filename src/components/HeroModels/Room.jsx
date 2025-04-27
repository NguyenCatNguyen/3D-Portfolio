
import React from 'react'
import { useGLTF } from '@react-three/drei'
import littleRoom from '../../../public/models/little_room.glb?url'

export function Room(props) {
  const { nodes, materials } = useGLTF(littleRoom)
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.232}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Object_4.geometry} material={materials['Main-texture']} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object_6.geometry} material={materials.black} rotation={[Math.PI / 2, 0, 0]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(littleRoom)
