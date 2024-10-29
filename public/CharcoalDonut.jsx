/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 CharcoalDonut.gltf 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/CharcoalDonut.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Charcoal_Donut.geometry} material={materials.Dough} position={[0.655, 0.344, -0.757]} rotation={[3.12, -0.075, 3.114]} scale={5}>
        <group position={[0, 0.013, 0]}>
          <mesh geometry={nodes.Chocolate_Frosting006.geometry} material={materials['Charchoal Frosting']} />
          <mesh geometry={nodes.Chocolate_Frosting006_1.geometry} material={materials['Charcoal Icing']} />
        </group>
      </mesh>
      <mesh geometry={nodes.Charcoal_Icing.geometry} material={materials['Charcoal Icing']} position={[0.518, 0.427, -0.745]} />
      <mesh geometry={nodes.Golden_Long_Sprinkle.geometry} material={materials['Golden Sprinkle']} position={[0.587, 0.485, -0.922]} rotation={[-0.025, -0.803, -0.308]} scale={[1, 1, 1.252]} />
      <mesh geometry={nodes.Golden_Square_Disk.geometry} material={materials['Golden Sprinkle']} position={[0.538, 0.493, -0.572]} rotation={[0.045, -0.601, -0.03]} />
      <mesh geometry={nodes.Golden_Sphere_Sprinkle.geometry} material={materials['Golden Sprinkle']} position={[0.876, 0.503, -0.762]} />
    </group>
  )
}

useGLTF.preload('/CharcoalDonut.gltf')