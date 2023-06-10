import React from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import { Box,Typography } from "@mui/material"
import Error from "../../Components/Pages/Error/Error"
// import SubLayouts from "./SubLayout/SubLayouts"
import MRoutes from "../../../configs/Routes"
const MainLayouts = () => {

    return (
        <Box sx={{ backgroundColor: "#F0F0F0", height: "100vh", overflowY: "auto", overflowX: "hidden", maxWidth: "100vw" }}>
            <MRoutes/>            
        </Box>
    )
}
export default MainLayouts