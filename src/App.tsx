import { Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import CharcoalDonut from '../public/CharcoalDonut.jsx'

import './App.css'

function App() {

    return (
        <>
            <Canvas>
                <OrbitControls/>
                    <Suspense fallback={ null }>
                        <CharcoalDonut/>
                    </Suspense>
                <Environment preset='sunset'/>
            </Canvas>
        </>
    )
}

export default App
