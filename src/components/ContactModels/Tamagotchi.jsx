import React from 'react'
import { useGLTF } from '@react-three/drei'
import ContactModel from '../../../public/models/tamagotchi.glb?url'

export function Tamagotchi(props) {
  const { nodes, materials } = useGLTF(ContactModel)
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Tamagotchi_TXT_Tama_Morado_0.geometry} material={materials.TXT_Tama_Morado} />
        <mesh geometry={nodes.Tamagotchi_MTL_Pantalla_0.geometry} material={materials.MTL_Pantalla} />
        <mesh geometry={nodes.Tamagotchi_MTL_Amarillo_0.geometry} material={materials.MTL_Amarillo} />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-4.634, -8.192, 17.325]}>
          <mesh geometry={nodes.Ranita_MTL_Negro_0.geometry} material={materials.MTL_Negro} />
          <mesh geometry={nodes.Ranita_MTL_Ranita_0.geometry} material={materials.MTL_Ranita} />
          <mesh geometry={nodes.Ranita_MTL_Nenufar_0.geometry} material={materials.MTL_Nenufar} />
        </group>
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0.077, -5.199, 9.468]}>
          <mesh geometry={nodes.Awa_MTL_Awa_0.geometry} material={materials.MTL_Awa} />
          <mesh geometry={nodes.Awa_MTL_AwaMorada_0.geometry} material={materials.MTL_AwaMorada} />
        </group>
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Estrellas_Amarillas_MTL_Amarillo_0.geometry} material={materials.MTL_Amarillo} position={[-14.777, -9.192, 31.387]} />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Estrellas_blancas_MTL_Estrellas_blancas_0.geometry} material={materials.MTL_Estrellas_blancas} position={[8.494, -11.83, -5.333]} />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Botones_rosa_MTL_Rosa_0.geometry} material={materials.MTL_Rosa} position={[0, -5.124, 4.851]} />
      </group>
      <mesh geometry={nodes.Nubes_MTL_Nube_0.geometry} material={materials.MTL_Nube} position={[14.218, 31.88, 6.961]} />
    </group>
  )
}
useGLTF.preload(ContactModel)

export default Tamagotchi