import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import BottomNav from "./common/BottomNav";
import "./index.css";

import { APIProvider } from "@vis.gl/react-google-maps";
import Dives from "./dives/Dives";
import Home from "./home/Home";
import Locations from "./locations/Locations";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home />;
      case "dives":
        return <Dives />;
      case "locations":
        return <Locations />;
      default:
        return null;
    }
  };

  return (
    <APIProvider apiKey="">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {renderPage()}
        <BottomNav page={page} setPage={setPage} />
      </ThemeProvider>
    </APIProvider>
  );
}

export default App;
