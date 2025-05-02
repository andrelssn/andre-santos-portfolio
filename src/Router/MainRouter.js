import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";

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
    const { t } = useTranslation();
    const [selectedTab, setSelectedTab] = React.useState(null);
    const [pageName, setPageName]       = React.useState("Olá! Seja Bem-Vindo!");
    const [update, setUpdate]           = React.useState(1);

    React.useEffect(() => {
        const path = window.location.pathname.substring(0);

        if(path === "/"){
            setPageName(<Trans t={t}>Olá! Seja Bem-Vindo!</Trans>)
            setSelectedTab("home");
        }

        if(path === "/about"){
            setPageName(<Trans t={t}>Conheça mais sobre mim!</Trans>)
            setSelectedTab("about");
        }

        if(path === "/skills"){
            setPageName(<Trans t={t}>Conheça minhas qualificações!</Trans>)
            setSelectedTab("skills");
        }

        if(path === "/education"){
            setPageName(<Trans t={t}>Uma visão geral de minha trilha acadêmica.</Trans>)
            setSelectedTab("education");
        }

        if(path === "/experience"){
            setPageName(<Trans t={t}>Saiba mais sobre minhas experiências!</Trans>)
            setSelectedTab("experience");
        }

        if(path === "/projects"){
            setPageName(<Trans t={t}>Projetos já desenvolvidos até o momento.</Trans>)
            setSelectedTab("projects");
        }

        if(path === "/recognitions"){
            setPageName(<Trans t={t}>Confira os reconhecimentos que já recebi!</Trans>)
            setSelectedTab("recognitions");
        }

        if(path === "/contact"){
            setPageName(<Trans t={t}>Vamos criar soluções inovadoras juntos?</Trans>)
            setSelectedTab("contact");
        }
    }, [selectedTab, update]);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <BrowserRouter>
            <Header selectedTab={selectedTab} pageName={pageName} handleChange={handleChange} update={update} setUpdate={setUpdate}/>

            <Routes>
                <Route path="/" element={<Home t={t}/>} />
                <Route path="/about" element={<About t={t}/>} />
                <Route path="/skills" element={<Skills handleChange={handleChange} t={t}/>} />
                <Route path="/education" element={<Education t={t}/>} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={ <Projects/> } />
                <Route path="/recognitions" element={ <RecognitionsView/> } />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}