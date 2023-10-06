import "./App.css";
import Chart from "./Components/LineChart/Chart";
import CircleChart from "./Components/LineChart/CircleChart";
import RenderLineChart from "./Components/LineChart/RenderLineChart";
import NavBar from "./Components/NavBar/NavBar";
import Phones from "./Components/Phones/Phones";
import PriceOptions from "./Components/PriceOptions/PriceOptions";
// import DaisyNav from "./Components/DaisyNav/DaisyNav";

function App() {
  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className="text-7xl bg-red-600 text-white">Price Options</h1>
      <PriceOptions></PriceOptions>
      <Chart></Chart>
      <RenderLineChart></RenderLineChart>
      <CircleChart></CircleChart>
      <Phones></Phones>
    
    </>
  );
}

export default App;
