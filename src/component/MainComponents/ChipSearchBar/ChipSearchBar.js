import React from "react";
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import {InputBase, useTheme} from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import "../../../index";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";
import { Style } from "@mui/icons-material";
export default function ChipSearchBar() {
  const theme = useTheme();
  const {t,i18n} = useTranslation()
  // console.log(theme.dropdown)
  return (
    <Box sx={{width:"80%",bgcolor:"white",mt:"auto",mb:"auto",}}>
      <Autocomplete
        className={theme.dropdown}
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
            placeholder={t("whatareyoulookingfor")}
            sx={{
              fieldset: {
                width:"100%",
                border:"0px",
              }
            }}
          />
        )}
      />
    </Box>
  );
};