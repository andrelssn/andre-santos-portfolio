import { Box, Fade, Typography } from "@mui/material";

// Style
import "./Style.css";

// IMG
import image from "../../images/andre2.jpg";

export default function About() {
    return (
        <Fade in={true}>
            <nav className="about-container">
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
                            Desde criança, sempre me fascinei pelo mundo da programação. Lembro de jogar video-games e me perguntar: "Como será que fazem esses jogos e programas?" Essa curiosidade cresceu com o tempo, até que finalmente decidi explorar essa área.
                            Ao me aprofundar, descobri coisas incríveis, desde a criação de sites até o desenvolvimento de softwares complexos. Mergulhei de cabeça no universo da programação, e a cada dia me surpreendo mais com as possibilidades e a criatividade que ela permite.
                        </p>

                        <p>
                            Comecei do básico. Sim, como a maioria, minha primeira linguagem de programação foi C. No início, fiquei extremamente assustado e imaginando diversas formas de fugir disso (risos). No entanto, depois que finalmente entendi sobre lógica de programação e algoritmos, tudo pareceu clarear na minha mente, tornando as aulas de programação mais simples de entender.
                            A partir desse momento, iniciei minha jornada na programação web full-stack. Sempre me interessei por web design e, quando tive meu primeiro contato com React JS, fiquei maravilhado. Continuei estudando e aprendendo sobre o assunto, o que me ajudou bastante a seguir a carreira full-stack foi meu estágio na Samsung R&D, onde atuo ativamente com Front-End e Back-End.
                            Embora eu tenha deixado a linguagem C de lado, ainda a utilizo ocasionalmente e tenho planos de aprender outras linguagens, como Java, Kotlin, Swift, entre outras.
                        </p>

                        <p>
                            E agora cá estou eu, continuamente aprimorando meu trabalho e minhas habilidades para entregar sempre os melhores resultados aos clientes com quem trabalho!
                        </p>
                    </section>
                </Box>
            </nav>
        </Fade>
    );
}