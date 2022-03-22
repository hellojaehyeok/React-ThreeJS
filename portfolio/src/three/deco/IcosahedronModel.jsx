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
            <meshStandardMaterial />
        </mesh>
    )
}

export default IcosahedronModel;