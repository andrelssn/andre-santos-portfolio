import React from "react";
import { Box, Fade, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";

// Style
import "./Style.css";

// IMG
import image from "../../images/andre.jpeg";

export default function Home({ t, updateKeyHeader }) {

    React.useEffect(() => {
        updateKeyHeader(window.location.pathname.substring(0));
    }, []);

    return (
        <Fade in={true}>
            <div className="home-container">
                <Box className="content-home-photo">
                    <img alt="andre" src={image} className="img-style"/>
                </Box>

                <Box className="content-home">
                    <section className="section-home">
                        <Typography variant="h3">
                            <Trans>Seja Bem-Vindo!</Trans>
                        </Typography>

                        <p> <Trans t={t}>Olá! Muito prazer, eu sou André Santos - Desenvolvedor de Software Full-Stack.</Trans> </p>

                        <p>
                            <Trans t={t}>
                                Sou um Desenvolvedor de Software apaixonado, com 3 anos de experiência na área criando soluções inovadoras e eficientes para os usuários. Minha especialidade no momento
                                segue sendo na área de Desenvolvimento Full-Stack. Sou formado em Ciência da Computação na instituição IBMEC Unimetrocamp Wyden.
                            </Trans>
                        </p>

                        <p>
                            <Trans t={t}>Meus principais conhecimentos são com</Trans> <span style={{ color: "#b89f21" }}>JavaScript</span>, <span style={{ color: "#468ffcff" }}>TypeScript</span>, <span style={{ color: "#2d90d6" }}>ReactJS</span>,
                            <span style={{ color: "#828affff" }}> Next</span>, <span style={{ color: "#60788a" }}>PHP</span> <Trans t={t}>e</Trans> <span style={{ color: "#406e50" }}>NodeJS</span>,
                            <Trans t={t}> mas clicando</Trans> <Link className="link-fix" to={"/skills"}><Trans t={t}>aqui</Trans></Link>, <Trans t={t}>você poderá ver o resumo completo de minhas qualificações. Com foco na construção de soluções escaláveis e de alto desempenho.
                            Comprometido com as melhores práticas de desenvolvimento e metodologias ágeis para entregar produtos de qualidade.</Trans>
                        </p>

                        <p>
                            <Trans t={t}>
                                No meu dia a dia, estou sempre estudando ou pesquisando novas tecnologias. Sou empenhado em melhorar continuamente o meu trabalho, garantindo que esteja sempre apto a atuar ativamente neste mercado.
                            </Trans>
                        </p>
                    </section>
                </Box>
            </div>
        </Fade>
    );
}