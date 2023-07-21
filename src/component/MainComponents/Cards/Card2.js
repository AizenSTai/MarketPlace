import styled from "@emotion/styled";
import { Card, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Card2Style.css"
const Card2 = (props) => {
    const { t, i18n } = useTranslation()
    const { title, description, onClick, img1, img2, img3, id } = props

    const TrophyImg = styled('img')({
        width: '100%',
        height: '100px',
    })
    const navigate = useNavigate()
    return (
        <Box id="card-two-container"
            onClick={() => { navigate(`/products/${id}`) }}>
            <Box id="card-two-general-container">
                <Box id="card-two-sub-container">
                    <Box id="card-two-image-container">
                        <TrophyImg id="card-two-image-container" src="/images/srcImgs/Card2Imgs/download1.png" />
                    </Box>
                    <Box >
                        <Button id="Button" size="large" >{t("viewmore")}</Button>
                    </Box>
                </Box>
                <Box id="card-two-sub-container">
                    <Box id="card-two-image-container">
                        <TrophyImg id="card-two-image-container" src="/images/srcImgs/Card2Imgs/download2.png" />
                    </Box>
                    <Box>
                        <Typography id="card-two-big-text">{t("currency")} 0.06</Typography>
                        <Typography id="card-two-small-text">50 {t("pieces")}</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )


}
export default Card2