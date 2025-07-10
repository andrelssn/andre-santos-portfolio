import React from "react";
import { Fade, Typography, Button, Collapse, Box } from "@mui/material";
import { Trans } from "react-i18next";
import LaunchIcon from '@mui/icons-material/Launch';

// Style
import "./Style.css";

// Icon
import fccareer from "../../images/fccareer.png";

export default function FcCareer(){
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
                        <img alt="webicon" src={fccareer} style={{ width: 30, marginRight: 5 }}/>
                        <Typography fontSize={26} color="var(--text)">
                            FC Career
                        </Typography>

                        <Button
                            className="global-btn-style"
                            size="small"
                            href="https://fc-career.vercel.app/"
                            endIcon={<LaunchIcon/>}
                            sx={{ ml: 1 }}
                        >
                            <Trans>Link</Trans>
                        </Button>
                    </div>

                    <span style={{ color: "#cecece" }}><Trans>versão</Trans> 1.0.0</span>

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
                                                    <span>JavaScript</span>
                                                </li>

                                                <li style={{ color: "var(--secondary)", ".span": { color: "var(--secondary)" } }}>
                                                    <span>React JS</span>
                                                </li>

                                                <li style={{ color: "var(--secondary)", ".span": { color: "var(--secondary)" } }}>
                                                    <span>Material UI v6</span>
                                                </li>

                                                <li style={{ color: "var(--secondary)", ".span": { color: "var(--secondary)" } }}>
                                                    <span>React Router Dom</span>
                                                </li>

                                                <li style={{ color: "var(--secondary)", ".span": { color: "var(--secondary)" } }}>
                                                    <span>i18n (Translate)</span>
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
                                                    <span>PHP</span>
                                                </li>

                                                <li style={{ color: "var(--secondary)", ".span": { color: "var(--secondary)" } }}>
                                                    <span>Framework Laravel</span>
                                                </li>

                                                <li style={{ color: "var(--secondary)", ".span": { color: "var(--secondary)" } }}>
                                                    <span>API Rest</span>
                                                </li>

                                                <li style={{ color: "var(--secondary)", ".span": { color: "var(--secondary)" } }}>
                                                    <span>MySQL</span>
                                                </li>

                                                <li style={{ color: "var(--secondary)", ".span": { color: "var(--secondary)" } }}>
                                                    <span>Railway</span>
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
                                            Este é um projeto criado para fãs de EA Sports FC, em que o jogador poderá ter novas ideias de modo carreira no jogo.
                                        </Trans>
                                    </p>

                                    <p style={{ marginLeft: 20, marginTop: 10 }}>
                                        <Trans>
                                           Com o FC Career, você poderá gerar uma ideia de Modo Carreira, na qual poderá selecionar a liga e a equipe que deseja jogar. Com base na dificuldade da equipe, você terá objetivos específicos para alcançar durante a temporada com ela.
                                        </Trans>
                                    </p>

                                    <p style={{ marginLeft: 20, marginTop: 10 }}>
                                        <Trans>
                                           Cada equipe tem seus objetivos já pré-definidos. Ao selecioná-la, também exibiremos informações do clube, como conquistas, recordes, entre outros. Além disso, serão mostrados os títulos a serem conquistados e as ambições cruciais do clube.
                                        </Trans>
                                    </p>
                                </div>

                                <br/>

                                <div>
                                    <Button className="global-btn-style" size="small" href="https://github.com/andrelssn/fc-career" endIcon={<LaunchIcon/>}>
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