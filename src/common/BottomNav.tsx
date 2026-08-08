import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ScubaDivingIcon from "@mui/icons-material/ScubaDiving";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Box from "@mui/material/Box";
import "./BottomNav.css";

export default function BottomNav({
  page,
  setPage,
}: {
  page: string;
  setPage: (page: string) => void;
}) {
  return (
    <Box className="bottom-nav">
      <BottomNavigation
        showLabels
        value={page}
        onChange={(event, newValue) => {
          setPage(newValue);
        }}
      >
        <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
        <BottomNavigationAction
          label="Dives"
          value="dives"
          icon={<ScubaDivingIcon />}
        />
        <BottomNavigationAction
          label="Locations"
          value="locations"
          icon={<LocationOnIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
