import { Fade, Typography, Divider } from "@mui/material";

import "./Style.css";

export default function Education() {
    return (
        <Fade in={true}>
            <nav className="education-container">
                <section className="education-section">
                    <Typography fontSize={26} color="var(--main-text)">
                        Ensino Superior
                    </Typography>

                    <Divider sx={{ backgroundColor: "var(--main-text)", mt: 0.5, mb: 2 }}/>

                    <span style={{ fontWeight: "bold" }}>Centro Universitário UniMetrocamp - Wyden</span><br/>
                    <span>Bacharelado em Ciências da Computação</span><br/>
                    <span>Campinas, São Paulo</span><br/>
                    <span>2021 - 2025</span>
                </section>

                <section className="education-section" style={{ marginLeft: 20 }}>
                    <Typography fontSize={26} color="var(--main-text)">
                        Ensino Médio & Fundamental
                    </Typography>

                    <Divider sx={{ backgroundColor: "var(--main-text)", mt: 0.5, mb: 2 }}/>

                    <span style={{ fontWeight: "bold" }}>Escola Estadual Monsenhor Luis Gonzaga de Moura</span><br/>
                    <span>Campinas, São Paulo</span><br/>
                    <span>2013 - 2019</span>

                    <br/><br/>

                    <span style={{ fontWeight: "bold" }}>Escola Estadual Adiwalde de Oliveira Coelho</span><br/>
                    <span>Campinas, São Paulo</span><br/>
                    <span>2007 - 2012</span>
                </section>
            </nav>
        </Fade>
    );
}