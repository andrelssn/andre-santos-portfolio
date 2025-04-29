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
import Projects from "../Views/Projects/Projects";
import RecognitionsView from "../Views/Recognitions/RecognitionsView";

export default function MainRouter() {
    const [selectedTab, setSelectedTab] = React.useState(null);
    const [pageName, setPageName]       = React.useState("Olá! Seja Bem-Vindo!");

    React.useEffect(() => {
        const path = window.location.pathname.substring(0);

        if(path === "/"){
            setPageName("Olá! Seja Bem-Vindo!")
            setSelectedTab("home");
        }

        if(path === "/about"){
            setPageName("Conheça mais sobre mim!")
            setSelectedTab("about");
        }

        if(path === "/skills"){
            setPageName("Conheça minhas qualificações.")
            setSelectedTab("skills");
        }

        if(path === "/education"){
            setPageName("Uma visão geral de minha trilha acadêmica.")
            setSelectedTab("education");
        }

        if(path === "/experience"){
            setPageName("Saiba mais sobre minhas experiências.")
            setSelectedTab("experience");
        }

        if(path === "/projects"){
            setPageName("Projetos já desenvolvidos até o momento.")
            setSelectedTab("projects");
        }

        if(path === "/recognitions"){
            setPageName("Confira os reconhecimentos que já recebi.")
            setSelectedTab("recognitions");
        }

        if(path === "/contact"){
            setPageName("Vamos criar soluções inovadoras juntos?")
            setSelectedTab("contact");
        }
    }, [selectedTab]);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
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
                <Route path="/projects" element={ <Projects/> } />
                <Route path="/recognitions" element={ <RecognitionsView/> } />
            </Routes>
        </BrowserRouter>
    );
}