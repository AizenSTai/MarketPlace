import { Box, Button, IconButton, Typography, useTheme, InputBase, Popover, Divider, useScrollTrigger, Toolbar, CssBaseline } from "@mui/material";
import { tokens } from "../../../../theme";
import * as React from 'react';
import Card1 from "../../../MainComponents/Cards/Card1";
import Card2 from "../../../MainComponents/Cards/Card2";
import Card3 from "../../../MainComponents/Cards/Card3";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect } from "react";
import LocalMallTwoToneIcon from '@mui/icons-material/LocalMallTwoTone';
import SupportAgentTwoToneIcon from '@mui/icons-material/SupportAgentTwoTone';
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import Topbar from "../../../MainComponents/Topbar/Topbar";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"
import Slider from "react-slick";
import useMediaQuery from '@mui/material/useMediaQuery';
import { ArrowBackIos } from "@mui/icons-material";
import { ArrowForwardIos } from "@mui/icons-material";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        // <div
        //     className={className}
        //     style={{ ...style, display: "block", right: "0", zIndex: "999", background: "grey" }}
        //     onClick={onClick}
        // />
        <IconButton onClick={onClick} sx={{position:"absolute",top:"43%",right:0,":hover":{backgroundColor:"transparent"}}}>
            <ArrowForwardIos style={{ display: "block",fontSize:"2.5rem", zIndex: "999" }} />
        </IconButton>
    );
}
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        // <div
        //     className={className}
        //     style={{ ...style, display: "block", left: "0", zIndex: "999", background: "grey" }}
        //     onClick={onClick}
        // />
        <IconButton onClick={onClick} sx={{position:"absolute",top:"43%",left:0,":hover":{backgroundColor:"transparent"}}}>
            <ArrowBackIos style={{ m:"auto auto",display: "block",fontSize:"2.5rem", zIndex: "999" }} />
        </IconButton>
    );
}

