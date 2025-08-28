import React from "react";
import { Fade } from "@mui/material";

// Style
import "./Style.css";

// Components
import Portfolio from "../../Components/Projects/Portfolio";
import FcCareer from "../../Components/Projects/FcCareer";
import PetGallery from "../../Components/Projects/PetGallery";

export default function Projects({ updateKeyHeader }) {

    React.useEffect(() => {
        updateKeyHeader(window.location.pathname.substring(0));
    }, []);

    return (
        <Fade in={true}>
            <nav className="projects-component">
                <Portfolio/>

                <FcCareer/>

                <PetGallery/>
            </nav>
        </Fade>
    );
}