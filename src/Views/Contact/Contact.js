import { Fade, Box, IconButton, Typography } from "@mui/material";

// Icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

// Styles
import "./Style.css";

export default function Contact() {
    return (
        <Fade in={true}>
            <nav className="contact-container">
                <section className="contact-section">
                    <span>Email para contato </span>andreluissilsan22@gmail.com
                    <br/><br/>
                    <a href="mailto:andreluissilsan22@gmail.com" className="email-anchor">Enviar e-mail</a>
                </section>

                <section className="contact-section">
                    <Typography color="var(--purple)" fontWeight={"bold"} variant="h5">
                        Redes Sociais
                    </Typography>

                    <IconButton sx={{ width: 150, height: 150 }} href="https://www.linkedin.com/in/andresantosdev/" title="linkedin">
                        <LinkedInIcon sx={{ color: "#ffffff", fontSize: 120 }}/>
                    </IconButton>

                    <IconButton sx={{ width: 150, height: 150 }} href="https://github.com/andrelssn" title="github">
                        <GitHubIcon sx={{ color: "#ffffff", fontSize: 120 }}/>
                    </IconButton>
                </section>
            </nav>
        </Fade>
    );
}