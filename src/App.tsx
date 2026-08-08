import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import BottomNav from "./common/BottomNav";
import "./index.css";

import Dives from "./pages/Dives";
import Home from "./pages/Home";
import Locations from "./pages/Locations";

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
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {renderPage()}
      <BottomNav page={page} setPage={setPage} />
    </ThemeProvider>
  );
}

export default App;
