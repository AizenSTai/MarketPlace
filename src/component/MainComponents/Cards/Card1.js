import styled from "@emotion/styled";
import { Card, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Card1Style.css"
import { Style } from "@mui/icons-material";
const Card1 = (props) => {
    const { t, i18n } = useTranslation()
    const { title, description, onClick, img1, img2, img3, Bools, id } = props
    const TrophyImg = styled('img')({
        width: '100%',
        height: '120px',
        opacity: "95%",
    })
    const navigate = useNavigate()
    return (
        <Box id="card-one-container"
            onClick={() => { navigate(`/products/${id}`) }}>
            <Box id="card-one-general-container">
                <Box id="card-one-sub-container">
                    <Box id="card-one-image-container">
                        <TrophyImg id="card-one-image" src="images/srcImgs/Card1Imgs/download1.png" />
                    </Box>
                    <Box>
                        <Typography id="card-one-big-text">{t("currency")} 0.06</Typography>
                        <Typography id="card-one-small-text">50 {t("pieces")}</Typography>
                    </Box>
                </Box>
                <Box id="card-one-sub-container">
                    <Box id="card-one-image-container">
                        <TrophyImg id="card-one-image" src="images/srcImgs/Card1Imgs/download2.png" />
                    </Box>
                    <Box>
                        <Typography id="card-one-big-text">{t("currency")} 0.06</Typography>
                        <Typography id="card-one-small-text">50 {t("pieces")}</Typography>
                    </Box>
                </Box>
                <Box id="card-one-sub-container">
                    <Box id="card-one-image-container">
                        <TrophyImg id="card-one-image" src="images/srcImgs/Card1Imgs/download3.png" />
                    </Box>
                    <Box>
                        <Typography id="card-one-big-text">{t("currency")} 0.06</Typography>
                        <Typography id="card-one-small-text">50 {t("pieces")}</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )


}
export default Card1