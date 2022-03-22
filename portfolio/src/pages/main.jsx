
import React from 'react'
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, softShadows, Stats, useProgress } from '@react-three/drei';
import PlaneModel from '../three/planeModel';
import ReactModel from '../three/reactModel';
import LightController from '../three/lightController';
import UserModel from '../three/userModel';
import { Physics } from '@react-three/cannon';

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
                camera={{position:[0, 0, 40], fov:80 }}
            >
                <LightController />
                <OrbitControls />
                <Stats />

                <Physics>
                    <PlaneModel />
                    <ReactModel />

                    <UserModel />
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