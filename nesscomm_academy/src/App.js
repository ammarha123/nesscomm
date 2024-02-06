import './App.css';
import Home from './Components/Home';
import Value from './Components/Value';
import Benefit from './Components/Benefit';
import Program from './Components/Program';
import Testimoni from './Components/Testimoni';
import Galeri from './Components/Galeri';
import Bantuan from './Components/Bantuan';
import Footer from "./Components/Footer";
import BottomBanner from './Components/BottomBanner';

function App() {
  return (
    <div className="App">
    <Home/>
    <Value/>
    <Benefit/>
    <Program/>
    <Testimoni/>
    <Galeri/>
    <Bantuan/>
    <BottomBanner/>
    <Footer/>
    </div>
  );
}

export default App;
