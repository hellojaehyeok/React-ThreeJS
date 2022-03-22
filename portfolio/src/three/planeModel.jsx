import { usePlane } from '@react-three/cannon';
import React from 'react';


const Plane = (props) => {
    const [ref] = usePlane(() => ({
        mass: 10,
        position:[0, -20, 0],
        rotation:[-Math.PI / 2, 0, 0],
        type: "Static", // 중력을 무시한다.
    }))

    return(
        <mesh
            ref={ref}
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -20, 0]}
            receiveShadow>
            <planeBufferGeometry attach='geometry' args={[1000, 1000]} />
            <shadowMaterial attach='material' opacity={0.3} color="#2c2b3d"/>
            {/* <meshStandardMaterial attach='material' opacity={0.3} color="#8f8f8f" /> */}
        </mesh>
    )
};

export default Plane;