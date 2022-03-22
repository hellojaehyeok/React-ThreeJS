import React from 'react';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import userObj from '../obj/user.obj';
import { useLoader } from '@react-three/fiber';
import { useSphere } from '@react-three/cannon';

const UserModel = (props) => {
    const [ref] = useSphere(() => ({
        mass: 10,
        position:[0, 10, 0],
        args:[5, 50, 50],
    }))

    return (
        <mesh castShadow ref={ref}>
            <sphereBufferGeometry attach='geometry' args={[5, 50, 50]}/>
            <meshStandardMaterial />
        </mesh>
    );
};

export default UserModel;