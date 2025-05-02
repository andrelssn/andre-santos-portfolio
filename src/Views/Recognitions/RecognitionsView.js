import React from "react";
import { Fade } from "@mui/material";

// Style
import "./Style.css";

// Components
import RecognitionsList from "../../Components/Recognitions/RecognitionsList";

export default function RecognitionsView() {
    return (
        <Fade in={true}>
            <nav className="projects-container">
                <RecognitionsList/>
            </nav>
        </Fade>
    );
}