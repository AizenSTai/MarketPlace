import styled from "@emotion/styled";
import { Card, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Card3Style.css"
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
        <Box id="card-three-container" sx={{ "&:hover":{boxShadow: '0px 0px 20px #00000030 !important'} }} 
        onClick={()=>{navigate(`/products/${id}`)}}>
            <Box id="card-three-image-container">
                <TrophyImg id="card-three-image" src={img1} />
            </Box>
            <Box id="card-three-text-container">
                <Typography id="card-three-small-text">HL manufacturer wholesale drop shoulder vintage blank...</Typography>
                <Typography id="card-three-big-text">{t("currency")} 6 - {t("currency")} 8</Typography>
                <Typography id="card-three-small-text">MOQ: 3 {t("sets")}</Typography>
            </Box>
        </Box>
    )
}
export default Card3