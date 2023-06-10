import styled from "@emotion/styled";
import { Card, Box, Typography, Button } from "@mui/material";
import PaidIcon from '@mui/icons-material/Paid';
import PaymentIcon from '@mui/icons-material/Payment';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import LanguageIcon from '@mui/icons-material/Language';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import zIndex from "@mui/material/styles/zIndex";
import { useState } from "react";

const Card4 = (props) => {

    const { title, description, onClick, img1, Icon, color } = props

    const TrophyImg = styled('img')({
        width: '100%',
        height: '180px',
        transition: "0.25s",

    })
    return (
        <Box sx={{ width: "24%",minWidth:"270px",position: "relative", height: "250px", borderRadius: "10px", mb: 4, bgcolor: "white", display: "flex", flexDirection: "column", overflow: "hidden","&:hover":{boxShadow: '0px 0px 20px #00000030 !important'},transition:"0.5s",cursor:"pointer" }}>
            <Box sx={{ cursor: "pointer", borderRadius: "10px", height: "180px", position: "relative" }}>
                <TrophyImg style={{ zIndex: "1", position: "absolute" }} src={img1} />
                <Box sx={{position:"absolute",zIndex:"1",transition:"0.5s"}}><Typography sx={{color:"darkgray",p:3,fontSize:"1.2rem",mt:5}}>Trade Assurance is a free order protection service offered by Microsis.com</Typography></Box>
                <Box sx={{ position: "absolute", backgroundColor: "rgba(0,0,0,0.7)", width: "100%", height: "180px", transition: "0.5s", zIndex: "1", opacity: "0%", "&:hover": {opacity:"100%" } }}>
                    <Box sx={{boxSizing:"border-box",p:2,pb:0,pt:1, display: "flex", flexDirection: "column",justifyContent:'space-between' }}>
                        <Box >
                            <Typography sx={{ color: "whitesmoke", fontSize: "1.1rem" }}>
                                Benefits
                            </Typography>
                            <ul style={{ color: "white", fontSize: "1rem" }}>
                                <li>On-time shipping</li>
                                <li>Quality protection</li>
                            </ul>
                        </Box>
                        <Box sx={{}}>
                            <Typography sx={{ color: "white", fontSize: "1rem" }}>
                                Learn more →
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ boxSizing:"border-box",p: 2, display: "flex",height:"70px", justifyContent: "space-between" }}>
                <Box >
                    <Typography sx={{ fontSize: "1rem", fontWeight: "800" }}>Trade Assurance</Typography>
                    <Typography sx={{ fontSize: "0.9rem", color: "grey" }}>ORDER PROTECTION</Typography>
                </Box>
                <Box >
                    <Icon sx={{ fontSize: "2.4rem", color: color }} />
                </Box>
            </Box>
        </Box>
    )
}
export default Card4