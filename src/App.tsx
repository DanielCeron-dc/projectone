
import './App.css';
import { Canvas } from "@react-three/fiber";
import Box from './Components/Box';
import Orbit from './Components/BackGround/Orbit';


function App() {

  return <div style={{ height: '100vh', width: '100vw' }}>
    <Canvas style={{ background: 'black' }}>
      <Box position={[4, 5, 6]} />
      <axesHelper args={[10]} />
      <Orbit />
    </Canvas>
  </div>

}


export default App;
