import React from "react";
import { Fade } from "@mui/material";

// Style
import "./Style.css";

// Components
import Portfolio from "../../Components/Projects/Portfolio";

export default function Projects() {
    return (
        <Fade in={true}>
            <nav className="projects-container">
                <Portfolio/>
            </nav>
        </Fade>
    );
}