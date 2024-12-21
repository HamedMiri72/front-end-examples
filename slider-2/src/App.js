
import './App.css';
import { Slider } from './slider/Slider';
import ImageSlider from "./data/ImageSlider.json"



function App() {
  return (
    <div className="App">
      <Slider data={ImageSlider.slider}/>
    </div>
  );
}

export default App;
