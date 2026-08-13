import { FirebaseUIProvider } from "@firebase-oss/ui-react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { APIProvider } from "@vis.gl/react-google-maps";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./auth/SignIn";
import BottomNav from "./common/BottomNav";
import Dives from "./dives/Dives";
import { ui } from "./firebase";
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
    <FirebaseUIProvider ui={ui}>
      <APIProvider apiKey="">
        <ThemeProvider theme={darkTheme}>
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
