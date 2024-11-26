import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "../Layout/Header/Header";
import Home from "../Views/Home/Home";

export default function MainRouter() {
    return (
        <BrowserRouter>
            <Header/>

            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}