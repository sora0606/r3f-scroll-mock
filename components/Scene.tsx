import { Canvas } from '@react-three/fiber'
import { r3f, r3fBack } from '@helpers/global'
import { LinearToneMapping } from 'three'
import { GlobalCanvas } from '@14islands/r3f-scroll-rig'

const SceneFront = ({ ...props }) => {
    return (
        <GlobalCanvas gl={{ antialias: true, alpha: true, toneMapping: LinearToneMapping }} {...props}>
            <r3f.Out />
        </GlobalCanvas>
    )
}

const SceneBack = ({ ...props }) => {
    return (
        <GlobalCanvas gl={{ antialias: true, alpha: true, toneMapping: LinearToneMapping }} {...props}>
            <r3fBack.Out />
        </GlobalCanvas>
    )
}

export { SceneFront }
export { SceneBack }
