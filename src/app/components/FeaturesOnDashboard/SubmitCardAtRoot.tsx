"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import InputTime from "../Input/InputTime";
import { styled } from "@mui/material/styles";
import ChipSafetyList from "../Input/ChipSafetyList";
import AreaSelect from "../Input/AreaSelect";
import RadioAuditType from "../Input/RadioAuditType";
export default function SubmitCardAtRoot() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const Div = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(0),
  }));
  return (
    <div>
      <Button startIcon={<AddIcon />} onClick={handleClickOpen}>
        Submit Audit Result
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Submit</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill the form to record your audit result
          </DialogContentText>
          <Div>Date</Div>
          <InputTime></InputTime>
          <br></br>
          <br></br>
          <ChipSafetyList></ChipSafetyList>
          <br></br>
          <AreaSelect></AreaSelect>
          <br></br>
          <RadioAuditType></RadioAuditType>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
