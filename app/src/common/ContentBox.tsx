import { Box } from "@mui/material";
import type { ReactNode } from "react";

// This exists to make sure that there is a gap at the bottom for the nav bar
// otherwise it overlaps the content
export default function ContentBox({ children }: { children: ReactNode }) {
  return <Box sx={{ pb: "56px" }}>{children}</Box>;
}
