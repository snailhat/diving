import { FirebaseUIProvider } from "@firebase-oss/ui-react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { APIProvider } from "@vis.gl/react-google-maps";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./features/auth/pages/SignIn";
import Dives from "./features/dives/pages/Dives";
import NewDive from "./features/dives/pages/NewDive";
import Home from "./features/home/pages/Home";
import Locations from "./features/locations/pages/Locations";
import { ui } from "./firebase";
import "./index.css";
import BottomNav from "./shared/components/BottomNav";
import TopNav from "./shared/components/TopNav";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export function App() {
  return (
    <FirebaseUIProvider ui={ui}>
      <APIProvider apiKey="">
        <ThemeProvider theme={darkTheme}>
          <TopNav />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/locations" element={<Locations />} />
              <Route path="/dives" element={<Dives />} />
              <Route path="/new-dive" element={<NewDive />} />
              <Route path="/login" element={<SignIn />} />
            </Routes>
            <CssBaseline />

            <BottomNav />
          </BrowserRouter>
        </ThemeProvider>
      </APIProvider>
    </FirebaseUIProvider>
  );
}

export default App;
