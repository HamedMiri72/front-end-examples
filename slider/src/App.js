import './App.css';
import Carousel from './components/Carousel/Carousel';
import CarouselData from "./data/CarouselData.json"


function App() {
  return (
    <div className="App">
     <Carousel data={CarouselData.slides}/>
    </div>
  );
}

export default App;
