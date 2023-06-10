// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import { Box } from 'mdi-material-ui';

// export default function Dropdown(props) {
//   const {title,id} = props
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div style={{border:"1px solid red"}}>
//       <Button
//         id="demo-positioned-button"
//         aria-controls={open ? 'demo-positioned-menu' : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? 'true' : undefined}
//         onClick={handleClick}
//         sx={{color:"black",fontSize:"1.4rem"}}
//       >
//         {title}
//       </Button>
//       <Menu
//         id="demo-positioned-menu"
//         aria-labelledby="demo-positioned-button"
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         anchorOrigin={{
//           vertical: 'top',
//           horizontal: 'left',
//         }}
//         transformOrigin={{
//           vertical: 'top',
//           horizontal: 'left',
//         }}
//       >
//         <MenuItem onClick={handleClose}>Profile</MenuItem>
//         <MenuItem onClick={handleClose}>My account</MenuItem>
//         <MenuItem onClick={handleClose}>Logout</MenuItem>
//       </Menu>
//     </div>
//   );
// }
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { Box, Typography, useTheme } from '@mui/material';
import { ColorModeContext, tokens } from '../../../theme';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
export default function MenuPopupState(props) {
  const { title, icon, icon2, type,left,border } = props
  const {t,i18n}= useTranslation()
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)
  return (
    <PopupState>
      {(popupState) => (
        <React.Fragment>
          <Box
            id="demo-positioned-button"
            aria-haspopup="true"
            sx={{ color: "black", cursor: "pointer", display: "flex", mt: "auto",boxSizing:"border-box",pr:2,pl:2, mb: "auto",borderLeft:`${border}px solid #ddd` }}
            {...bindTrigger(popupState)}
          >
            {left && icon}            
            {icon2 ? icon2 : <Typography sx={{ fontSize: "1rem" }}>{title}</Typography>}
            {!left && icon}
          </Box>
          {type === "lang" &&
            <Menu {...bindMenu(popupState)}>
              <MenuItem onClick={()=>{i18n.changeLanguage("fa")
            popupState.close()
            colorMode.toggleColorMode()
            }}>
            <img
            src="/images/icons/icons8-iran-48.png"
            alt="HTML tutorial"
            style={{ width: "40px", minWidth: "40px", minHeight: "40px", height: "40px" }}

        />فارسی</MenuItem>
              <MenuItem onClick={()=>{i18n.changeLanguage("en")
            popupState.close()
            colorMode.toggleColorMode()
            }}><img
            src="/images/icons/icons8-usa-48.png"
            alt="HTML tutorial"
            style={{ width: "40px", minWidth: "40px", minHeight: "40px", height: "40px" }}

        />English</MenuItem>
            </Menu>
          }
          {type !== "lang" &&
            <Menu sx={{width:"100vw",height:"200px"}} {...bindMenu(popupState)}>
              <MenuItem sx={{width:"100vw"}} onClick={()=>{popupState.close()}}>Cat1</MenuItem>
              <MenuItem sx={{width:"100vw"}} onClick={()=>{popupState.close()}}>Cat2</MenuItem>
              <MenuItem sx={{width:"100vw"}} onClick={()=>{popupState.close()}}>Cat3</MenuItem>
              <MenuItem sx={{width:"100vw"}} onClick={()=>{popupState.close()}}>Cat4</MenuItem>
            </Menu>
          }
        </React.Fragment>
      )}
    </PopupState>
  );
}