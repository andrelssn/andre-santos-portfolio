import React from "react";
import { Trans } from "react-i18next";
import { Box, Fade, IconButton, Typography } from "@mui/material";

// Icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

// Styles
import "./Style.css";

export default function Contact({ updateKeyHeader }) {

    React.useEffect(() => {
        updateKeyHeader(window.location.pathname.substring(0));
    }, []);

    return (
        <Fade in={true}>
            <div className="contact-container">
                <Box sx={{ mt: 15 }}>
                    <section className="contact-section">
                        <span><Trans>Email para contato</Trans> </span>andreluissilsan22@gmail.com
                        <br/><br/>
                        <a href="mailto:andreluissilsan22@gmail.com" className="email-anchor">
                            <Trans>Enviar e-mail</Trans>
                        </a>
                    </section>

                    <section className="contact-section">
                        <Typography color="var(--secondary)" fontWeight={"bold"} variant="h5">
                            <Trans>Redes Sociais</Trans>
                        </Typography>

                        <IconButton sx={{ width: 150, height: 150 }} href="https://www.linkedin.com/in/andresantosdev/" title="linkedin">
                            <LinkedInIcon sx={{ color: "#ffffff", fontSize: 120 }}/>
                        </IconButton>

                        <IconButton sx={{ width: 150, height: 150 }} href="https://github.com/andrelssn" title="github">
                            <GitHubIcon sx={{ color: "#ffffff", fontSize: 120 }}/>
                        </IconButton>
                    </section>
                </Box>
            </div>
        </Fade>
    );
}