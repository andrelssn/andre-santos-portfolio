import { Box, Fade, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";

// Style
import "./Style.css";

// IMG
import image from "../../images/andre.jpeg";

export default function Home({ t }) {
    return (
        <Fade in={true}>
            <div className="home-container">
                <Box className="left-side">
                    <div style={{ display: "flex", justifySelf: "center" }}>
                        <img src={image} className="img-style"/>
                    </div>

                    <Typography color="var(--main-text)" textAlign={"center"} fontWeight={"bold"}>
                        André Santos <br/>
                        23 <Trans t={t}>anos</Trans> <br/>
                        <Trans t={t}>Desenvolvedor de Software</Trans> <br/>
                        <Trans t={t}>Cientista da Computação</Trans>
                    </Typography>
                </Box>

                <Box className="right-side">
                    <section className="section-home">
                        <p> <Trans t={t}>Olá! Muito prazer, eu sou André Santos - Desenvolvedor de Software.</Trans> </p>

                        <p>
                            <Trans t={t}>
                                Sou um Desenvolvedor de Software apaixonado, com 2 anos de experiência na área criando soluções inovadoras e eficientes para os usuários. Minha especialidade no momento
                                segue sendo na área de Desenvolvimento Web Full-Stack, onde eu atuo em estágio na Samsung R&D Brazil.
                            </Trans>
                        </p>

                        <p>
                            <Trans t={t}>Meus principais conhecimentos são com</Trans> <span style={{ color: "#b89f21" }}>JavaScript</span>, <span style={{ color: "#2d90d6" }}>ReactJS</span>, <span style={{ color: "#60788a" }}>PHP</span> <Trans t={t}>e</Trans> <span style={{ color: "#406e50" }}>NodeJS</span>,
                            <Trans t={t}> mas clicando</Trans> <Link className="link-fix" to={"/skills"}><Trans t={t}>aqui</Trans></Link>, <Trans t={t}>você poderá ver o resumo completo de minhas qualificações.</Trans>
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