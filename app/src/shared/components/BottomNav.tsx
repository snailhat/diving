import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ScubaDivingIcon from "@mui/icons-material/ScubaDiving";
import { Paper } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useLocation, useNavigate } from "react-router-dom";
import "./BottomNav.css";

export default function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Paper className="bottom-nav">
      <BottomNavigation
        showLabels
        value={location.pathname}
        onChange={(event, newValue) => {
          navigate(newValue);
        }}
      >
        <BottomNavigationAction label="Home" value="/" icon={<HomeIcon />} />
        <BottomNavigationAction
          label="Dives"
          value="/dives"
          icon={<ScubaDivingIcon />}
        />
        <BottomNavigationAction
          label="Locations"
          value="/locations"
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          label="New Dive"
          value="/new-dive"
          icon={<AddIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}
