import React, { useEffect } from 'react';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import userObj from '../obj/user.obj';
import userMtl from '../obj/user.mtl';
import { useLoader } from '@react-three/fiber';

const UserModel = (props) => {
    
    const obj = useLoader(OBJLoader, userObj);

    return (
        <mesh castShadow receiveShadow position={[0, -20, 15]}>
            <primitive object={obj} scale={4.0} castShadow receiveShadow/>
        </mesh>
    );
};

export default UserModel;