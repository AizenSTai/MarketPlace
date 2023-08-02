import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box } from "@mui/material"
import { useTranslation } from 'react-i18next';
export default function CatDropdown() {
  const [age, setAge] = React.useState('');
  const { t, i18n } = useTranslation();
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box>
      <FormControl sx={{ml:2, width: "130px" }}>
        <Select
          sx={{ height: "60px",bgcolor:"orange",borderRadius:"25px",fontSize:"0.9rem" }}
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>{t("allgroups")}</em>
          </MenuItem>
          <MenuItem value={10}>{t("electerical")}</MenuItem>
          <MenuItem value={20}>{t("agriculture")}</MenuItem>
          <MenuItem value={30}>{t("apparel")}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}