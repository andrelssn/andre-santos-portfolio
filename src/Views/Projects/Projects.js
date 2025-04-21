import React from "react";
import { Fade, Typography, Button } from "@mui/material";

import "./Style.css";

import webicon from "../../images/webicon.png";

export default function Projects() {
    const [openLog, setOpenLog]     = React.useState(false);
    const [openAbout, setOpenAbout] = React.useState(false);

    return (
        <Fade in={true}>
            <nav className="projects-container">
                <section className="projects-section">
                    <div style={{ display: "flex", alignItems: "center", position: "relative" }}>
                        <img src={webicon} style={{ width: 30, marginRight: 5 }}/>
                        <Typography fontSize={26} color="var(--main-text)">
                            Portfolio André Santos
                        </Typography>

                        <div style={{ position: "absolute", right: 0 }}>
                            <Button onClick={() => setOpenLog(true)}>
                                Log
                            </Button>

                            <Button onClick={() => setOpenAbout(true)}>
                                Sobre
                            </Button>
                        </div>
                   </div>

                    <span style={{ color: "#cecece" }}>versão 1.0.0</span>

                    <div className="job-information-box">
                        
                    </div>
                </section>
            </nav>
        </Fade>
    );
}