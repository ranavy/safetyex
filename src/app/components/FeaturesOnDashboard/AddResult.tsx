"use client";
import Backdrop from "@mui/material/Backdrop";
import * as React from "react";
import Button from "@mui/material/Button";
import { GridToolbarContainer } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";

export default function AddResult() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <GridToolbarContainer>
        <Button startIcon={<AddIcon />} onClick={handleOpen}>
          Submit audit result
        </Button>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        ></Backdrop>
      </GridToolbarContainer>
    </div>
  );
}
