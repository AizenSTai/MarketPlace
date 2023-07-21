import styled from "@emotion/styled";
import { Card, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Card1Style.css"
const Card1 = (props) => {
    const {t,i18n} = useTranslation()
    const { title, description, onClick, img1, img2, img3,Bools,id } = props
    const TrophyImg = styled('img')({
        width: '100%',
        height: '120px',
        opacity: "95%",
    })
    const navigate = useNavigate()
    return (
        <Box id="container" sx={{minWidth:"400px"}}
         onClick={()=>{navigate(`/products/${id}`)}}>
            <Box sx={{ boxSizing:"border-box",p: 2,"@media (max-width:900px)":{p:0.5} }}>
                {/* {!Bools && <Typography sx={{ fontSize: "1rem", fontWeight: "800" }}>{t("newarrivals")}</Typography>} */}
                <Box sx={{ display: "flex", mt: 1, justifyContent: "space-between", position: "relative" }}>
                    
                    <Box sx={{width: "32%",transition:"0.5s", height: "100px","&:hover":{transform: "scale(1.01)"}}}>
                        <Box id="Trophyimg" sx={{ backgroundColor: "rgba(0,0,0,0.4)", cursor: "pointer", borderRadius: "10px",height:"120px",mb:0.5 }}>
                            <TrophyImg id="Trophyimg" src="images/srcImgs/Card1Imgs/download1.png" />
                        </Box>
                        <Box>
                            <Typography id="BigText" >{t("currency")} 0.06</Typography>
                            <Typography id="SmallText" sx={{textAlign:"center",fontSize:"0.8rem",color:"grey"}}>50 {t("pieces")}</Typography>
                        </Box>
                    </Box>
                    <Box sx={{width: "32%", height: "100px",transition:"0.5s","&:hover":{transform: "scale(1.01)"}}}>
                        <Box id="Trophyimg" sx={{ backgroundColor: "rgba(0,0,0,0.4)", cursor: "pointer", borderRadius: "10px",height:"120px",mb:0.5 }}>
                            <TrophyImg id="Trophyimg" src="images/srcImgs/Card1Imgs/download2.png" />
                        </Box>
                        <Box>
                            <Typography id="BigText" >{t("currency")} 0.06</Typography>
                            <Typography id="SmallText" sx={{textAlign:"center",fontSize:"0.8rem",color:"grey"}}>50 {t("pieces")}</Typography>
                        </Box>
                    </Box>
                    <Box sx={{width: "32%", height: "100px",transition:"0.5s","&:hover":{transform: "scale(1.01)"}}}>
                        <Box id="Trophyimg" sx={{ backgroundColor: "rgba(0,0,0,0.4)", cursor: "pointer", borderRadius: "10px",height:"120px",mb:0.5 }}>
                            <TrophyImg id="Trophyimg" src="images/srcImgs/Card1Imgs/download3.png" />
                        </Box>
                        <Box>
                            <Typography id="BigText" >{t("currency")} 0.06</Typography>
                            <Typography id="SmallText" sx={{textAlign:"center",fontSize:"0.8rem",color:"grey"}}>50 {t("pieces")}</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )


}
export default Card1