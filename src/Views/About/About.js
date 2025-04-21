import { Box, Fade, Typography } from "@mui/material";

// Style
import "./Style.css";

// IMG
import image from "../../images/andreimage.jpg";

export default function About() {

    if(!image) return null;

    return (
        <Fade in={true}>
            <div className="about-container">
                <Box className="left-side">
                    <div style={{ display: "flex", justifySelf: "center" }}>
                        <img src={image} className="img-style-about" alt=""/>
                    </div>

                    <Typography color="var(--main-text)" textAlign={"center"} fontWeight={"bold"}>
                        André Santos <br/>
                        23 anos <br/>
                        Desenvolvedor de Software <br/>
                        Ciência da Computação
                    </Typography>
                </Box>

                <Box className="right-side-about">
                    <section className="section-about">
                        <Typography m={"40px 0px"} variant="h4" textAlign={"center"} color="#fff">
                            Me conheça!
                        </Typography>

                        <p>
                            Desde criança, sempre fui fascinado por programação.
                            Jogava video-games e me perguntava como os programas eram criados.
                        </p>

                        <p>
                            Com o tempo, essa curiosidade cresceu.
                            Comecei com C/C++, assustador no início, mas tudo fez sentido ao entender lógica e algoritmos.
                        </p>

                        <p>
                            Logo, me interessei por desenvolvimento web e me apaixonei por React JS.
                            Meu estágio na Samsung R&D foi essencial para minha jornada como full-stack,
                            trabalhando tanto no Front-End quanto no Back-End.
                        </p>

                        <p>
                            Hoje, continuo aprimorando minhas habilidades e explorando novas linguagens,
                            sempre buscando entregar os melhores resultados aos clientes!
                        </p>
                    </section>
                </Box>
            </div>
        </Fade>
    );
}