/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 Cruise.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Cruise(props) {
  const { nodes, materials } = useGLTF('/Cruise.glb')
  return (
    <group {...props} dispose={null} scale={0.099}>
      <mesh geometry={nodes.CruiseLiner_mesh.geometry} material={materials.CruiseLiner_mat1} />
    </group>
  )
}

useGLTF.preload('/Cruise.glb')