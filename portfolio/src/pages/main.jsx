
import React from 'react'
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, softShadows, Stats, useProgress } from '@react-three/drei';
import PlaneModel from '../three/planeModel';
import ReactModel from '../three/reactModel';
import LightController from '../three/lightController';
import UserModel from '../three/userModel';
import { Physics } from '@react-three/cannon';
import BoxModel from '../three/deco/boxModel';
import IcosahedronModel from '../three/deco/IcosahedronModel';

softShadows();

const Main = ({}) => {
    // const { progress } = useProgress();
    // useEffect(() => {
    //     console.log(progress);
    // }, [progress])

    return(
        <Container>
            <Canvas
                shadows
                colorManagement
                camera={{position:[0, 10, 50], fov:80 }}
            >   
                <color attach='background' args={["#fff"]}/>
                <LightController />
                <OrbitControls />
                <Stats />
                
                <Physics>
                    <PlaneModel />
                    <ReactModel />
                    
                    <UserModel />

                    <IcosahedronModel position={[-20, 0, 0]} />
                    <BoxModel position={[10, 0, 15]} scale={5}/>
                    <BoxModel position={[10, 10, 15]} scale={3}/>
                    <BoxModel position={[30, 3, -25]} scale={25}/>
                </Physics>
            </Canvas>
        </Container>
    )
};

export default Main;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
`