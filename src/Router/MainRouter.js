import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";

// Components
import Header from "../Layout/Header/Header";
import Home from "../Views/Home/Home";
import About from "../Views/About/About";
import Skills from "../Views/Skills/Skills";
import Contact from "../Views/Contact/Contact";
import Education from "../Views/Education/Education";
import Experience from "../Views/Experience/Experience";
import Projects from "../Views/Projects/Projects";
import RecognitionsView from "../Views/Recognitions/RecognitionsView";

export default function MainRouter({ theme, toggleTheme, isMobile }) {
    const { t } = useTranslation();
    const [selectedTab, setSelectedTab] = React.useState(null);

    function updateKeyHeader(value) {
        setSelectedTab(value);
    };

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <BrowserRouter>
            <Header selectedTab={selectedTab} handleChange={handleChange} theme={theme} toggleTheme={toggleTheme} isMobile={isMobile}/>

            <Routes>
                <Route path="/" element={<Home t={t} updateKeyHeader={updateKeyHeader}/>} />
                <Route path="/about" element={<About t={t} updateKeyHeader={updateKeyHeader}/>} />
                <Route path="/skills" element={<Skills t={t} updateKeyHeader={updateKeyHeader}/>} />
                <Route path="/education" element={<Education t={t} updateKeyHeader={updateKeyHeader}/>} />
                <Route path="/experience" element={<Experience updateKeyHeader={updateKeyHeader}/>} />
                <Route path="/projects" element={ <Projects updateKeyHeader={updateKeyHeader}/> } />
                <Route path="/recognitions" element={ <RecognitionsView updateKeyHeader={updateKeyHeader}/> } />
                <Route path="/contact" element={<Contact updateKeyHeader={updateKeyHeader}/>} />
            </Routes>
        </BrowserRouter>
    );
}