import {
  Box,
  IconButton,
  InputBase,
  useTheme,
  Button,
  Menu,
  MenuItem,
  Typography,
  SpeedDialAction,
  styled,
  Popover,
  Divider,
  useMediaQuery,
} from "@mui/material";
import Dropdown from "../DropDown/Dropdown";
import { Link, useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../../theme";
import json2mq from "json2mq";
// import Clock from "react-live-clock"
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Person2Icon from "@mui/icons-material/Person2";
import EmailIcon from "@mui/icons-material/Email";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import { json } from "react-router-dom";
import { useState, Fragment } from "react";
import { useTranslation } from "react-i18next";

const Topbar = (props) => {
  const {t,i18n} = useTranslation()
  const {page} = props
  const theme = useTheme();
  const navigate = useNavigate();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      Id="toTop"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: `240px`,
        // backgroundColor: "black",
        backgroundImage: "url(/images/logos/TopLogo.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        overflow: "hidden",
      }}
    >
      {/* TopBar */}
      <Box
        sx={{
          display: "flex",
          height: "45px",
          zIndex:10,
          width: "100%",
          backgroundColor: "white",
          borderBottom: "1px solid #ddd",
        }}
      >
        {/* Logo */}
        <Box sx={{ width: "3.5%",mr:1,ml:1 }}>
          <a href="//www.google.com" target="_blank">
            <img
              src="/images/logos/MainLogo.ico"
              alt="HTML tutorial"
              style={{ width: "100%", height: "100%" }}
            />
          </a>
        </Box>
        {/* Tabs */}
        <Box sx={{ display: "flex", justifyContent: "space-between" ,width:"96%"}}>
          <Box sx={{ display: "flex",width:"40%",justifyContent:"left" }}>
            <Dropdown
              title={t("categories")}
              left={true}
              icon={<FormatListBulletedIcon fontSize="small" sx={{mt:"auto",mb:"auto",mr:1,ml:2}} />}
            />
          </Box>
          <Box sx={{ display: "flex",width:"60%",justifyContent:"right" }}>
            <Dropdown
              title=""
              icon={<ExpandMoreIcon sx={{ fontSize: "1rem",mt:"auto" }} />}
              icon2={
                <Person2Icon
                  sx={{ fontSize: "1.6rem", cursor: "pointer" }}
                  aria-haspopup="true"
                />
              }
            />
            {/* <Dropdown
              title=""
              icon={<ExpandMoreIcon sx={{ fontSize: "1rem",mt:"auto" }} />}
              icon2={
                <EmailIcon
                sx={{ fontSize: "1.6rem", ml: 0.5, mr: 0.5, cursor: "pointer" }}
                aria-haspopup="true"/>}
            /> */}
            {/* <Dropdown
              title=""
              icon={<ExpandMoreIcon sx={{ fontSize: "1rem",mt:"auto" }} />}
              icon2={
                <AssignmentIcon
                sx={{ fontSize: "1.6rem", ml: 0.5, mr: 0.5, cursor: "pointer" }}
                aria-haspopup="true"
              />
              }
            /> */}
            {/* <Dropdown
              title=""
              icon={<ExpandMoreIcon sx={{ fontSize: "1rem" ,mt:"auto"}} />}
              icon2={
                <ShoppingCartIcon
                sx={{ fontSize: "1.6rem", ml: 0.5, mr: 0.5, cursor: "pointer" }}
                aria-haspopup="true"
              />
              }
            /> */}
            <Dropdown
              title={t("help")}
              icon={<ExpandMoreIcon sx={{ fontSize: "1rem" ,mt:"auto"}} />} border="1"/>
            <Dropdown
              title={t("language")}
              icon={<ExpandMoreIcon sx={{ fontSize: "1rem",mt:"auto" }}/>} type="lang" border="1"/>
            <Dropdown
              title={t("more")}
              icon={<ExpandMoreIcon sx={{ fontSize: "1rem",mt:"auto" }} />} border="1"/>
          </Box>
        </Box>
      </Box>
      {/* Search Box */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          mt: "2%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 4,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Button
            sx={{
              fontSize: "1.2rem",
              borderBottom: page == "products" ? "2px solid white" : "0px",
              fontWeight: page == "products" ? "600" : "",textTransform:"capitalize",letterSpacing:"1px"
            }}
            onClick={() => {              
              navigate("/products");
            }}
          >
            {t("products")}
          </Button>
          <Button
            sx={{
              fontSize: "1.2rem",
              borderBottom: page == "sellers" ? "2px solid white" : "0px",
              fontWeight: page == "sellers" ? "600" : "",textTransform:"capitalize",letterSpacing:"1px"
            }}
            onClick={() => {              
              navigate("/sellers");
            }}
          >
            {t("sellers")}
          </Button>
        </Box>
        <Box
          sx={{
            direction: "rtl",
            mr: "auto",
            ml: "auto",
            height: "40px",
            borderRadius: "25px",
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "white",
            width: "60%",
            mt: 1,
          }}
        >
          <InputBase
            sx={{
              mr:3,
              ml:3,
              width: "600px",
              fontSize: "1rem",
              color: "black",
              direction: "rtl",
            }}
            placeholder={t("whatareyoulookingfor")}
          />
          <Box sx={{ display: "flex" }}>
            {/* <IconButton type="button" sx={{}}>
              <PhotoCameraOutlinedIcon                
                sx={{ mt: "auto", mb: "auto",fontSize:"2rem" }}
              />
            </IconButton> */}
            <IconButton
              type="button"
              sx={{
                backgroundColor: "orange",
                width: "100px",
                color: "white",
                borderTopRightRadius: "25px",
                borderBottomRightRadius: "25px",
                borderTopLeftRadius: "25px",
                borderBottomLeftRadius: "25px",
                "&:hover": { backgroundColor: "orange" },
              }}
            >
              <Typography fontSize="1rem">{t("search")}</Typography>
              <Search fontSize="medium" sx={{}} />
            </IconButton>
          </Box>
          {/* ICONS */}
        </Box>
      </Box>
    </Box>
  );
};
export default Topbar;
