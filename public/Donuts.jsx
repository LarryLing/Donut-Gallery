import React from 'react'
import { useGLTF } from '@react-three/drei'

export function CharcoalDonut(props) {
    const { nodes, materials } = useGLTF('/CharcoalDonut.glb')
    return (
        <group {...props} dispose={null}>
            <group position={[0, 0, 0]} rotation={[0, 0, 0]} scale={5}>
                <mesh geometry={nodes.Charcoal_Donut002.geometry} material={materials.Dough} />
                <mesh geometry={nodes.Charcoal_Donut002_1.geometry} material={materials['Charchoal Frosting']} />
                <mesh geometry={nodes.Charcoal_Donut002_2.geometry} material={materials['Charcoal Icing']} />
                <mesh geometry={nodes.Charcoal_Donut002_3.geometry} material={materials['Golden Sprinkle']} />
            </group>
        </group>
    )
}

export function ChocolateDonut(props) {
    const { nodes, materials } = useGLTF('/ChocolateDonut.glb')
    return (
        <group {...props} dispose={null}>
            <group position={[0, 0, 0]} rotation={[0, 0, 0]} scale={5}>
                <mesh geometry={nodes.Chocolate_Donut001_1.geometry} material={materials.Dough} />
                <mesh geometry={nodes.Chocolate_Donut001_2.geometry} material={materials['Chocolate Frosting']} />
                <mesh geometry={nodes.Chocolate_Donut001_3.geometry} material={materials['Chocolate Chunk']} />
                <mesh geometry={nodes.Chocolate_Donut001_4.geometry} material={materials['Lemon Icing']} />
            </group>
        </group>
    )
}

export function OrangeDonut(props) {
    const { nodes, materials } = useGLTF('/OrangeDonut.glb')
    return (
        <group {...props} dispose={null}>
            <group position={[0, 0, 0]} rotation={[0, 0, 0]} scale={5}>
                <mesh geometry={nodes.Orange_Donut004.geometry} material={materials.Dough} />
                <mesh geometry={nodes.Orange_Donut004_1.geometry} material={materials['Orange Frosting']} />
                <mesh geometry={nodes.Orange_Donut004_2.geometry} material={materials['Sprinkles (Orange)']} />
                <mesh geometry={nodes.Orange_Donut004_3.geometry} material={materials['Chocolate Icing']} />
            </group>
        </group>
    )
}

export  function RedDonut(props) {
    const { nodes, materials } = useGLTF('/RedDonut.glb')
    return (
        <group {...props} dispose={null}>
            <mesh geometry={nodes.Red_Donut.geometry} material={materials.Dough} position={[0, 0, 0]} rotation={[0, 0, 0]} scale={5}>
                <mesh geometry={nodes.Chocolate_Frosting005.geometry} material={materials['Red Frosting']} />
                <mesh geometry={nodes.Chocolate_Frosting005_1.geometry} material={materials['Sphere Sprinkle (Heart)']} />
                <mesh geometry={nodes.Chocolate_Frosting005_2.geometry} material={materials['Red Disk']} />
            </mesh>
        </group>
    )
}

export function MatchaDonut(props) {
    const { nodes, materials } = useGLTF('/MatchaDonut.glb')
    return (
        <group {...props} dispose={null}>
            <group position={[0, 0, 0]} rotation={[0, 0, 0]} scale={5}>
                <mesh geometry={nodes.Matcha_Donut001_1.geometry} material={materials.Dough} />
                <mesh geometry={nodes.Matcha_Donut001_2.geometry} material={materials['Matcha Frosting']} />
                <mesh geometry={nodes.Matcha_Donut001_3.geometry} material={materials['Matcha Icing']} />
                <mesh geometry={nodes.Matcha_Donut001_4.geometry} material={materials['Matcha KitKat']} />
            </group>
        </group>
    )
}

export function YellowDonut(props) {
    const { nodes, materials } = useGLTF('/YellowDonut.glb')
    return (
        <group {...props} dispose={null}>
            <group position={[0, 0, 0]} rotation={[0, 0, 0]} scale={5}>
                <mesh geometry={nodes.Yellow_Donut001_1.geometry} material={materials.Dough} />
                <mesh geometry={nodes.Yellow_Donut001_2.geometry} material={materials['Yellow Frosting']} />
                <mesh geometry={nodes.Yellow_Donut001_3.geometry} material={materials['Orange Icing']} />
                <mesh geometry={nodes.Yellow_Donut001_4.geometry} material={materials['Tulip Petals']} />
                <mesh geometry={nodes.Yellow_Donut001_5.geometry} material={materials['Tulip Center']} />
            </group>
        </group>
    )
}

export function PurpleDonut(props) {
    const { nodes, materials } = useGLTF('/PurpleDonut.glb')
    return (
        <group {...props} dispose={null}>
            <group position={[0, 0, 0]} rotation={[0, 0, 0]} scale={5}>
                <mesh geometry={nodes.Purple_Donut001_1.geometry} material={materials.Dough} />
                <mesh geometry={nodes.Purple_Donut001_2.geometry} material={materials['Purple Frosting']} />
                <mesh geometry={nodes.Purple_Donut001_3.geometry} material={materials['Purple Icing']} />
            </group>
        </group>
    )
}
  
useGLTF.preload('/CharcoalDonut.glb')
useGLTF.preload('/ChocolateDonut.glb')
useGLTF.preload('/OrangeDonut.glb')
useGLTF.preload('/RedDonut.glb')
useGLTF.preload('/MatchaDonut.glb')
useGLTF.preload('/YellowDonut.glb')
useGLTF.preload('/PurpleDonut.glb')