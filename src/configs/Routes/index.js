import { Route,Routes } from "react-router-dom";
import { Box } from "@mui/system";
import Dashboard from "../../component/Components/Pages/Dashboard/Dashboard"
import Products from "../../component/Components/Pages/Products/Products"
import DashboardLite from "../../component/Components/Pages/DashboardLite/DashboardLite"
import Sellers from "../../component/Components/Pages/Sellers/Sellers"
import Error from "../../component/Components/Pages/Error/Error"
const MRoutes = () => {
    return (
        <Routes>
            <Route path="/" >
                <Route path="/" element={<Dashboard />} />
                <Route path="/products" element={<Dashboard />} />
                <Route path="/products/:id" element={<Products />} />
                <Route path="/sellers" element={<DashboardLite />} />
                <Route path="/sellers/:id" element={<Sellers />} />
            </Route>
            <Route path="*" element={<Error />} />
            <Route path="404" element={<Error />} />
        </Routes>
    )

}
export default MRoutes