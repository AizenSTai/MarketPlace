import { Box, Button, IconButton, Typography, useTheme, InputBase, Popover, Divider, useScrollTrigger, Toolbar, CssBaseline, Menu, MenuItem } from "@mui/material";
import { tokens } from "../../../../theme";
import * as React from 'react';
import Card5 from "../../../MainComponents/Cards/Card5";
import GoldenCard from "../../../MainComponents/Cards/GoldenCard";
import LocalMallTwoToneIcon from '@mui/icons-material/LocalMallTwoTone';
import SupportAgentTwoToneIcon from '@mui/icons-material/SupportAgentTwoTone';
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import FilterListIcon from '@mui/icons-material/FilterList';
import Topbar from "../../../MainComponents/Topbar/Topbar";
import { useTranslation } from "react-i18next";
import SilverCard from "../../../MainComponents/Cards/SilverCard";
import CooperCard from "../../../MainComponents/Cards/CooperCard";
import { NestedDropdown } from "mui-nested-menu";

const DashboardLite = ({ title, subTitle }) => {
    const { t, i18n } = useTranslation()
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const menuItemsData = {
        label: 'File',
  items: [
    {
      label: 'New',
      //leftIcon: <NewIcon />,
      callback: (event, item) => console.log('New clicked', event, item),
    },
    {
      label: 'Save',
      //leftIcon: <SaveIcon />,
      callback: (event, item) => console.log('Save clicked', event, item),
    },
    {
      label: 'Save As',
      //leftIcon: <SaveAsIcon />,
      items: [
        {
          label: 'Option 1',
          //rightIcon: <SaveAsIcon />,
          callback: (event, item) => console.log('Save As > Option 1 clicked', event, item),
        },
        {
          label: 'Option 2',
        //   leftIcon: <SaveAsIcon />,
          callback: (event, item) => console.log('Save As > Option 2 clicked', event, item),
          disabled: true,
        },
      ],
    },
    {
      label: 'Export',
    //   leftIcon: <ImportExportRoundedIcon />,
    //   rightIcon: <ImportExportRoundedIcon />,
      items: [
        {
          label: 'File Type 1',
          items: [
            {
              label: 'Option 1',
            //   rightIcon: <SaveAsIcon />,
              callback: (event, item) => console.log('Export > FT1 > O1 clicked', event, item),
              sx: { color: '#FF0000' },
            },
            {
              label: 'Option 2',
            //   leftIcon: <SaveAsIcon />,
              callback: (event, item) => console.log('Export > FT1 > O2 clicked', event, item),
            },
          ],
        },
        {
          label: 'File Type 2',
          callback: (event, item) => console.log('Export > FT2 clicked', event, item),
        },
      ],
    },
  ],
    }
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Topbar page="sellers" />
            <Box sx={{
                backgroundColor: "white", height: "80px", width: "90%", margin: "0 auto", borderRadius: "10px", transform: "translateY(-50px)"
                , display: "flex"
            }}>
                <Box sx={{ width: "33%", p: 2, pr: 3, pl: 3, display: "flex" }}>
                    <a href="//www.google.com" target="_blank">
                        <LocalMallTwoToneIcon sx={{ color: "darkorange", fontSize: "3.1rem" }} />

                    </a>
                    <Box sx={{ ml: 3 }}>
                        <Typography sx={{ fontWeight: "bold", fontSize: "1rem" }}>{t("shopguide")}</Typography>
                        <Typography sx={{ color: "grey", fontSize: "0.8rem", mt: 0.5 }}>{t("onerequestmultiplequotes")}</Typography>
                    </Box>
                </Box>
                <Box sx={{ borderRight: "1px solid #ddd", borderLeft: "1px solid #ddd", width: "33%", p: 2, pr: 3, pl: 3, display: "flex" }}>
                    <a href="//www.google.com" target="_blank">
                        <StorefrontTwoToneIcon sx={{ color: "darkorange", fontSize: "3.1rem" }} />

                    </a>
                    <Box sx={{ ml: 3 }}>
                        <Typography sx={{ fontWeight: "bold", fontSize: "1rem" }}>{t("wanttobeseller")}</Typography>
                        <Typography sx={{ color: "grey", fontSize: "0.8rem", mt: 0.5 }}>{t("onerequestmultiplequotes")}</Typography>
                    </Box>
                </Box>
                <Box sx={{ width: "33%", p: 2, pr: 3, pl: 3, display: "flex" }}>
                    <a href="//www.google.com" target="_blank">
                        <SupportAgentTwoToneIcon sx={{ color: "darkorange", fontSize: "3.1rem" }} />

                    </a>
                    <Box sx={{ ml: 3 }}>
                        <Typography sx={{ fontWeight: "bold", fontSize: "1rem" }}>{t("websiteguide")}</Typography>
                        <Typography sx={{ color: "grey", fontSize: "0.8rem", mt: 0.5 }}>{t("onerequestmultiplequotes")}</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{
                backgroundColor: "white", height: "auto", minHeight: "440px", maxHeight: "440px", width: "90%", boxSizing: "border-box"
                , margin: "0 auto", borderRadius: "10px", transform: "translateY(-30px)", display: "flex", p: 2
            }}>
                <Box sx={{ display: "flex", width: "80%", justifyContent: "space-between" }}>
                    <Box sx={{ width: "39%", borderRadius: "10px" }}>
                        <GoldenCard img1="images/logos/GoldCard.jpg" />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width: "29%" }}>
                        <SilverCard img1="images/logos/SilverCard.jpg" />
                        <SilverCard img1="images/logos/SilverCard.jpg" />
                    </Box>
                    <Box sx={{ width: "27%", display: "flex", flexDirection: "column", p: 1, justifyContent: "space-around" }}>
                        <CooperCard img1="images/srcImgs/Card4Imgs/download2.png" />
                        <CooperCard img1="images/srcImgs/Card4Imgs/download2.png" />
                        <CooperCard img1="images/srcImgs/Card4Imgs/download2.png" />
                    </Box>
                </Box>
                <Box sx={{ display: "flex", width: "20%", flexDirection: "column" }}>
                    <Box sx={{ display: "flex", height: "20%" }}>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", height: "15%" }}>
                        <Button variant="contained" sx={{ bgcolor: "orange", m: 1, borderRadius: "25px", fontSize: "1rem", "&:hover": { backgroundColor: "orange" } }}>{t("signin")}</Button>
                        <Button variant="contained" sx={{ bgcolor: "orange", m: 1, borderRadius: "25px", fontSize: "1rem", "&:hover": { backgroundColor: "orange" }, }}>{t("joinforfree")}</Button>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", height: "40%" }}>

                    </Box>
                    <Box sx={{ mt: 1, bgcolor: "white", display: "flex", flexDirection: "column", height: "25%" }}>
                        <Typography sx={{ fontSize: "1rem", textAlign: "center", mb: 1 }}>{t("needhelp")}</Typography>
                        <Button variant="outlined" sx={{ p: 2, fontSize: "0.8rem", color: "black", m: "0 auto", border: "1px solid black", mb: 1, borderRadius: "50px" }}>{t("contact")}</Button>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ width: "95%", position: "sticky", top: "0", zIndex: 99, margin: "0 auto", borderRadius: "10px", display: "flex", flexDirection: "column", bgcolor: "white", boxShadow: '0px 0px 5px #00000030 !important', justifyContent: "space-between" }}>
                <Box sx={{ display: "flex", p: 1, justifyContent: "space-between", width: "100%", mb: 1 }}>
                    <Button sx={{ color: "black", fontSize: "1rem", ml: 2 }}>{t("nofilter")}</Button>
                    <Button sx={{ color: "black", fontSize: "1rem" }}>{t("agriculture")}</Button>
                    <Button sx={{ color: "black", fontSize: "1rem" }}>{t("fabric")}</Button>
                    <Button sx={{ color: "black", fontSize: "1rem" }}>{t("food")}</Button>
                    <Button sx={{ color: "black", fontSize: "1rem" }}>{t("apparel")}</Button>
                    <Button sx={{ color: "black", fontSize: "1rem" }}>{t("electerical")}</Button>
                    {/* <Button variant="outlined" sx={{ color: "black", fontSize: "1rem", mr: 2, border: "1px solid black", borderRadius: "10px" }}>{t("more")}</Button> */}
                    <Box sx={{border:"1px solid #ddd",borderRadius:"10px",mr:2,ml:2}}>
                        <NestedDropdown
                            menuItemsData={menuItemsData}
                            MenuProps={{ elevation: 3 }}                        
                        />
                    </Box>
                </Box>
                <Divider />
                <Box sx={{ mt: 2, display: "flex", p: 1, width: "100%" }}>
                    <Button variant="outlined" sx={{ ml: 2, color: "black", fontSize: "0.9rem", mr: 2, pr: 2, pl: 2, border: "1px solid black", borderRadius: "50px" }}>{t("mostpopular")}</Button>
                    <Button variant="outlined" sx={{ color: "black", fontSize: "0.9rem", mr: 2, pr: 2, pl: 2, border: "1px solid black", borderRadius: "50px" }}>{t("mostexpansive")}</Button>
                    <Button variant="outlined" sx={{ color: "black", fontSize: "0.9rem", mr: 2, pr: 2, pl: 2, border: "1px solid black", borderRadius: "50px" }}>{t("cheapest")}</Button>
                    <Button variant="outlined" sx={{ color: "black", fontSize: "0.9rem", mr: 2, pr: 2, pl: 2, border: "1px solid black", borderRadius: "50px" }}>{t("sellrate")}</Button>
                    <Button variant="outlined" sx={{ color: "black", fontSize: "0.9rem", mr: 2, border: "1px solid black", borderRadius: "50px", ml: "auto" }}><FilterListIcon/>{t("cityfilter")}</Button>
                </Box>
            </Box>
            <Box sx={{ width: "95%", margin: "0 auto", mt: 2, borderRadius: "10px", display: "flex", gap: "25px", flexDirection: "column", justifyContent: "space-between" }}>
                <Card5 id={11} />
                <Card5 id={12} />
                <Card5 id={13} />
                <Card5 id={11} />
                <Card5 id={12} />
                <Card5 id={13} />
                <Card5 id={11} />
                <Card5 id={12} />
                <Card5 id={13} />
            </Box>
            <Box sx={{ width: "100%", height: "600px", bgcolor: "#445268", display: "flex" }}>
                <Typography sx={{ color: "white", fontSize: "8rem", margin: "auto auto" }}>Some Stuff</Typography>
            </Box>
        </Box>
    )
}
export default DashboardLite