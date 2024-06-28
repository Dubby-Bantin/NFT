import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Navbar from "../Common/Navbar";
import NotFound from "../Pages/NotFound";

const AppRoutes = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<NotFound />} path="*" />
    </Routes>
  </Router>
);

export default AppRoutes;
