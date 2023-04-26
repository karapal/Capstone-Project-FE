
import './App.css';
import Navbarmain from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from "./img/punk-skate-skateboard-vans.png";

function App() {
  return (
    <div>
      <Navbarmain/>
      <div  style={{ backgroundImage: `url(${background})`}}>
        
        
      </div>
    
    </div>
  );
}

export default App;
