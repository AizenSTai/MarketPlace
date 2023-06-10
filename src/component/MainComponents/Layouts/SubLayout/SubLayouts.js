import React from "react"

import { Routes, Route, useNavigate } from "react-router-dom"

import { Box,Typography } from "@mui/material"


const SubLayouts = () => {
    return (
        <Box sx={{ backgroundColor: "#F0F0F0", height: "100vh", overflowY: "auto", overflowX: "hidden", maxWidth: "100vw" }}>
            {/* <Box sx={{display:"flex",justifyContent:"center",gap:15,m:2}}>
      <Button sx={{background:"orange",fontSize:"1.2rem",width:"125px",height:"50px",mt:"auto",mb:"auto"}} onClick={()=>{i18n.changeLanguage("fa")}}>فارسی</Button>
      <Typography sx={{fontSize:"1.5rem",textAlign:"center",border:"1px solid #ddd",p:2,borderRadius:"25px"}}>{t('name')}</Typography>
      <Button sx={{background:"orange",fontSize:"1.2rem",width:"125px",height:"50px",mt:"auto",mb:"auto"}} onClick={()=>{i18n.changeLanguage("en")}}>English</Button>
    </Box> */}
            <Routes>

            </Routes>            
        </Box>
    )
}
export default SubLayouts