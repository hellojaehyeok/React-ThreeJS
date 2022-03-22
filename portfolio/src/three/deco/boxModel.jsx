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
            <meshStandardMaterial />
        </mesh>
    )
}

export default BoxModel;