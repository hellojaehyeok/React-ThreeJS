
import React, { Suspense, useEffect, useMemo } from 'react'
import styled from 'styled-components';
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, softShadows, Stats, useProgress } from '@react-three/drei';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import PlaneModel from '../three/planeModel';
import ReactModel from '../three/reactModel';
import LightController from '../three/lightController';
import userObj from '../obj/user.obj';

softShadows();

const Scene = () => {

    const obj = useLoader(OBJLoader, userObj);
    useEffect(()=>{
       console.log(obj);
    }, [obj])

    return <primitive object={obj} />;
};

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

                <PlaneModel />
                <ReactModel />
                
                <Scene />
            </Canvas>
        </Container>
    )
};

export default Main;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
`