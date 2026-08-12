import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { APIProvider } from "@vis.gl/react-google-maps";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BottomNav from "./common/BottomNav";
import Dives from "./dives/Dives";
import Home from "./home/Home";
import "./index.css";
import Locations from "./locations/Locations";
import NewDive from "./new_dive/NewDive";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export function App() {
  return (
    <APIProvider apiKey="">
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/dives" element={<Dives />} />
            <Route path="/new-dive" element={<NewDive />} />
          </Routes>
          <CssBaseline />

          <BottomNav />
        </BrowserRouter>
      </ThemeProvider>
    </APIProvider>
  );
}

export default App;
