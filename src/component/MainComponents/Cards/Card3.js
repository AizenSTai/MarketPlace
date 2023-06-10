import styled from "@emotion/styled";
import { Card, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Card3 = (props) => {
    const {t,i18n} = useTranslation()
    const { title, description, onClick, img1,id } = props
    const navigate = useNavigate()
    const TrophyImg = styled('img')({
        width: '100%',
        height: '200px',
        opacity: "95%",
    })

    return (
        <Box sx={{ width: "19%",maxWidth:"275px",minWidth:"225px",height:"375px",overflow:"hidden", borderRadius: "10px", mb: 4, bgcolor: "white",display:"flex",flexDirection:"column"
        ,"&:hover":{boxShadow: '0px 0px 20px #00000030 !important'},transition:"0.5s",cursor:"pointer" }} 
        onClick={()=>{navigate(`/products/${id}`)}}>
            <Box sx={{ cursor: "pointer", borderRadius: "10px", height: "200px", mb: 1 }}>
                <TrophyImg src={img1} />
            </Box>
            <Box sx={{p:2,display:"flex",flexDirection:"column",gap:1,justifyContent:"center"}}>
                <Typography sx={{ fontSize: "1rem", color: "grey" }}>HL manufacturer wholesale drop shoulder vintage blank...</Typography>
                <Typography sx={{ fontSize: "1.1rem", fontWeight: "800" }}>{t("currency")} 6 - {t("currency")} 8</Typography>
                <Typography sx={{ fontSize: "1rem", color: "grey" }}>MOQ: 3 {t("sets")}</Typography>
            </Box>
        </Box>
    )
}
export default Card3