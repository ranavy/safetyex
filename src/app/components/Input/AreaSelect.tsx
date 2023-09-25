"use client";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function AreaSelect() {
  return (
    <div>
      <FormControl sx={{ m: 0, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-select">Area</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Area">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <ListSubheader>OPPL</ListSubheader>
          <MenuItem value={1}>PLHD</MenuItem>
          <MenuItem value={2}>PLP1</MenuItem>
          <MenuItem value={3}>PLP2</MenuItem>
          <MenuItem value={4}>PLPC</MenuItem>
          <MenuItem value={5}>PLBG</MenuItem>
          <ListSubheader>OPSA</ListSubheader>
          <MenuItem value={6}>SAAB</MenuItem>
          <MenuItem value={7}>SASN</MenuItem>
          <MenuItem value={8}>SAAE</MenuItem>
          <MenuItem value={9}>SAPE</MenuItem>
          <ListSubheader>OPOL</ListSubheader>
          <MenuItem value={10}>OLHU</MenuItem>
          <MenuItem value={11}>OLCO</MenuItem>
          <MenuItem value={12}>OLPA</MenuItem>
          <ListSubheader>ORRE</ListSubheader>
          <MenuItem value={13}>READ</MenuItem>
          <MenuItem value={14}>REDV</MenuItem>
          <MenuItem value={15}>RENA</MenuItem>
          <MenuItem value={16}>RESR</MenuItem>
          <ListSubheader>ORLB</ListSubheader>
          <MenuItem value={17}>LBOD</MenuItem>
          <MenuItem value={18}>LBOT</MenuItem>
          <ListSubheader>ORRC</ListSubheader>
          <MenuItem value={19}>RCPP</MenuItem>
          <MenuItem value={20}>RCPR</MenuItem>
          <MenuItem value={21}>RCHR</MenuItem>
          <MenuItem value={22}>RCHS</MenuItem>
          <MenuItem value={23}>RCUT</MenuItem>
          <ListSubheader>INTL</ListSubheader>
          <MenuItem value={24}>TLOC</MenuItem>
          <MenuItem value={25}>TLOR</MenuItem>
          <MenuItem value={26}>TLLB</MenuItem>
          <MenuItem value={27}>TLMM</MenuItem>
          <MenuItem value={28}>TLDP</MenuItem>
          <MenuItem value={29}>TLDR</MenuItem>
          <MenuItem value={30}>TLDA</MenuItem>
          <MenuItem value={31}>TLDL</MenuItem>
          <ListSubheader>INPW</ListSubheader>
          <MenuItem value={32}>PWPP</MenuItem>
          <MenuItem value={33}>PWUT</MenuItem>
          <MenuItem value={34}>PWWT</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
