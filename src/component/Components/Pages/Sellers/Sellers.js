import styled from "@emotion/styled"
import { IconButton, Box, Button, Divider, Typography } from "@mui/material"
import Slider from "react-slick"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Card2 from "../../../MainComponents/Cards/Card2"
import Card3 from "../../../MainComponents/Cards/Card3"
import Topbar from "../../../MainComponents/Topbar/Topbar"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { ArrowBackIos } from "@mui/icons-material";
import { ArrowForwardIos } from "@mui/icons-material";
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        // <div
        //     className={className}
        //     style={{ ...style, display: "block", right: "0", zIndex: "999", background: "grey" }}
        //     onClick={onClick}
        // />
        <IconButton onClick={onClick} sx={{ position: "absolute", top: "43%", right: 0, ":hover": { backgroundColor: "transparent" } }}>
            <ArrowForwardIos style={{ display: "block", fontSize: "2.5rem", zIndex: "999" }} />
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
            <ArrowBackIos style={{ m: "auto auto", display: "block", fontSize: "2.5rem", zIndex: "999" }} />
        </IconButton>
    );
}


const Sellers = (props) => {
    const { t, i18n } = useTranslation()
    const params = useParams()
    const navigate = useNavigate()
    const { name, title } = props
    const [itmColor, setItmColor] = useState("")
    const [mainImg, setMainImg] = useState("")
    const [infos, setInfos] = useState([{
        name: "", description: "", id: params.id, images: ["", "", "", "", ""], manager: "", managerId: "", rate: "", responseTime: "", reviews: "", logo: ""
    }])
    const TrophyImg = styled('img')({
        width: '75%',
        height: '75%',
        margin: "0 auto"
    })
    const SliderImages = [
        { url: "images/icons/lettering-lettering-about-company-sign.png" },
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
    const images = ["images/srcImgs/Card1Imgs/download3.png", "images/srcImgs/Card1Imgs/download1.png", "images/srcImgs/Card1Imgs/download2.png", "images/srcImgs/Card1Imgs/download3.png"]
    useEffect(() => {
        switch (params.id) {
            case "11":
                setInfos([{
                    name: "پردازش سازان", description: "پردازش سازان ایران زمین", id: params.id, images: ["images/srcImgs/Card1Imgs/download1.png", "img2", "img3", "img4", "img5"]
                    , manager: "ali", managerId: "112281", rate: "4.4", responseTime: "5", reviews: "65", logo: "images/srcImgs/Card1Imgs/download1.png"
                }])
                break;
            case "12":
                setInfos([{
                    name: "پردازش سازان", description: "پردازش سازان ایران گستر", id: params.id, images: ["images/srcImgs/Card1Imgs/download2.png", "img2", "img3", "img4", "img5"]
                    , manager: "mohammad", managerId: "112282", rate: "4.6", responseTime: "4", reviews: "55", logo: "images/srcImgs/Card1Imgs/download2.png"
                }])
                break;
            case "13":
                setInfos([{
                    name: "پردازش سازان", description: "پردازش سازان ایران ساز", id: params.id, images: ["images/srcImgs/Card1Imgs/download3.png", "img2", "img3", "img4", "img5"]
                    , manager: "sobhan", managerId: "112283", rate: "4.8", responseTime: "2", reviews: "35", logo: "images/srcImgs/Card1Imgs/download3.png"
                }])
                break;
            default:
                navigate("/404")
                break;
        }
        setMainImg(images[0])
    }, [])
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }} >
            <Topbar page="sellers" />
            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", bgcolor: "white" }}>
                <Box sx={{
                    width: "34%", height: "auto", boxShadow: '0px 0px 4px #00000001 !important', borderRadius: "10px"
                    , backgroundColor: "white", boxSizing: "border-box", p: 4, display: "flex", flexDirection: "column", gap: 2,justifyContent:"space-between"
                }}>
                    <Box sx={{
                        border: "1px solid lightgrey", borderRadius: "15px", display: "flex"
                        , flexDirection: "column", backgroundColor: "#f8f8f8", boxSizing: "border-box", p: 1,height:"50%"
                    }}>
                        <Box sx={{ display: "flex", width: "100%", boxSizing: "border-box", borderBottom: "1px solid #d0d0d0", p: 2, flexDirection: "row", justifyContent: "space-between" }}>
                            <Typography sx={{ color: "green", fontSize: "1.2rem" }}>{infos[0].rate} / 5 <Typography sx={{ fontSize: "0.9rem" }}>{infos[0].reviews} رای</Typography></Typography>
                            <Typography sx={{ fontSize: "1.2rem" }}>{t("performance")}</Typography>
                        </Box>
                        <Box sx={{
                            display: "flex", width: "100%", boxSizing: "border-box"
                            , p: 2, flexDirection: "row", justifyContent: "space-between"
                        }}>
                            <Typography sx={{ color: "green", fontSize: "1.1rem" }}>{infos[0].responseTime} ساعت</Typography>
                            <Typography sx={{ fontSize: "1.1rem" }}>{t("averageresponsetime")}</Typography>
                        </Box>
                        <Divider />
                        some informations
                    </Box>
                    <Box sx={{
                        border: "1px solid lightgrey", borderRadius: "15px", minHeight: "200px", display: "flex",height:"50%"
                        , flexDirection: "column", backgroundColor: "#f8f8f8", boxSizing: "border-box", p: 1
                    }}>

                        <Typography sx={{ fontSize: "1rem", textAlign: "end" }}>شرایط فروش</Typography>
                    </Box>
                </Box>
                <Box sx={{ width: "25%", boxShadow: '0px 0px 4px #00000001 !important', backgroundColor: "white",justifyContent:"space-between", boxSizing: "border-box", p: 4, display: "flex", flexDirection: "column", gap: 2 }}>
                    <Box sx={{ borderRadius: "15px", display: "flex", flexDirection: "column", backgroundColor: "#f8f8f8", boxSizing: "border-box", p: 1 }}>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                                <Typography sx={{ textAlign: "center", fontSize: "1.5rem" }}>{infos[0].description}</Typography>
                                <Typography sx={{ textAlign: "center", fontSize: "1rem",color:"gray" }}>شعار  های رندوم و ترکیبی</Typography>
                            <Box sx={{width:"50%",margin:"0 auto"}}>
                                <Typography sx={{ textAlign: "center", fontSize: "1.5rem",display:"flex",justifyContent:"left" }}><GitHubIcon sx={{fontSize:"2rem",mr:1,ml:1}}/><a style={{fontSize:"1rem",textDecoration:"none"}} href="https://github.com/AizenSTai" target="_blank">Github</a></Typography>
                                <Typography sx={{ textAlign: "center", fontSize: "1.5rem",display:"flex",justifyContent:"left" }}><GoogleIcon sx={{fontSize:"2rem",mr:1,ml:1}}/><a style={{fontSize:"1rem",textDecoration:"none"}} href="https://github.com/AizenSTai" target="_blank">Google</a></Typography>
                                <Typography sx={{ textAlign: "center", fontSize: "1.5rem",display:"flex",justifyContent:"left" }}><TelegramIcon sx={{fontSize:"2rem",color:"navy",mr:1,ml:1}}/><a style={{fontSize:"1rem",textDecoration:"none"}} href="https://github.com/AizenSTai" target="_blank">Telegram</a></Typography>
                                <Typography sx={{ textAlign: "center", fontSize: "1.5rem",display:"flex",justifyContent:"left" }}><InstagramIcon sx={{fontSize:"2rem", color:"darkred",mr:1,ml:1}}/><a style={{fontSize:"1rem",textDecoration:"none"}} href="https://github.com/AizenSTai" target="_blank">Instagram</a></Typography>
                                <Typography sx={{ textAlign: "center", fontSize: "1.5rem",display:"flex",justifyContent:"left" }}><PinterestIcon sx={{fontSize:"2rem",color:"red",mr:1,ml:1}}/><a style={{fontSize:"1rem",textDecoration:"none"}} href="https://github.com/AizenSTai" target="_blank">Pinterest</a></Typography>
                            </Box>
                            <Button sx={{
                                m: "0 auto", fontSize: "1.2rem", width: "70%", mt: 2,
                                backgroundColor: "orange",
                                color: "white",
                                borderTopRightRadius: "25px",
                                borderBottomRightRadius: "25px",
                                borderTopLeftRadius: "25px",
                                borderBottomLeftRadius: "25px",
                                "&:hover": { backgroundColor: "orange" },
                            }}>{t("contactus")}</Button>
                        </Box>
                    </Box>
                    <Box sx={{
                        borderRadius: "15px", minHeight: "200px", display: "flex"
                        , flexDirection: "column", backgroundColor: "#f8f8f8", boxSizing: "border-box", p: 1
                    }}>

                        <Typography sx={{ fontSize: "1rem", textAlign: "end" }}>شرایط ارسال</Typography>
                    </Box>
                </Box>
                <Box sx={{ width: "39%", boxShadow: '0px 0px 4px #00000001 !important', display: "flex", borderRadius: "10px", backgroundColor: "white" }}>
                    {/* <Box sx={{
                        cursor: "crosshair", borderRadius: "10px", mb: 2, maxHeight: "80%", minHeight: "75%", width: "100%"
                        , backgroundImage: `url(/${mainImg})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center"
                    }} />

                    <Box sx={{ display: "flex", flexWrap: "wrap", height: "20%", justifyContent: "space-around", alignContent: "center", boxSizing: "border-box", p: 2 }}>
                        {images.map((itm, index) => {
                            return (
                                <Box sx={{
                                    display: "flex", border: "1px solid #ddd", width: "75px", height: "75px", borderRadius: "15px", cursor: "pointer"
                                    , backgroundImage: `url(/${itm})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center"
                                }} onClick={() => { setMainImg(itm) }} />
                            )
                        })}
                    </Box> */}
                    <Box sx={{width: "100%", backgroundColor: "white", boxSizing: "border-box",mt:"10%",borderRadius:"15px",overflow:"hidden"}}>
                        <Slider {...settings}>
                            {SliderImages.map((itm, index) => {
                                return (
                                    <Box id="slider" sx={{backgroundRepeat: "no-repeat",backgroundSize: "cover",backgroundPosition: "center",borderRadius:"15px",overflow:"hidden",
                                        backgroundImage: `url(/${itm.url})`
                                    }} />
                                    )
                                })}
                        </Slider>
                    </Box>
                    {/* <TrophyImg src="/images/icons/lettering-lettering-about-company-sign.png"/> */}
                </Box>
            </Box>
            <Box sx={{}}>
                <Box sx={{}}>
                    <Typography sx={{ cursor: "pointer", width: "95%", margin: "0 auto", fontSize: "1.8rem", fontWeight: "600", mb: 5, textAlign: "right" }}>{t("products")}</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
                    <Card3 id={11} img1="/images/srcImgs/Card3Imgs/download1.png" />
                    <Card3 id={12} img1="/images/srcImgs/Card3Imgs/download2.png" />
                    <Card3 id={13} img1="/images/srcImgs/Card3Imgs/download3.png" />
                    <Card3 id={11} img1="/images/srcImgs/Card3Imgs/download4.png" />
                    <Card3 id={12} img1="/images/srcImgs/Card3Imgs/download5.png" />
                    <Card3 id={13} img1="/images/srcImgs/Card3Imgs/download6.png" />
                    <Card3 id={11} img1="/images/srcImgs/Card3Imgs/download1.png" />
                    <Card3 id={12} img1="/images/srcImgs/Card3Imgs/download2.png" />
                    <Card3 id={13} img1="/images/srcImgs/Card3Imgs/download3.png" />
                </Box>
            </Box>
            <Box sx={{ width: "100%", height: "600px", bgcolor: "#445268", display: "flex" }}>
                <Typography sx={{ color: "white", fontSize: "8rem", margin: "auto auto" }}>Some Stuff</Typography>
            </Box>
        </Box>
    )
}
export default Sellers