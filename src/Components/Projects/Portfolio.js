import React from "react";
import { Fade, Typography, Button, Collapse, Box } from "@mui/material";

// Style
import "./Style.css";

// Icon
import webicon from "../../images/webicon.png";

export default function Portfolio(){
    const [openLog, setOpenLog]     = React.useState(false);
    const [openAbout, setOpenAbout] = React.useState(false);

    const handleOpenClose = (type) => {
        if(type === "log"){
            setOpenLog(!openLog)
            setOpenAbout(false)
        }

        if(type === "about"){
            setOpenAbout(!openAbout)
            setOpenLog(false)
        }
    };

    return (
        <Fade in={true}>
            <section className="projects-section">
                <div style={{ flexWrap: "wrap" }}>
                    <div style={{ display: "flex", alignItems: "center", position: "relative", minWidth: 250, flex: 1 }}>
                        <img src={webicon} style={{ width: 30, marginRight: 5 }}/>
                        <Typography fontSize={26} color="var(--main-text)">
                            Portfolio André Santos
                        </Typography>
                    </div>

                    <span style={{ color: "#cecece" }}>versão 1.0.0</span>

                    <div style={{ margin: "10px 0px" }}>
                        <Button className={openLog ? "btn-projects-selected" : "btn-projects"} onClick={() => handleOpenClose("log")}>
                            Log
                        </Button>

                        <Button className={openAbout ? "btn-projects-selected" : "btn-projects"} onClick={() => handleOpenClose("about")} sx={{ ml: 1 }}>
                            Sobre
                        </Button>
                    </div>
                </div>


                <div className="job-information-box">
                    <Collapse in={openLog}>
                        <div className="collapse-container">
                            <Box sx={{ borderLeft: "1px solid var(--purple)", p: 2, m: "5px 20px" }}>
                                <ul>
                                    <li style={{ color: "var(--purple)" }}>
                                        <span style={{ color: "var(--secondary)" }}>1.0.0 - Primeira versão do sistema</span>
                                    </li>
                                </ul>
                            </Box>
                        </div>
                    </Collapse>

                    <Collapse in={openAbout}>
                        <div className="collapse-container">
                            hello world
                        </div>
                    </Collapse>
                </div>
            </section>
        </Fade>
    );
}