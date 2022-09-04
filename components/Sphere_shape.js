import React from 'react'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'

export default function Sphere_shape() {
  return <mesh rotation={[90, 0, 20]}>
    <boxBufferGeometry attach={'geometry'} args={[2, 2, 2]}  />
    <meshLambertMaterial attach={"material"} colour={"#ffcb42"} />
  </mesh>
  
}
