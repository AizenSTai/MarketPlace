import styled from "@emotion/styled";
import { Card, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const CooperCard = (props) => {
    const {t,i18n} = useTranslation()
    const { title, description, onClick, img1,id } = props
    const navigate = useNavigate()
    const TrophyImg = styled('img')({
        width: '100%',
    })
    return (
        <Box sx={{ width: "99%",height:"32%",overflow:"hidden", borderRadius: "25px", bgcolor: "white",display:"flex",flexDirection:"column"
        ,boxShadow: '0px 0px 2px darkgoldenrod !important',position:"relative","&:hover":{boxShadow: '0px 0px 5px darkgoldenrod !important'},transition:"0.5s",cursor:"pointer"}}>
                <TrophyImg src={img1} />
                <Typography sx={{textAlign:"center", fontWeight: "800",width:"100%",mt:"auto",mb:"auto", fontSize: "1rem", color: "black" }}>شرکت ایمن سیستم شنوا</Typography>
        </Box>
    )
}
export default CooperCard