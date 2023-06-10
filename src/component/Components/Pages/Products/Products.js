import styled from "@emotion/styled"
import { Box, Button, Typography } from "@mui/material"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Topbar from "../../../MainComponents/Topbar/Topbar"
import { useTranslation } from "react-i18next"
const Products = (props) => {
    const {t,i18n} = useTranslation()
    const params = useParams()
    const navigate = useNavigate()
    const { name, title } = props
    const [itmColor, setItmColor] = useState("")
    const [mainImg, setMainImg] = useState("")
    const [infos, setInfos] = useState([{
        name: "", description: "", cost: "", colors: ["", "", "", ""]
        , manufacturer: "", id: params.id, images: ["", "", "", "", ""], seller: "", sellerId: "", rate: ""
    }])
    const TrophyImg = styled('img')({
        maxWidth: '100%',
        height: 'auto',
        opacity: "95%",
        width: "100%",
        borderRadius: "15px"
    })
    const images = ["images/srcImgs/Card1Imgs/download3.png", "images/srcImgs/Card1Imgs/download1.png", "images/srcImgs/Card1Imgs/download2.png", "images/srcImgs/Card1Imgs/download3.png"]
    useEffect(() => {
        switch (params.id) {
            case "11":
                setInfos([{
                    name: "pillow", description: "کمربند دور کمری مدل mx-190", cost: "3000000", colors: ["black", "brown", "white", "lavender"]
                    , manufacturer: "بالشت سازی اصفهان", id: params.id, images: ["images/srcImgs/Card1Imgs/download1.png", "img2", "img3", "img4", "img5"], seller: "ali", sellerId: "112281", rate: "عالی"
                }])
                console.log("true")
                break;
            case "12":
                setInfos([{
                    name: "pillow", description: "کمربند دور کمری مدل mx-320", cost: "5000000", colors: ["black", "brown", "white", "lavender"]
                    , manufacturer: "بالشت سازی تبریز", id: params.id, images: ["images/srcImgs/Card1Imgs/download2.png", "img2", "img3", "img4", "img5"], seller: "saleh", sellerId: "112283", rate: "بد"
                }])
                break;
            case "13":
                setInfos([{
                    name: "pillow", description: "کمربند دور کمری مدل mx-580", cost: "7000000", colors: ["black", "brown", "white", "lavender"]
                    , manufacturer: "بالشت سازی زرند", id: params.id, images: ["images/srcImgs/Card1Imgs/download3.png", "img2", "img3", "img4", "img5"], seller: "farzin", sellerId: "112282", rate: "خوب"
                }])
                break;
            default:
                navigate("/404")
                break;
        }
        setMainImg(images[0])
    }, [])
    const setPersianColor = (clr) => {
        switch (clr) {
            case "black": setItmColor("سیاه")
                break;
            case "brown": setItmColor("قهوه ای")
                break;
            case "white": setItmColor("سفید")
                break;
            case "lavender": setItmColor("لوندر")
        }
    }
    return (
        <Box sx={{ minHeight: "800px", display: "flex", flexWrap: "wrap", justifyContent: "space-around", bgcolor: "white" }} >
            <Topbar page="products" />
            <Box sx={{ width: "24%", height: "auto", boxShadow: '0px 0px 4px #00000001 !important', borderRadius: "10px", backgroundColor: "white", boxSizing: "border-box", p: 4 }}>
                <Box sx={{ border: "1px solid lightgrey", borderRadius: "15px", display: "flex", flexDirection: "column", backgroundColor: "#f8f8f8", boxSizing: "border-box", p: 1 }}>
                    <Box sx={{ display: "flex", width: "100%", boxSizing: "border-box", borderBottom: "1px solid #d0d0d0", p: 2, flexDirection: "row", justifyContent: "space-between" }}><Typography sx={{ cursor: "pointer", color: "#19BFDC", textDecoration: "underline", fontSize: "1.1rem" }}>{infos[0].seller}</Typography>
                        <Typography sx={{ fontSize: "1.2rem" }}>{t("seller")}</Typography></Box>
                    <Box sx={{ display: "flex", width: "100%", boxSizing: "border-box", borderBottom: "1px solid #d0d0d0", p: 2, flexDirection: "row", justifyContent: "space-between" }}><Typography sx={{ color: "green", fontSize: "1.2rem" }}>{infos[0].rate}</Typography>
                        <Typography sx={{ fontSize: "1.2rem" }}>{t("performance")}</Typography></Box>
                    <Box sx={{ display: "flex", width: "100%", height: "50%", boxSizing: "border-box", borderBottom: "1px solid #d0d0d0", p: 2, flexDirection: "row", justifyContent: "space-between" }}><Typography sx={{ color: "", textAlign: "right", direction: "rtl", fontSize: "1.2rem" }}>یک سری مشخصات نظیر گارانتی و موجود در انبار ...</Typography></Box>
                    <Box sx={{ display: "flex", width: "100%", boxSizing: "border-box", p: 2, flexDirection: "row", justifyContent: "space-between" }}>
                        <Typography sx={{ color: "green", letterSpacing: "5px", fontSize: "1.5rem" }}>{infos[0].cost}</Typography><Typography sx={{ fontSize: "1.2rem" }}>{t("currency")}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Button sx={{
                            width: "80%", backgroundColor: "orange",fontSize:"1.2rem",
                            color: "white",
                            borderTopRightRadius: "25px",
                            borderBottomRightRadius: "25px",
                            borderTopLeftRadius: "25px",
                            borderBottomLeftRadius: "25px",
                            "&:hover": { backgroundColor: "orange" },
                        }}>{t("addtocart")}</Button>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ width: "39%", minHeight: "700px", boxShadow: '0px 0px 4px #00000001 !important', borderRadius: "10px", backgroundColor: "white", boxSizing: "border-box", p: "10px" }}>
                <Box sx={{ height: "10%", p: "10px", display: "flex", justifyContent: "end", borderBottom: "1px solid #ddd" }}><Typography sx={{
                    fontSize: "1.5rem", fontWeight: "600"
                    , textAlign: "start", direction: "rtl"
                }}>{infos[0].description}</Typography></Box>
                <Box sx={{ height: "25%", p: "10px", display: "flex", borderBottom: "1px solid #ddd", flexDirection: "column" }}>
                    <Box sx={{ display: "block" }}><Typography sx={{
                        fontSize: "1.5rem", fontWeight: "600"
                        , textAlign: "start", direction: "rtl"
                    }}>{t("color")} {itmColor}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "right", gap: "25px", mt: 2, mb: 2, width: "50%", alignSelf: "flex-end" }}>

                        {infos[0].colors.map((itm, index) => {
                            return <Box sx={{ cursor: "pointer", outlineStyle: "double", outlineColor: "#ddd", outlineWidth: "8px", borderRadius: "50%", bgcolor: itm, minWidth: "40px", minHeight: "40px", }} onClick={() => { setPersianColor(itm) }} />
                        })}
                    </Box>
                    <Box sx={{ display: "block" }}><Typography sx={{
                        fontSize: "1.5rem", fontWeight: "600"
                        , textAlign: "start", direction: "rtl"
                    }}>{t("features")}</Typography>

                        <Typography sx={{
                            mt: 1,
                            fontSize: "1.2rem"
                            , textAlign: "start", direction: "rtl"
                        }}>{infos[0].description}</Typography>
                    </Box>
                </Box>
                <Box sx={{ height: "60%" }}><Typography sx={{
                    mt: 1,
                    fontSize: "1.2rem"
                    , textAlign: "start", direction: "rtl"
                }}>سایر مشخصات فنی ...</Typography></Box>
            </Box>
            <Box sx={{ width: "34%", minHeight: "700px", boxShadow: '0px 0px 4px #00000001 !important', borderRadius: "10px", backgroundColor: "white" }}>
                <Box sx={{
                    cursor: "crosshair", borderRadius: "10px", mb: 2, maxHeight: "80%", minHeight: "75%", width: "100%"
                    , backgroundImage: `url(/${mainImg})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center"
                }} />

                <Box sx={{ display: "flex", flexWrap: "wrap", height: "20%", justifyContent: "space-around", alignContent: "center", boxSizing: "border-box", p: 2 }}>
                    {images.map((itm, index) => {
                        return (
                            <Box sx={{
                                display: "flex", border: "1px solid #ddd", width: "20%", height: "75%", borderRadius: "15px", cursor: "pointer"
                                , backgroundImage: `url(/${itm})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center"
                            }} onClick={() => { setMainImg(itm) }} />
                        )
                    })}
                </Box>
            </Box>
            <Box sx={{ width: "100%", height: "600px", bgcolor: "#445268", display: "flex" }}>
                <Typography sx={{ color: "white", fontSize: "8rem", margin: "auto auto" }}>Some Stuff</Typography>
              </Box>
        </Box>
    )
}
export default Products