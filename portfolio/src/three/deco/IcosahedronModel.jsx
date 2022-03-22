import { useBox } from "@react-three/cannon"

const IcosahedronModel = ({position}) => {

    const [ref] = useBox(() => ({
        mass: 10,
        position:position,
        args:[12, 12, 12],
    }))

    return(
        <mesh castShadow ref={ref}>
            <icosahedronBufferGeometry ref={ref} args={[7, 0]} />
            <meshPhysicalMaterial
                wireframe
                transparent
                opacity={0.3}
                roughness={0}
                metalness={1}
                reflectivity={1}
                clearcoat={1}
                attach='material'
                emissive={"#fff"}
            />
            {/* <meshStandardMaterial color={"#8f8f8f"} /> */}
        </mesh>
    )
}

export default IcosahedronModel;