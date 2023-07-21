import React from "react";
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import {InputBase} from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import "../../../index";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";
export default function ChipSearchBar() {
  const {t,i18n} = useTranslation()
  return (
    <Box sx={{width:"500px",bgcolor:"white",mt:"auto",mb:"auto"}}>
      <Autocomplete
        multiple        
        sx={{bgcolor:"white"}}
        options={["شلوار","پیرهن","کامپیوتر","ماکروفر","در","پنجره","رنگ","آهن ربا","تلوزیون","سیم مسی","لوله"
        ,"کنترل","پشم","تلفن همراه","تخمه","پنیر","پارچه","سبز","قرمز","بزرگ","کوچک","سی","پنجاه"
        ,"پنجاه و پنج","بخار پز","شیشه","گرم","سرد"]}
        freeSolo
        autoComplete
        includeInputInList
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              variant="filled"
              label={option}
              sx={{direction:"ltr"}}
              {...getTagProps({ index })}
            />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            placeholder={t("whatareyoulookingfor")}
          />
        )}
      />
    </Box>
  );
};