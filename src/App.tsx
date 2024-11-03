import { Suspense } from 'react'
import { Canvas  } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { 
    CharcoalDonut, 
    ChocolateDonut,
    OrangeDonut, 
    RedDonut, 
    MatchaDonut,
    YellowDonut, 
    PurpleDonut,
} from '../public/Donuts.jsx'
import './App.css'

function App() {
    return (
        <div>
            <Canvas>
                <Suspense fallback={ null }>
                    <ambientLight intensity={ 2.5 }/>
                    <directionalLight position={ [0, 0, 5] } />
                    <RedDonut position={ [-1, 0, 0] }/>
                    <ChocolateDonut position={ [0, 0, 0] }/>
                    <CharcoalDonut position={ [1, 0, 0] }/>
                    <OrangeDonut position={ [0, 0, 1] }/>
                    <MatchaDonut position={ [1, 0, 1] }/>
                    <YellowDonut position={ [-1, 0, 1] }/>
                    <PurpleDonut position={ [0, 0, 2] }/>
                </Suspense>
                <OrbitControls/>
            </Canvas>
        </div>
    )
}

export default App
