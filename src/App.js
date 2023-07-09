import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Continents } from "./Pages/Continents";
import { SingleContinent } from "./Pages/SingleContinent";
import { DestinationList } from "./Pages/DestinantionList";
import { DestinationDetail } from "./Pages/DestinationDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Continents />} />
        <Route path="/country/:countryId" element={<SingleContinent />} />
        <Route path="/" element={<DestinationList />} />
        <Route path="/" element={<DestinationDetail />} />
      </Routes>
    </div>
  );
}

export default App;
