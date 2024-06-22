import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Navbar from "../Common/Navbar";

const AppRoutes = () => (
    <Router>
        <Navbar />
        <Routes>
        <Route element={<Home />} path="/" />
        </Routes>
    </Router>
);

export default AppRoutes;
