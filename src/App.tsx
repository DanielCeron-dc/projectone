
import './App.css';
import Plane from './Components/Plane';
import BackGround from './Components/BackGround/BackGround';
import BackGroundTexture from './Components/BackGround/BackGroundTexture';


function App() {

  return <BackGround cameraPosition={[0, 2, 10]}>
    <BackGroundTexture />
    <Plane width={15} depth={10} color={"#ebebeb"} />
  </BackGround>

}


export default App;
