import React from "react";
import { Fade, Typography, Button, Collapse, Box } from "@mui/material";
import { Trans } from "react-i18next";
import LaunchIcon from '@mui/icons-material/Launch';

// Style
import "./Style.css";

// Icon
import pet from "../../images/petgallery.png";

export default function PetGallery(){
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
                        <img alt="webicon" src={pet} style={{ width: 30, marginRight: 5 }}/>
                        <Typography fontSize={26} color="var(--text)">
                            Pet Gallery
                        </Typography>

                        <Button
                            className="global-btn-style"
                            size="small"
                            href="https://pet-gallery-challenge.vercel.app/"
                            endIcon={<LaunchIcon/>}
                            sx={{ ml: 1 }}
                        >
                            <Trans>Link</Trans>
                        </Button>
                    </div>

                    <span style={{ color: "var(--text-secondary)" }}>
                        <Trans>versão</Trans> 1.0.0
                    </span>

                    <div style={{ margin: "10px 0px" }}>
                        <Button className={openLog ? "btn-projects-selected" : "btn-projects"} onClick={() => handleOpenClose("log")}>
                            Log
                        </Button>

                        <Button className={openAbout ? "btn-projects-selected" : "btn-projects"} onClick={() => handleOpenClose("about")} sx={{ ml: 1 }}>
                            <Trans>Sobre</Trans>
                        </Button>
                    </div>
                </div>


                <div className="project-information-box">
                    <Collapse in={openLog}>
                        <div className="collapse-container">
                            <Box sx={{ borderLeft: "1px solid var(--secondary)", p: 2, m: "5px 20px" }}>
                                <ul>
                                    <li style={{ color: "var(--secondary)" }}>
                                        <span>1.0.0</span>

                                        <ul style={{ marginTop: 5 }}>
                                            <li style={{ color: "var(--text)", fontSize: 14, fontStyle: "italic" }}>
                                                <Trans>Primeira versão do sistema</Trans>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </Box>
                        </div>
                    </Collapse>

                    <Collapse in={openAbout}>
                        <div className="collapse-container">
                            <Box sx={{ p: 2, m: "5px 20px" }}>
                                <div>
                                    <Typography variant="h6">
                                        <Trans>Tecnologias Utilizadas</Trans>
                                    </Typography>

                                    <ul>
                                        <li>
                                            Front-end
                                            <ul>
                                                <li style={{ color: "var(--secondary)", ".span": { color: "var(--secondary)" } }}>
                                                    <span>TypeScript</span>
                                                </li>

                                                <li style={{ color: "var(--secondary)", ".span": { color: "var(--secondary)" } }}>
                                                    <span>Next (App Router)</span>
                                                </li>

                                                <li style={{ color: "var(--secondary)", ".span": { color: "var(--secondary)" } }}>
                                                    <span>Material UI</span>
                                                </li>

                                                <li style={{ color: "var(--secondary)", ".span": { color: "var(--secondary)" } }}>
                                                    <span>Tailwind CSS</span>
                                                </li>

                                                <li style={{ color: "var(--secondary)", ".span": { color: "var(--secondary)" } }}>
                                                    <span>Axios</span>
                                                </li>

                                                <li style={{ color: "var(--secondary)", ".span": { color: "var(--secondary)" } }}>
                                                    <span>Jest</span>
                                                </li>

                                                <li style={{ color: "var(--secondary)", ".span": { color: "var(--secondary)" } }}>
                                                    <span>HTML & CSS</span>
                                                </li>

                                                <li style={{ color: "var(--secondary)", ".span": { color: "var(--secondary)" } }}>
                                                    <span>Visual Studio Code</span>
                                                </li>

                                                <li style={{ color: "var(--secondary)", ".span": { color: "var(--secondary)" } }}>
                                                    <span>Git</span>
                                                </li>
                                            </ul>
                                        </li>

                                        <br/>

                                        <li>
                                            Back-end
                                            <ul>
                                                <li style={{ color: "var(--secondary)", ".span": { color: "var(--secondary)" } }}>
                                                    <span>API: TheCatApi</span>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>

                                <br/>

                                <div>
                                    <Typography variant="h6">
                                        <Trans>Objetivo e Usabilidade</Trans>
                                    </Typography>

                                    <p style={{ marginLeft: 20, marginTop: 10 }}>
                                        <Trans>
                                            Como desenvolvedor apaixonado por pets, criei uma aplicação que reúne informações sobre diversas raças de gatos, permitindo aos usuários explorar curiosidades, características e muito mais.
                                        </Trans>
                                    </p>
                                </div>

                                <br/>

                                <div>
                                    <Button className="global-btn-style" size="small" href="https://github.com/andrelssn/pet-gallery-challenge" endIcon={<LaunchIcon/>}>
                                        <Trans>Repositório do Projeto</Trans>
                                    </Button>
                                </div>
                            </Box>
                        </div>
                    </Collapse>
                </div>
            </section>
        </Fade>
    );
}