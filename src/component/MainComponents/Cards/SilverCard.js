import styled from "@emotion/styled";
import { Card, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const SilverCard = (props) => {
    const {t,i18n} = useTranslation()
    const { title, description, onClick, img1,id } = props
    const navigate = useNavigate()
    const TrophyImg = styled('img')({
        width: '100%',
        height: '100%',
        borderRadius:"10px"
    })

    return (
        <Box sx={{ width: "100%",minWidth:"225px",height:"100%",overflow:"hidden", borderRadius: "10px", bgcolor: "white",display:"flex",flexDirection:"column"
        ,boxShadow: '0px 0px 5px silver !important',position:"relative","&:hover":{boxShadow: '0px 0px 20px silver !important'},transition:"0.5s",cursor:"pointer"}}>
                <TrophyImg src={img1} />
                <Typography sx={{textAlign:"center", fontWeight: "800",position:"absolute",top:"72%",width:"100%", fontSize: "1.2rem", color: "black" }}>شرکت مدیران اعتماد</Typography>
        </Box>
    )
}
export default SilverCard