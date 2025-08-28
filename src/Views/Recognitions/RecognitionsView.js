import React from "react";
import { Fade } from "@mui/material";

// Style
import "./Style.css";

// Components
import RecognitionsList from "../../Components/Recognitions/RecognitionsList";

export default function RecognitionsView({ updateKeyHeader }) {

    React.useEffect(() => {
        updateKeyHeader(window.location.pathname.substring(0));
    }, []);

    return (
        <Fade in={true}>
            <nav className="recognitions-container">
                <div className="recognitions-card">
                    <RecognitionsList/>
                </div>
            </nav>
        </Fade>
    );
}