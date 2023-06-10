import styled from "@emotion/styled";
import { Card, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
const GoodsItems = (props) => {
    const { t, i18n } = useTranslation()
    const { name,count } = props
    const [isAvailable,setIsAvailable] = useState(true)
    const navigate = useNavigate()
    const TrophyImg = styled('img')({
        width: '100%',
        height: '200px',
    })

    return (
        <Box sx={{ display: "flex", justifyContent: "right", mt: 2,height:"30px" }}>
            {isAvailable && <Button  onClick={()=>{setIsAvailable(false)}} sx={{ bgcolor: "darkgreen", mr: 2, ml: 2, color: "white", height: "30px", mt: "auto", mb: "auto", ":hover": { bgcolor: "green" } }}>خرید</Button>}
            <Typography sx={{ fontSize: "1.2rem", mt: "auto", mb: "auto", textAlign: "right", mt: "auto", mb: "auto", width: "20px" }}>{count}</Typography>
            <Typography sx={{ fontSize: "1.2rem", mt: "auto", mb: "auto", textAlign: "right", mt: "auto", mb: "auto", width: "130px" }}>{name}</Typography>
        </Box>
    )
}
export default GoodsItems