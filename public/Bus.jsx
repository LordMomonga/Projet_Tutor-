/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Bus.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Bus(props) {
  const { nodes, materials } = useGLTF('/Bus.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Bus.geometry} material={materials.Mat} />
    </group>
  )
}

useGLTF.preload('/Bus.glb')
