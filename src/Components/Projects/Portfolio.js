import React from "react";
import { Fade, Typography, Button, Collapse, Box, colors } from "@mui/material";

// Style
import "./Style.css";

// Icon
import webicon from "../../images/webicon.png";
import LaunchIcon from '@mui/icons-material/Launch';

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


                <div className="project-information-box">
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
                            <Box sx={{ p: 2, m: "5px 20px" }}>
                                <div>
                                    <Typography variant="h6">
                                        Tecnologias Utilizadas
                                    </Typography>

                                    <ul>
                                        <li style={{ color: "var(--purple)", ".span": { color: "var(--secondary)" } }}>
                                            <span>JavaScript</span>
                                        </li>

                                        <li style={{ color: "var(--purple)", ".span": { color: "var(--secondary)" } }}>
                                            <span>React JS</span>
                                        </li>

                                        <li style={{ color: "var(--purple)", ".span": { color: "var(--secondary)" } }}>
                                            <span>Material UI v6</span>
                                        </li>

                                        <li style={{ color: "var(--purple)", ".span": { color: "var(--secondary)" } }}>
                                            <span>React Router Dom</span>
                                        </li>

                                        <li style={{ color: "var(--purple)", ".span": { color: "var(--secondary)" } }}>
                                            <span>i18n (Translate)</span>
                                        </li>

                                        <li style={{ color: "var(--purple)", ".span": { color: "var(--secondary)" } }}>
                                            <span>HTML & CSS</span>
                                        </li>

                                        <li style={{ color: "var(--purple)", ".span": { color: "var(--secondary)" } }}>
                                            <span>Visual Studio Code</span>
                                        </li>

                                        <li style={{ color: "var(--purple)", ".span": { color: "var(--secondary)" } }}>
                                            <span>Git</span>
                                        </li>
                                    </ul>
                                </div>

                                <br/>

                                <div>
                                    <Typography variant="h6">
                                        Objetivo e Usabilidade
                                    </Typography>

                                    <p style={{ marginLeft: 20, marginTop: 10 }}>
                                        Este projeto tem como objetivo proporcionar uma plataforma digital profissional e intuitiva para apresentar habilidades, experiências e projetos desenvolvidos.
                                        Ele foi criado para oferecer uma identidade visual única, destacando as conquistas de forma atraente e acessível
                                    </p>

                                    <p style={{ marginLeft: 20, marginTop: 10 }}>
                                        Com um design básico e responsivo, o portfólio permite que recrutadores, clientes e colaboradores visualizem as informações de maneira clara e organizada.
                                        Além disso, a estrutura do projeto facilita futuras atualizações e expansões, garantindo que ele permaneça relevante ao longo do tempo.
                                    </p>
                                </div>

                                <br/>

                                <div>
                                    <Typography variant="h6">
                                        Estrutura do Projeto
                                    </Typography>

                                    <ul>
                                        <li style={{ color: "var(--purple)", ".span": { color: "var(--secondary)" } }}>
                                            <span>Sistema desenvolvido utilizando rotas, com a biblioteca React Router Dom</span>
                                        </li>

                                        <li style={{ color: "var(--purple)", ".span": { color: "var(--secondary)" } }}>
                                            <span>Responsividade para dispositivos mobile e desktop</span>
                                        </li>
                                    </ul>
                                </div>

                                <br/>

                                <div>
                                    <Button className="repositorio-btn" size="small" href="https://github.com/andrelssn/my-portfolio" endIcon={<LaunchIcon/>}>
                                        Repositório do Projeto
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