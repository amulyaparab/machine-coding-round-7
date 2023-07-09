import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Continents } from "./Pages/Continents";
import { SingleContinent } from "./Pages/SingleContinent";
import { Country } from "./Pages/Country";
import { DestinationDetail } from "./Pages/DestinationDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Continents />} />
        <Route path="/continent/:continentId" element={<SingleContinent />} />
        <Route path="/:continentId/country/:countryId" element={<Country />} />
        <Route
          path="/:continentId/country/:countryId/destination/:destinationId"
          element={<DestinationDetail />}
        />
      </Routes>
    </div>
  );
}

export default App;
