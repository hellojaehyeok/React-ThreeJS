
import React from 'react'
import { Canvas } from '@react-three/fiber'
import styled from 'styled-components';
import { OrbitControls, softShadows } from '@react-three/drei';
import PlaneModel from '../three/planeModel';
import ReactModel from '../three/reactModel';
import LightController from '../three/lightController';

softShadows();

const Main = ({}) => {

    return(
        <Container>
            <Canvas
                shadows
                colorManagement
                camera={{position:[0, 0, 40], fov:80 }}
            >
                <LightController />
                <OrbitControls />
                    <PlaneModel />
                    <ReactModel />
            </Canvas>
        </Container>
    )
};

export default Main;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
`