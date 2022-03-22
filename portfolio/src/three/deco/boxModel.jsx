import { useBox } from "@react-three/cannon"

const BoxModel = ({position, scale}) => {
    const boxScale = [1 * scale, 1 * scale, 1 * scale];

    const [ref] = useBox(() => ({
        mass: 10,
        position:position,
        args:boxScale,
    }))

    return(
        <mesh castShadow ref={ref}>
            <boxBufferGeometry args={boxScale} />
            <meshPhysicalMaterial
                transparent
                opacity={1}
                roughness={0}
                metalness={1}
                reflectivity={1}
                clearcoat={1}
                wireframe
                attach='material'
                color={"#b8f0ff"}
                emissive={"#fff"}
            />
            {/* <meshStandardMaterial color={"#8f8f8f"}/> */}
        </mesh>
    )
}

export default BoxModel;