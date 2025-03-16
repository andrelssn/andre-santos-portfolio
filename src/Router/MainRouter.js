import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "../Layout/Header/Header";
import Home from "../Views/Home/Home";
import About from "../Views/About/About";
import Skills from "../Views/Skills/Skills";
import Contact from "../Views/Contact/Contact";
import Education from "../Views/Education/Education";
import Experience from "../Views/Experience/Experience";

export default function MainRouter() {
    const [selectedTab, setSelectedTab] = React.useState("home");
    const [pageName, setPageName]       = React.useState("Olá! Seja Bem-Vindo!");

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);

        if(newValue === "home"){
            setPageName("Olá! Seja Bem-Vindo!")
        }

        if(newValue === "about"){
            setPageName("Conheça mais sobre mim!")
        }

        if(newValue === "skills"){
            setPageName("Conheça minhas qualificações.")
        }

        if(newValue === "education"){
            setPageName("Uma visão geral de minha trilha acadêmica.")
        }

        if(newValue === "experience"){
            setPageName("Saiba mais sobre minhas experiências.")
        }

        if(newValue === "contact"){
            setPageName("Gostaria de entrar em contato? Veja os meios.")
        }
    };

    return (
        <BrowserRouter>
            <Header selectedTab={selectedTab} pageName={pageName} handleChange={handleChange}/>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills handleChange={handleChange}/>} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/education" element={<Education />} />
                <Route path="/experience" element={<Experience />} />
            </Routes>
        </BrowserRouter>
    );
}