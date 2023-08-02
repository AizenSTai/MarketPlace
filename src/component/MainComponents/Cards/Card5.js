import styled from "@emotion/styled";
import { Card, Box, Typography, Button, IconButton, Rating } from "@mui/material";
import PaidIcon from '@mui/icons-material/Paid';
import PaymentIcon from '@mui/icons-material/Payment';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import LanguageIcon from '@mui/icons-material/Language';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import zIndex from "@mui/material/styles/zIndex";
import { useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Card1 from "./Card1";
import SimpleImageSlider from "react-simple-image-slider";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Card3 from "./Card3";
import Slider from "react-slick";
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
const Card5 = (props) => {
    const [value , setValue] = useState(0)
    const [like , setLike] = useState(0)
    const { t, i18n } = useTranslation()
    const { title, description, onClick, img1, Icon, color, id } = props
    const navigate = useNavigate()
    const settingsCard = {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    const TrophyImg = styled('img')({
        width: '100%',
        height: '250px',
        transition: "0.25s",
    })
    const [imageNum, setImageNum] = useState(1);
    const images = [
        { url: "images/mainImgs/SliderImgs/download1.png" },
        { url: "images/mainImgs/SliderImgs/download2.png" },
        { url: "images/mainImgs/SliderImgs/download3.jpg" },
        { url: "images/mainImgs/SliderImgs/download4.png" },
    ];
    return (
        <Box sx={{
            boxSizing: "border-box", minHeight: "500px", maxHeight: "800px", minWidth: "300px", boxShadow: '0px 0px 5px #00000030 !important'
            , borderRadius: "10px", bgcolor: "white", display: "flex", overflow: "hidden"
        }}>
            <Box sx={{ display: "flex", width: "25%", justifyContent: "space-between", flexDirection: "column", pt: 1 }}>
                <Box sx={{ display: "flex", gap: 5 }}>
                    <Box>
                        <a href="//www.google.com" target="_blank">
                            <img
                                src="images/srcImgs/Card2Imgs/download1.png"
                                alt="HTML tutorial"
                                style={{ width: "75px", minWidth: "50px", height: "100%" }}
                            />
                        </a>
                    </Box>
                    <Box sx={{ cursor: "pointer" }} >
                        <Typography sx={{ fontSize: "1.1rem", fontWeight: "600", ml: 2 }}>Kingson Clothing Factory</Typography>
                        <Typography sx={{ textDecoration: "underline", fontSize: "0.9rem", fontWeight: "600", ml: 2, mt: 1 }}>{t("verfiedin")} 2021/04/04</Typography>
                    </Box>
                </Box>
                <Typography sx={{ fontSize: "1.2rem", p: 2 }}>+20k {t("reviews")}</Typography>
                <Box sx={{ display: "flex", flexDirection: "column", p: 2, gap: "2px", width: "100%" }}>
                    <Typography sx={{ fontSize: "1.2rem", mt: 2 }}>{t("factorycapabilities")}</Typography>
                    <ul>
                        <li><Typography sx={{ fontSize: "1.2rem", fontWeight: "600" }}>{t("businessprocurement")}</Typography></li>
                        <li><Typography sx={{ fontSize: "1.2rem", fontWeight: "600" }}>{t("qualityassurance")}</Typography></li>
                        <li><Typography sx={{ fontSize: "1.2rem", fontWeight: "600" }}>{t("consolidationservice")}</Typography></li>
                    </ul>
                </Box>
            </Box>
            <Box sx={{ display: "flex", width: "35%", flexDirection: "column" ,justifyContent:"space-around"}}>
                <Box sx={{display:"flex",justifyContent:"space-between"}}>
                    <Button size="large" onClick={() => { navigate(`/sellers/${id}`) }} sx={{
                        backgroundColor: "orange", fontSize: "1.2rem"
                        , borderRadius: "10px", height: "50px",mr:2,ml:2, width: "150px", mb: "auto", mt: 2, "&:hover": { backgroundColor: "orange" }
                    }}>{t("viewmore")}</Button>
                    <Typography sx={{fontSize:"1.2rem",mt:2,mr:2,ml:2}}>تهران/اسلامشهر</Typography>
                </Box>
                <Slider {...settingsCard} rows={1} centerMode={true} >
                    <Card3 id={11} img1="/images/srcImgs/Card3Imgs/download1.png" />
                    <Card3 id={12} img1="/images/srcImgs/Card3Imgs/download2.png" />
                    <Card3 id={13} img1="/images/srcImgs/Card3Imgs/download3.png" />
                    <Card3 id={11} img1="/images/srcImgs/Card3Imgs/download4.png" />
                    <Card3 id={12} img1="/images/srcImgs/Card3Imgs/download5.png" />
                    <Card3 id={11} img1="/images/srcImgs/Card3Imgs/download1.png" />
                    <Card3 id={12} img1="/images/srcImgs/Card3Imgs/download2.png" />
                    <Card3 id={13} img1="/images/srcImgs/Card3Imgs/download3.png" />
                    <Card3 id={11} img1="/images/srcImgs/Card3Imgs/download4.png" />
                    <Card3 id={12} img1="/images/srcImgs/Card3Imgs/download5.png" />
                    <Card3 id={11} img1="/images/srcImgs/Card3Imgs/download1.png" />
                    <Card3 id={12} img1="/images/srcImgs/Card3Imgs/download2.png" />
                    <Card3 id={13} img1="/images/srcImgs/Card3Imgs/download3.png" />
                    <Card3 id={11} img1="/images/srcImgs/Card3Imgs/download4.png" />
                    <Card3 id={12} img1="/images/srcImgs/Card3Imgs/download5.png" />
                </Slider>
            </Box>
            <Box sx={{ display: "flex", width: "40%", justifyContent: "space-between", flexDirection: "column" }}>
                <Box sx={{ display: "flex",mt:2 ,justifyContent:"right",gap:3}}>
                    {like == 1 && <IconButton onClick={(event)=>{setLike(0)}}>
                        <FavoriteIcon  sx={{ color: "darkred", fontSize: "2.2rem", mb: "auto", mt: "auto" }} />
                    </IconButton>}
                    {like == 0 && <IconButton onClick={(event)=>{setLike(1)}}>
                        <FavoriteBorderIcon  sx={{ color: "darkred", fontSize: "2.2rem", mb: "auto", mt: "auto" }} />
                    </IconButton>}
                    <Rating value={value}  sx={{  mb: "auto", mt: "auto" }} onChange={(event, newValue) => {setValue(newValue)}}/>
                    <Button variant="outlined" sx={{ color: "black", fontSize: "1rem", mr: 2, mb: "auto", mt: "auto", border: "1px solid black", borderRadius: "50px" }}>{t("contactus")}</Button>
                </Box>
                <Box sx={{ width: "100%", transform: "translateY(0px)", ml: 2,height:"82.5%" }}>
                    <SimpleImageSlider
                        width="95%"
                        height="95%"
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
                    />
                </Box>
                {/* woooooow if you remove translatey the slider will disappear XDDDDDDDDDD */}

            </Box>
        </Box>
    )
}
export default Card5