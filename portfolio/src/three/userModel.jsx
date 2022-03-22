import React, { useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSphere } from '@react-three/cannon';
import { Vector3 } from 'three';

const keys = {
    KeyW: 'forward',
    KeyS: 'backward',
    KeyA: 'left',
    KeyD: 'right',
    Space: 'jump',
}

const useUserControls = () => {
  
    const [movement, setMovement] = useState({
      forward: false,
      backward: false,
      left: false,
      right: false,
      jump: false,
    })
  
    useEffect(() => {
        const handleKeyDown = (e) => {
            setMovement((m) => ({ ...m, [keys[e.code]]: true }))
        }
        const handleKeyUp = (e) => {
            setMovement((m) => ({ ...m, [keys[e.code]]: false }))
        }
        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('keyup', handleKeyUp)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('keyup', handleKeyUp)
        }
    }, [])

    return movement;
}

const UserModel = (props) => {
    const [ref, api] = useSphere(() => ({
        mass: 10,
        position:[-10, -17, 15],
        args:[3, 50, 50],
        type: 'Dynamic',
    }));

    const { forward, backward, left, right, jump } = useUserControls()
        
    useFrame(() => {
        let frontVector = new Vector3(0, 0, 0);
        let sideVector = new Vector3(0, 0, 0);
        let direction = new Vector3(0, 0, 0);

        frontVector.set(0, 0, Number(backward) - Number(forward))
        sideVector.set(Number(left) - Number(right), 0, 0)
        direction
        .subVectors(frontVector, sideVector)
        .normalize()
        .multiplyScalar(20)
        
        api.velocity.set(direction.x, 0, direction.z)
        ref.current.getWorldPosition(ref.current.position)
    })

    return (
        <mesh castShadow receiveShadow ref={ref}>
            <sphereBufferGeometry attach='geometry' args={[3, 50, 50]}/>
            <meshStandardMaterial color={"#ff7a7a"}/>
            <pointLight intensity={20} color={"#ff3d3d"}/>  
        </mesh>
    );
};

export default UserModel;