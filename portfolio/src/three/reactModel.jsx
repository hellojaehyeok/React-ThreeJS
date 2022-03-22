import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';

const ReactModel = (props) => {
    
    const modelRef = useRef();

    useFrame(() => {
        modelRef.current.rotation.y += 0.01;
    })


    return(
        <mesh position={[0, 0, 0]} ref={modelRef} castShadow>
            <torusKnotBufferGeometry
                attach='geometry'
                args={[10, 1, 300, 20, 6, 10]}
            />
            <meshPhysicalMaterial
                transparent
                opacity={0.3}
                roughness={0}
                metalness={1}
                reflectivity={1}
                clearcoat={1}
                attach='material'
                color={"#61DBFB"}
            />
            <pointLight intensity={1} color={"#fff"}/>  
        </mesh>
    )
};

export default ReactModel;