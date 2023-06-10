import { Box, Button, IconButton, Typography, TypoGraphy, useTheme } from "@mui/material";
import { tokens } from "../../../../theme";

const Staff = ({title,subTitle})=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return(<Box>{title}</Box>)
}
export default Staff