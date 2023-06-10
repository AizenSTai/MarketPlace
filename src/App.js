import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider, Typography,Button,useScrollTrigger } from "@mui/material"
import { Box } from "@mui/system";
import { Navigate, Route, Routes,useNavigate } from "react-router-dom";
import { tokens } from "./theme";
// import Header from "./scenes/global/Header";
import Dashboard from "./component/Components/Pages/Dashboard/Dashboard";
import DashboardLite from "./component/Components/Pages/DashboardLite/DashboardLite";
import ScrollToTop from "./component/MainComponents/ScrollToTop/ScrollToTop";
import { useContext, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Layouts from "./component/MainComponents/Layouts/MainLayout";
function App() {
  const {t,i18n} = useTranslation()
  const [theme, colorMode] = useMode(ThemeProvider)
  const navigator = useNavigate()
  const colorMode1 = useContext(ColorModeContext);
  const colors = tokens(theme.palette.mode);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <div className="app" style={{
          background: `linear-gradient(105deg, ${colors.primary[800]}, ${colors.primary[700]}, ${colors.primary[800]}, ${colors.primary[700]},${colors.primary[800]}
      ,${colors.primary[700]},${colors.primary[800]}`
        }}>
          <main className="content">
              <Layouts/>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
