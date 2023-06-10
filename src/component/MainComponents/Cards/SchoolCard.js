import styled from "@emotion/styled";
import { Card, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const SchoolCard = (props) => {
    const {t,i18n} = useTranslation()
    const { id,role,school,name,grade } = props
    const navigate = useNavigate()
    const TrophyImg = styled('img')({
        width: '100%',
        height: '200px',
    })

    return (
        <Box sx={{ width: "22%",minWidth:"225px",height:"100%",overflow:"hidden", borderRadius: "10px", bgcolor: "white",display:"flex",flexDirection:"column"
        ,boxShadow: '0px 0px 5px burlywood !important',"&:hover":{boxShadow: '0px 0px 15px burlywood !important',borderTop:"5px solid burlywood"}
        ,transition:"0.15s",cursor:"pointer"}} onClick={()=>navigate(`buffet/parents/${id}`)}>
                <TrophyImg src="/images/icons/school.jpg" />
            <Box sx={{p:1,display:"flex",flexDirection:"column",gap:1,justifyContent:"center"}}>
                <Typography sx={{textAlign:"center", fontWeight: "800", fontSize: "1.2rem", color: "black" }}>دسترسی کاربر : {role}</Typography>
                <Typography sx={{ fontSize: "1.1rem",textAlign:"right", color: "black" }}>{name}</Typography>
                <Typography sx={{ fontSize: "1rem", fontWeight: "800",textAlign:"right" }}>{school}</Typography>
                <Typography sx={{ fontSize: "1rem",textAlign:"right" }}>{grade}</Typography>
            </Box>
        </Box>
    )
}
export default SchoolCard