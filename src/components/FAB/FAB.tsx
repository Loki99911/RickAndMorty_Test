import React, { useState } from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CloseIcon from "@mui/icons-material/Close";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { PiDownloadSimpleLight } from "react-icons/pi";

import { OpenFabWrapper, FabWrapper } from "./FAB.styled";

export const FAB = () => {
  const [isFabOpen, setIsFabOpen] = useState<boolean>(false);

  const toggleFab = () => {
    setIsFabOpen((prev) => !prev);
  };

  return (
    <FabWrapper>
      <Box
        sx={{
          "& > :not(style)": { m: 1 },
        }}
      >
        {isFabOpen && (
          <OpenFabWrapper>
            <Fab size="small" color="primary" aria-label="add">
              <ErrorOutlineIcon />
            </Fab>
            <Fab size="small" color="primary" aria-label="add">
              <PiDownloadSimpleLight size="24"/>
            </Fab>
          </OpenFabWrapper>
        )}
        <Fab color="primary" aria-label="add" onClick={toggleFab}>
          {!isFabOpen ? <MoreVertIcon /> : <CloseIcon />}
        </Fab>
      </Box>
    </FabWrapper>
  );
};