const Dashboard = ({ subTitle }) => {
    const { t, i18n } = useTranslation()
    const theme = useTheme();
    const matches = useMediaQuery('(min-width:900px)');
    const colors = tokens(theme.palette.mode);
    const images = [
        { url: "images/mainImgs/SliderImgs/download1.png" },
        { url: "images/mainImgs/SliderImgs/download2.png" },
        { url: "images/mainImgs/SliderImgs/download3.jpg" },
        { url: "images/mainImgs/SliderImgs/download4.png" },
    ];
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    const settingsCard = {
        infinite: true,
        slidesToShow: matches ? 3 : 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <Box  sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Topbar page="products" />            
            <Box id="Triplecontainer" >
                <Box id="Subcontainer">
                    <a href="//www.google.com" target="_blank">
                        <LocalMallTwoToneIcon id="SubContainerIcon" />
                    </a>
                    <Box id="SubSubcontainer">
                        <Typography id="SubSubContainerTypography" >{t("shopguide")}</Typography>
                        <Typography sx={{ color: "grey", fontSize: "0.8rem", mt: 0.5,"@media (max-width:900px)":{display:"none"} }}>{t("onerequestmultiplequotes")}</Typography>
                    </Box>
                </Box>
                <Box id="Subcontainer" sx={{ borderRight: "1px solid #ddd", borderLeft: "1px solid #ddd" }}>
                    <a href="//www.google.com" target="_blank">
                        <StorefrontTwoToneIcon id="SubContainerIcon" />
                    </a>
                    <Box id="SubSubcontainer">
                        <Typography id="SubSubContainerTypography" >{t("wanttobeseller")}</Typography>
                        <Typography sx={{ color: "grey", fontSize: "0.8rem", mt: 0.5,"@media (max-width:900px)":{display:"none"} }}>{t("onerequestmultiplequotes")}</Typography>
                    </Box>
                </Box>
                <Box id="Subcontainer">
                    <a href="//www.google.com" target="_blank">
                        <SupportAgentTwoToneIcon id="SubContainerIcon"/>
                    </a>
                    <Box id="SubSubcontainer">
                        <Typography id="SubSubContainerTypography" >{t("websiteguide")}</Typography>
                        <Typography sx={{ color: "grey", fontSize: "0.8rem", mt: 0.5,"@media (max-width:900px)":{display:"none"} }}>{t("onerequestmultiplequotes")}</Typography>
                    </Box>
                </Box>
            </Box>

            <Box id="Slidercontainer">
                <Box sx={{ width: "100%", backgroundColor: "white", boxSizing: "border-box" }}>
                    {/* <SimpleImageSlider
                        width="49%"
                        height="300px"
                        images={images}
                        showBullets={true}
                        showNavs={true}
                        autoPlay={true}
                        navMargin={-10}
                        style={{ backgroundColor: "white", color: "black" }}
                        slideDuration="0.5"
                        onStartSlide={(index, length) => {
                            setImageNum(index);
                        }}
                    /> */}
                    <Slider {...settings}>
                        {images.map((itm, index) => {
                            return (
                                <Box id="slider" sx={{
                                    backgroundImage: `url(/${itm.url})`
                                }} />
                            )
                        })}
                    </Slider>
                </Box>
            </Box>
            <Box>
                <Typography sx={{ cursor: "pointer","@media (max-width:900px)":{fontSize:"1.2rem"}, width: "90%", margin: "0 auto", fontSize: "1.4rem", fontWeight: "600", mb: 2, direction: theme.palette.mode == "light" ? "rtl" : "ltr" }}>{t("quicksale")}</Typography>
            </Box>
            <Box sx={{ width: "90%", margin: "0 auto", borderRadius: "10px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 2 }}>
                <Card3 id={11} img1="/images/srcImgs/Card3Imgs/download4.png" />
                <Card3 id={12} img1="/images/srcImgs/Card3Imgs/download5.png" />
                <Card3 id={11} img1="/images/srcImgs/Card3Imgs/download1.png" />
                <Card3 id={13} img1="/images/srcImgs/Card3Imgs/download3.png" />
                <Card3 id={12} img1="/images/srcImgs/Card3Imgs/download2.png" />
            </Box>
            <Box>
                <Typography sx={{ cursor: "pointer", width: "90%", margin: "0 auto", fontSize: "1.4rem", fontWeight: "600","@media (max-width:900px)":{fontSize:"1.2rem"}, mb: 2, direction: theme.palette.mode == "light" ? "rtl" : "ltr" }}>{t("discounters")}</Typography>
            </Box>
            <Box sx={{ width: "90%", margin: "0 auto", borderRadius: "10px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 2,"@media(max-width:900px)":{gap:1} }}>
                <Card3 id={11} img1="/images/srcImgs/Card3Imgs/download1.png" />
                <Card3 id={12} img1="/images/srcImgs/Card3Imgs/download2.png" />
                <Card3 id={13} img1="/images/srcImgs/Card3Imgs/download3.png" />
                <Card3 id={11} img1="/images/srcImgs/Card3Imgs/download4.png" />
                <Card3 id={12} img1="/images/srcImgs/Card3Imgs/download5.png" />
            </Box>
            <Box>
                <Typography sx={{ cursor: "pointer", width: "90%", margin: "0 auto", fontSize: "1.4rem","@media (max-width:900px)":{fontSize:"1.2rem"}, fontWeight: "600", mb: 1, direction: theme.palette.mode == "light" ? "rtl" : "ltr" }}>{t("newest")}</Typography>
            </Box>
            <Box sx={{ width: "90%", m: "0 auto", borderRadius: "10px", boxSizing: "border-box" }}>
                <Slider {...settingsCard} rows={2} centerMode={true} style={{ paddingTop: "2%" }} >
                    <Card1 id={11} />
                    <Card1 id={12} />
                    <Card1 id={13} />
                    <Card1 id={11} />
                    <Card1 id={12} />
                    <Card1 id={13} />
                    <Card1 id={11} />
                    <Card1 id={12} />
                    <Card1 id={13} />
                    <Card1 id={11} />
                    <Card1 id={12} />
                    <Card1 id={13} />
                </Slider>
            </Box>
            <Box>
                <Typography sx={{ cursor: "pointer", width: "90%", margin: "0 auto", fontSize: "1.4rem","@media (max-width:900px)":{fontSize:"1.2rem"}, fontWeight: "600", mb: 2, direction: theme.palette.mode == "light" ? "rtl" : "ltr" }}>{t("popular")}</Typography>
            </Box>
            <Box sx={{ width: "90%", margin: "0 auto", borderRadius: "10px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 2 }}>
                <Card2 id={11} />
                <Card2 id={12} />
                <Card2 id={13} />
            </Box>
            {/* <Box>
                <Typography sx={{ cursor: "pointer", width: "90%", margin: "0 auto", fontSize: "1.4rem", fontWeight: "600", mb: 2, display: "flex" }}>{t("tradeservices")}<Typography sx={{ fontSize: "1.2rem", ml: 2, mt: "auto", mb: "auto", color: "grey" }}>Microsis.com's trade services help ensure that your purchases are protected.</Typography></Typography>
            </Box>
            <Box sx={{ width: "90%", margin: "0 auto", borderRadius: "10px", display: "flex", justifyContent: "center", flexWrap: "wrap",gap:2 }}>
                <Card4 id={11} img1="images/srcImgs/Card4Imgs/download1.png" Icon={PaidIcon} color="gold" />
                <Card4 id={12} img1="images/srcImgs/Card4Imgs/download2.png" Icon={PaymentIcon} color="goldenrod" />
                <Card4 id={13} img1="images/srcImgs/Card4Imgs/download3.png" Icon={ScreenSearchDesktopIcon} color="grey" />
                <Card4 id={14} img1="images/srcImgs/Card4Imgs/download4.png" Icon={RocketLaunchIcon} color="darkBlue" />
            </Box> */}
            <Box>
                <Typography sx={{ cursor: "pointer", width: "90%", margin: "0 auto", fontSize: "2rem", fontWeight: "600", mb: 1, display: "flex", justifyContent: "space-between", direction: theme.palette.mode == "light" ? "rtl" : "ltr" }}><Typography sx={{ fontSize: "1.4rem", fontWeight: "600","@media (max-width:900px)":{fontSize:"1.2rem"} }}>{t("suppliers")}</Typography>{theme.palette.mode == "dark" ? <ArrowForwardIcon sx={{ fontSize: "2rem", fontWeight: "600" }} /> : <ArrowBackIcon sx={{ fontSize: "2rem", fontWeight: "600","@media (max-width:900px)":{fontSize:"1.5rem"} }} />} </Typography>
            </Box>
            <Box sx={{ display: "flex", width: "90%", margin: "0 auto", mb: 1, flexWrap: "wrap" }}>
                <IconButton><img
                    src="/images/icons/icons8-france-48.png"
                    alt="HTML tutorial"
                    style={{ width: "40px", minWidth: "40px", minHeight: "40px", height: "40px" }}

                /><Typography id="suppliersName">France</Typography></IconButton>
                <IconButton><img
                    src="/images/icons/icons8-germany-48.png"
                    alt="HTML tutorial"
                    style={{ width: "40px", minWidth: "40px", minHeight: "40px", height: "40px" }}

                /><Typography id="suppliersName">Germany</Typography></IconButton>
                <IconButton><img
                    src="/images/icons/icons8-great-britain-48.png"
                    alt="HTML tutorial"
                    style={{ width: "40px", minWidth: "40px", minHeight: "40px", height: "40px" }}

                /><Typography id="suppliersName">UK</Typography></IconButton>
                <IconButton><img
                    src="/images/icons/icons8-iran-48.png"
                    alt="HTML tutorial"
                    style={{ width: "40px", minWidth: "40px", minHeight: "40px", height: "40px" }}

                /><Typography id="suppliersName">Iran</Typography></IconButton>
                <IconButton><img
                    src="/images/icons/icons8-united-arab-emirates-48.png"
                    alt="HTML tutorial"
                    style={{ width: "40px", minWidth: "40px", minHeight: "40px", height: "40px" }}

                /><Typography id="suppliersName">United Arab Emirates</Typography></IconButton>
                <IconButton><img
                    src="/images/icons/icons8-usa-48.png"
                    alt="HTML tutorial"
                    style={{ width: "40px", minWidth: "40px", minHeight: "40px", height: "40px" }}

                /><Typography id="suppliersName">USA</Typography></IconButton>
            </Box>
            <Box id="bottomBar">
                <Typography id="bottomBarText" >Some Stuff</Typography>
            </Box>
        </Box>
    )
}
export default Dashboard