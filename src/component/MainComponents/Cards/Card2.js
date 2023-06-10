import styled from "@emotion/styled";
import { Card, Box, Typography,Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Card2 = (props) => {
    const {t,i18n} = useTranslation()
    const { title, description, onClick, img1, img2, img3,id } = props

    const TrophyImg = styled('img')({
        width: '100%',
        height: '100px',
        opacity: "100%",
    })
    const navigate = useNavigate()
    return (
        <Box sx={{ minWidth:"275px",maxWidth:"450px",width:"32%", height: "200px" ,borderRadius:"10px",mb:4,bgcolor:"white",cursor:"pointer"}}
         onClick={()=>{navigate(`/products/${id}`)}}>
            <Box sx={{ p: 2 }}>
                <Box sx={{ display: "flex", mt: 1, justifyContent: "space-between", position: "relative",height:"200px" }}>
                    <Box sx={{transition:"0.5s",width: "40%", height: "150px","&:hover":{transform: "scale(1.01)"}}}>
                        <Box sx={{cursor: "pointer", borderRadius: "10px",height:"100px",mb:2 }}>
                            <TrophyImg src="/images/srcImgs/Card2Imgs/download1.png" />
                        </Box>
                        <Box sx={{display:"flex"}}>
                            <Button  size="large" sx={{backgroundColor:"orange",fontSize:"1rem",margin:"0 auto"
                            ,borderRadius:"25px",minWidth:"120px",height:"40px","&:hover": { backgroundColor: "orange" }}}>{t("viewmore")}</Button>
                        </Box>
                    </Box>
                    <Box sx={{width: "40%", transition:"0.5s",height: "150px","&:hover":{transform: "scale(1.01)"}}}>
                        <Box sx={{ backgroundColor: "rgba(0,0,0,0.4)", cursor: "pointer", borderRadius: "10px",height:"100px",mb:2 }}>
                            <TrophyImg src="/images/srcImgs/Card2Imgs/download2.png" />
                        </Box>
                        <Box>
                            <Typography sx={{textAlign:"center",fontSize:"1.2rem",fontWeight:"800"}}>{t("currency")} 0.06</Typography>
                            <Typography sx={{textAlign:"center",fontSize:"1.1rem",color:"grey"}}>50 {t("pieces")}</Typography>
                        </Box>
                    </Box>                    
                </Box>
            </Box>
        </Box>
    )

    
}
export default Card2