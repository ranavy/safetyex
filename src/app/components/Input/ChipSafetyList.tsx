import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Mr. Kheam Boonmee",
  "Mr. Nuttakij Pruttanon",
  "Mr. Saravut Buttong",
  "Mr. Phonlawat Buahame",
  "Mr. Tawit Sungsuwan",
  "Mr. Sitthisak Srisawat",
  "Mr. Sayan Chantarasamarn",
  "Mr. Taradon Virarusmi",
  "Mr. Suchart Lertpisutpong",
  "Mr. Kathakorn Phokham",
  "Mr. Jarun Toetaptim",
  "Mr. Phakhaphon Tianthong",
  "Miss Jittima Soponsupattaraporn",
  "Mr. Kriangkrai Nooleg",
  "Mr. Tinnakorn Nilla",
  "Mr. Chanatat Chomsri",
  "Miss Satsana Apornrat",
  "Miss Phannapat Inthapophan",
  "Mr. Ranavee Phokaew",
  "Miss Kwanchanok Swangchat",
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectChip() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 0, width: 500 }}>
        <InputLabel id="safety-list">Auditor</InputLabel>
        <Select
          labelId="-safety-list-label"
          id="safety-list-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-safety-list" label="Auditor" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
