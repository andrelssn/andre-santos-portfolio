import { Box, Fade, Typography } from "@mui/material";
import { Link } from "react-router-dom";

// Style
import "./Style.css";

// IMG
import image from "../../images/andre.jpeg";

export default function Home() {
    return (
        <Fade in={true}>
            <div className="home-container">
                <Box className="left-side">
                    <div style={{ display: "flex", justifySelf: "center" }}>
                        <img src={image} className="img-style"/>
                    </div>

                    <Typography color="var(--main-text)" textAlign={"center"} fontWeight={"bold"}>
                        André Santos <br/>
                        23 years <br/>
                        Software Developer <br/>
                        Computer Scientist
                    </Typography>
                </Box>

                <Box className="right-side">
                    <section className="section-home">
                        <p> Olá! Muito prazer, eu sou André Santos - Desenvolvedor de Software </p>

                        <p>
                            Sou um Desenvolvedor de Software apaixonado, com 2 anos de experiência na área criando soluções inovadoras e eficientes para os usuários. Minha especialidade no momento
                            segue sendo na área de Desenvolvimento Web Full-Stack, onde eu atuo em estágio na Samsung R&D Brazil.
                        </p>

                        <p>
                            Meus principais conhecimentos são com <span style={{ color: "#b89f21" }}>JavaScript</span>, <span style={{ color: "#2d90d6" }}>ReactJS</span>, <span style={{ color: "#60788a" }}>PHP</span> e <span style={{ color: "#406e50" }}>NodeJS</span>,
                            mas clicando <Link className="link-fix" to={"/skills"}>aqui</Link>, você poderá ver o resumo completo de minhas qualificações.
                        </p>

                        <p>
                            No meu dia a dia, estou sempre estudando ou pesquisando novas tecnologias. Sou empenhado em melhorar continuamente o meu trabalho, garantindo que esteja sempre apto a atuar ativamente neste mercado.
                        </p>
                    </section>
                </Box>
            </div>
        </Fade>
    );
}