import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles"
import { orange } from "@mui/material/colors";
const { palette } = createTheme();
// color design tokens

export const tokens = (mode) => ({
    ...(mode === "dark" ? {
        primary: {
            300:"#caa3c2",

            //SideBarColor
            // 350:"#868dfb",
            // 400: "#57ACDC",
            // 450:"#79cbb8",
            // 500: "#060b26",
            // 550:"#fff",
            350:"#777777",
            400:"#199292",
            450:"#979797",
            500:"#fff",

            //topbarColor
            // 600:"#00000c",
            // 650:"#042341",
            600:"#fff",
            650:"#fff",

            //bgColor
            700:"#F0F3F3",
            800:"#F0F3F3",
            // 700:"#000033",
            // 700:"#272a80",
            // 800:"#00000c",
            // 900:"#000033",
            // 700:"#fff",
            // 800:"#fff",
            // 900:"#fff"
        }
    } : 
    {
        primary: {
            300:"#A4BC92",

            //SidebarColor
            // 350:"#868dfb",
            // 400: "#DDFFBB",
            // 450:"#79cbb8",
            // 500: "#C7E9B0",
            // 550:"#000",
            350:"#777777",
            450:"#979797",
            400:"#199292",
            500:"#fff",

            //topbarColor
            // 600:"#B3C99C",
            // 650:"#DDFFBB",
            600:"#fff",
            650:"#fff",

            //bgColor
            700:"#F0F3F3",
            800:"#F0F3F3",
            // 700:"#C7E9B0",
            // 800:"#DDFFBB"
        }
    }),

})
const { augmentColor } = palette;
// mui theme settings
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
export const themeSettings = (mode)=>{
    const colors = tokens(mode)
    return{
        dropdown: {
            
            "&.MuiAutocomplete-hasPopupIcon .MuiAutocomplete-inputRoot":
              {
                padding: "0px !important",
                fontSize: "14px",
                color: "#1E5EF3",
                fontWeight: 500,
              },
            "& .MuiAutocomplete-endAdornment": {
              right: "0px !important",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#1E5EF3",
            },
          },
        palette:{
            anger:createColor("#f40b27"),
            // apple:createColor("#5dba40"),
            // steelBlue:createColor("#5c76b7"),
            // violet:createColor("#bc00a3"),
            mode:mode,
            // ...(mode === "dark"
            // ?{
            //     //buttons
            //     primary:{
            //         main:colors.primary[500],
            //     },secondary:{
            //         main:colors.primary[500],

            //     },neutral:{
            //         main:colors.primary[500],
            //     },
            // } :{
            //     primary:{
            //         main:colors.primary[500],
            //     },secondary:{
            //         main:colors.primary[500],

            //     },neutral:{
            //         main:colors.primary[500],
            //     },
            // })
            primary:{
                main:"#000",
            },secondary:{
                main:"#fff",

            },neutral:{
                main:"#fff",
            },
        },
        typography: {
            "fontFamily": ["Cairo"],
            "fontSize": 14,
            "fontWeightLight": 300,
            "fontWeightRegular": 400,
            "fontWeightMedium": 500
           }
    }
}
export const ColorModeContext = createContext({    
    toggleColorMode:()=>{}
})
export const useMode = ()=>{
    const [mode, setMode]= useState("light")
    const colorMode = useMemo(
        ()=>({
        toggleColorMode:()=> setMode((prev)=>(prev === "light" ? "dark":"light"))
    }),[])
    const theme = useMemo(()=> createTheme(themeSettings(mode)),[mode])
    // console.log(theme)
    return [theme,colorMode]
}