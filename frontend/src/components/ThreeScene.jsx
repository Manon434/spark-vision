
// import { Canvas } from "@react-three/fiber"
// import { OrbitControls } from "@react-three/drei"

// function Polyhedron() {

//   return (

//     <mesh>

//       <icosahedronGeometry args={[2, 0]} />

//       <meshStandardMaterial
//         color="#2dd4bf"
//         metalness={0.6}
//         roughness={0.2}
//       />

//     </mesh>

//   )

// }

// function Rings() {

//   return (

//     <group>

//       <mesh rotation={[Math.PI / 2, 0, 0]}>
//         <torusGeometry args={[3, 0.02, 16, 100]} />
//         <meshBasicMaterial color="#5eead4" />
//       </mesh>

//       <mesh rotation={[Math.PI / 2, 0.5, 0]}>
//         <torusGeometry args={[3.3, 0.02, 16, 100]} />
//         <meshBasicMaterial color="#2dd4bf" />
//       </mesh>

//     </group>

//   )

// }

// function ThreeScene() {

//   return (

//     <div className="w-[450px] h-[450px]">

//       <Canvas camera={{ position: [0, 0, 7] }}>

//         <ambientLight intensity={0.6} />
//         <directionalLight position={[5, 5, 5]} />

//         <Polyhedron />
//         <Rings />

//         <OrbitControls
//           enableZoom={false}
//           autoRotate
//           autoRotateSpeed={0.6}
//         />

//       </Canvas>

//     </div>

//   )

// }

// export default ThreeScene

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

function Polyhedron(){

  const meshRef = useRef()

  useFrame(()=>{
    meshRef.current.rotation.y += 0.002
    meshRef.current.rotation.x += 0.001
  })

  return(

    <mesh ref={meshRef}>

      <icosahedronGeometry args={[3,0]} />

      <meshStandardMaterial
        color="#5eead4"
        metalness={0.8}
        roughness={0.15}
        emissive="#14b8a6"
        emissiveIntensity={0.5}
      />

    </mesh>

  )

}


function Rings(){

  return(

    <group>

      <mesh rotation={[Math.PI/2,0,0]}>
        <torusGeometry args={[4.5,0.02,16,100]}/>
        <meshBasicMaterial color="#5eead4"/>
      </mesh>

      <mesh rotation={[Math.PI/2,0.6,0]}>
        <torusGeometry args={[4.8,0.02,16,100]}/>
        <meshBasicMaterial color="#2dd4bf"/>
      </mesh>

      <mesh rotation={[Math.PI/2,1.2,0]}>
        <torusGeometry args={[5.1,0.02,16,100]}/>
        <meshBasicMaterial color="#99f6e4"/>
      </mesh>

    </group>

  )

}


function Particles(){

  const points = []
  const particleCount = 1200

  for(let i=0;i<particleCount;i++){

    points.push(
      (Math.random()-0.5)*20,
      (Math.random()-0.5)*20,
      (Math.random()-0.5)*20
    )

  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(points,3)
  )

  return(

    <points geometry={geometry}>

      <pointsMaterial
        size={0.03}
        color="#5eead4"
        transparent
        opacity={0.6}
      />

    </points>

  )

}


function ThreeScene(){

  return(

    <div className="w-[520px] h-[520px]">

      <Canvas camera={{position:[0,0,9]}}>

        <ambientLight intensity={0.7}/>
        <pointLight position={[10,10,10]} intensity={2}/>

        <Particles/>
        <Rings/>
        <Polyhedron/>

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.3}
        />

      </Canvas>

    </div>

  )

}

export default ThreeScene