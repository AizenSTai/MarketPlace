import styled from "@emotion/styled";
import { Card, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const GoldenCard = (props) => {
    const {t,i18n} = useTranslation()
    const { title, description, onClick, img1,id } = props
    const navigate = useNavigate()
    const TrophyImg = styled('img')({
        width: '100%',
        height: '200px',
    })

    return (
        <Box sx={{ width: "100%",minWidth:"225px",height:"100%",border:"2px solid goldenrod",overflow:"hidden", borderRadius: "10px", mb: 4, bgcolor: "white",display:"flex",flexDirection:"column"
        ,boxShadow: '0px 0px 5px gold !important',"&:hover":{boxShadow: '0px 0px 20px gold !important'},transition:"0.5s",cursor:"pointer"}}>
                <TrophyImg src={img1} />
            <Box sx={{p:1,display:"flex",flexDirection:"column",gap:1,justifyContent:"center"}}>
                <Typography sx={{textAlign:"center", fontWeight: "800", fontSize: "1.5rem", color: "black" }}>شرکت به پرداخت معتمد</Typography>
                <Typography sx={{ fontSize: "1.1rem",textAlign:"right", color: "black" }}>تمامی تجهیزات جانبی رایانه خود را از ما بخواهید</Typography>
                <Typography sx={{ fontSize: "1rem", fontWeight: "800",textAlign:"right" }}>جلب رضایت شما وظیفه ماست</Typography>
                <Typography sx={{ fontSize: "1rem",textAlign:"right" }}>some other bullshits</Typography>
            </Box>
        </Box>
    )
}
export default GoldenCard