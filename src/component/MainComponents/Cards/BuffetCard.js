import styled from "@emotion/styled";
import { Card, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const BuffetCard = (props) => {
    const {t,i18n} = useTranslation()
    const {id,role,school,name,shift } = props
    const navigate = useNavigate()
    const TrophyImg = styled('img')({
        width: '100%',
        height: '200px',
    })

    return (
        <Box sx={{ width: "22%",minWidth:"225px",height:"100%",overflow:"hidden", borderRadius: "10px", bgcolor: "white",display:"flex",flexDirection:"column"
        ,boxShadow: '0px 0px 5px darkgreen !important',"&:hover":{boxShadow: '0px 0px 10px darkgreen !important',borderTop:"5px solid darkgreen"}
        ,transition:"0.15s",cursor:"pointer"}} onClick={()=>navigate(`buffet/buffetman/${id}`)}>
                <TrophyImg src="/images/icons/market.jpg" />
            <Box sx={{p:1,display:"flex",flexDirection:"column",gap:1,justifyContent:"center"}}>
            <Typography sx={{textAlign:"center", fontWeight: "800", fontSize: "1.2rem", color: "black" }}>دسترسی کاربر : {role}</Typography>
                <Typography sx={{ fontSize: "1.1rem",textAlign:"right", color: "black" }}>{name}</Typography>
                <Typography sx={{ fontSize: "1rem", fontWeight: "800",textAlign:"right" }}>{school}</Typography>
                <Typography sx={{ fontSize: "1rem", fontWeight: "800",textAlign:"right" }}>{shift}</Typography>
            </Box>
        </Box>
    )
}
export default BuffetCard