import styled from "@emotion/styled";
import { Card, Box, Typography, Button, IconButton, Divider } from "@mui/material";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Card3Style.css"
import Slider from "react-slick";
import { ArrowBackIos } from "@mui/icons-material";
import { ArrowForwardIos } from "@mui/icons-material";
import { Directions } from "mdi-material-ui";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from "react";
import SendIcon from '@mui/icons-material/Send';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        // <div
        //     className={className}
        //     style={{ ...style, display: "block", right: "0", zIndex: "999", background: "grey" }}
        //     onClick={onClick}
        // />
        <IconButton onClick={onClick} sx={{ position: "absolute", top: "43%", right: 0, ":hover": { backgroundColor: "transparent" } }}>
            <ArrowForwardIos style={{ display: "block", fontSize: "1.5rem", zIndex: "999" }} />
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
        <IconButton onClick={onClick} sx={{ position: "absolute", top: "43%", left: 0, ":hover": { backgroundColor: "transparent" } }}>
            <ArrowBackIos style={{ m: "auto auto", display: "block", fontSize: "1.5rem", zIndex: "999" }} />
        </IconButton>
    );
}
const Card3 = (props) => {
    const { t, i18n } = useTranslation()
    const [like, setLike] = useState(0)
    const { title, description, onClick, img1, id } = props
    const navigate = useNavigate()
    const params = useParams()
    const [searchParams, setSearchParams] = useSearchParams();
    searchParams.get("__firebase_request_key")
    // console.log(searchParams)
    const TrophyImg = styled('img')({
    })
    const settings = {
        infinite: true,
        autoplay: true,
        speed:1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    const images = [
        { url: "images/srcImgs/Card3Imgs/download1.png" },
        { url: "images/srcImgs/Card3Imgs/download2.png" },
        { url: "images/srcImgs/Card3Imgs/download3.png" },
        { url: "images/srcImgs/Card3Imgs/download4.png" },
        { url: "images/srcImgs/Card3Imgs/download5.png" },
    ];
    const SendFunction = ()=>{
        navigator.clipboard.writeText(`https://somewhere/${id}`)
    }
    return (
        <Box id="card-three-container" sx={{ "&:hover": { boxShadow: '0px 0px 20px #00000030 !important' } }}
            /*onClick={() => { navigate(`/products/${id}`) }}*/>
            <Box sx={{ minHeight: "45px", display: "flex" }}>
                <Box sx={{ width: "80%", display: "flex", justifyContent: "space-between" }}>
                    <Button sx={{ color: "white", bgcolor: "orange", height: "60%", m: "auto 0", mr: 1, ml: 1,fontSize:"0.8rem",":hover":{bgcolor:"orange"} }} onClick={()=>{navigate(`/sellers/${id}`)}}>مشاهده</Button>
                    <Typography sx={{ m: "auto 0", fontSize: "0.9rem" }}>ایران گستران نوین</Typography>
                </Box>
                <Box sx={{ width: "20%", minHeight: "45px", display: "flex" }}>
                    <Box sx={{
                        height: "35px", width: "35px", backgroundRepeat: "no-repeat", backgroundSize: "cover"
                        , backgroundPosition: "center", backgroundImage: "url(/images/logos/card-three-logo.png)", borderRadius: "50px", m: "auto auto", overflow: "hidden"
                    }} />
                </Box>
            </Box>
            {/* <Divider/> */}
            <Box id="card-three-image-container">
                {/* <TrophyImg id="card-three-image" src={img1} /> */}
                <Slider autoplaySpeed={8000} {...settings}>
                    {images.map((itm, index) => {
                        return (
                            <Box id="card-three-slider" sx={{
                                backgroundImage: `url(/${itm.url})`
                            }} />
                        )
                    })}
                </Slider>
            </Box>
            <Box sx={{display:"flex",justifyContent:"space-between"}}>
                <Box sx={{display:"flex",gap:1}}>
                    {like == 1 && <IconButton onClick={(event) => { setLike(0) }}>
                        <FavoriteIcon sx={{ color: "darkred", fontSize: "1.5rem", mb: "auto", mt: "auto" }} />
                    </IconButton>}
                    {like == 0 && <IconButton onClick={(event) => { setLike(1) }}>
                        <FavoriteBorderIcon sx={{ color: "darkred", fontSize: "1.5rem", mb: "auto", mt: "auto" }} />
                    </IconButton>}
                    <IconButton onClick={(itm)=>{SendFunction(itm)}}>
                        <SendIcon sx={{ color: "#008BCE", fontSize: "1.5rem", mb: "auto", mt: "auto" }} />
                    </IconButton>
                </Box>
                <Button sx={{ fontSize:"0.8rem",color: "white", bgcolor: "orange", height: "70%", m: "auto 0", mr: 1, ml: 1,":hover":{bgcolor:"orange"} }} onClick={() => { navigate(`/products/${id}`)}}>مشاهده محصول</Button>
            </Box>
            <Box id="card-three-text-container">
                <Typography id="card-three-small-text">HL manufacturer wholesale drop shoulder vintage blank...</Typography>
                <Typography id="card-three-big-text">{t("currency")} 6 - {t("currency")} 8</Typography>
                <Typography id="card-three-small-text">MOQ: 3 {t("sets")}</Typography>
            </Box>
        </Box>
    )
}
export default Card3