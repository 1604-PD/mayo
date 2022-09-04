import { MeshDistortMaterial, Sphere } from '@react-three/drei'
import React from 'react'

export default function Animated() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2.1}>
        <MeshDistortMaterial 
            color={"#ffb200"}
            attach={"material"}
            distort={0.7}
            speed={2}
            roughness={0}
            />

    </Sphere>
  )
}
