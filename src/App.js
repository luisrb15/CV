import './App.css';
import { Container, Photo } from './components';
// import { resizeFile } from './helpers';
import Selfie from './img/Selfie.jpg'

function App() {
  return (
    <div> 
       {/* Clase container luego como componente Container que reciba hijos para alinear con flexbox */}
      <Container>
        <Photo src={Selfie} type="circle" />  
      </ Container>
      
      <div className="color-line">
      </div>
    </div>
  );
}

export default App;
