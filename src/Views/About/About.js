import { Trans } from "react-i18next";
import { Box, Fade, Typography } from "@mui/material";

// Style

// IMG
import image from "../../images/andreimage.jpg";
import React from "react";

export default function About({ t, updateKeyHeader }) {
    React.useEffect(() => {
        updateKeyHeader(window.location.pathname.substring(0));
    }, []);

    if(!image) return null;

    return (
        <Fade in={true}>
            <div className="about-container">
                <Box className="left-side">
                    <div style={{ display: "flex", justifySelf: "center" }}>
                        <img src={image} className="img-style-about" alt=""/>
                    </div>

                    <Typography color="var(--text)" textAlign={"center"} fontWeight={"bold"}>
                        André Santos <br/>
                        23 <Trans t={t}>anos</Trans> <br/>
                        <Trans t={t}>Desenvolvedor de Software</Trans> <br/>
                        <Trans t={t}>Cientista da Computação</Trans>
                    </Typography>
                </Box>

                <Box className="right-side-about">
                    <section className="section-about">
                        <Typography m={"40px 0px"} variant="h4" textAlign={"center"} color="#fff">
                            <Trans t={t}>Me conheça!</Trans>
                        </Typography>

                        <p>
                            <Trans t={t}>
                                Desde criança, sempre fui fascinado por programação.
                                Jogava video-games e me perguntava como os programas eram criados.
                            </Trans>
                        </p>

                        <p>
                            <Trans t={t}>
                                Com o tempo, essa curiosidade cresceu.
                                Comecei com C/C++, assustador no início, mas tudo fez sentido ao entender lógica e algoritmos.
                            </Trans>
                        </p>

                        <p>
                            <Trans t={t}>
                                Logo, me interessei por desenvolvimento web e me apaixonei por React JS.
                                Meu estágio na Samsung R&D foi essencial para minha jornada como full-stack,
                                trabalhando tanto no Front-End quanto no Back-End.
                            </Trans>
                        </p>

                        <p>
                            <Trans t={t}>
                                Hoje, continuo aprimorando minhas habilidades e explorando novas linguagens,
                                sempre buscando entregar os melhores resultados aos clientes!
                            </Trans>
                        </p>
                    </section>
                </Box>
            </div>
        </Fade>
    );
}