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
                <Box sx={{ mt: 15, display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
                    <section className="contact-section contact-email">
                        <Typography variant="h6" color="var(--text-secondary)" fontWeight="bold" gutterBottom>
                            <Trans>Email para contato</Trans>
                        </Typography>
                        <Typography color="var(--text)" fontSize={16}>
                            andreluissilsan22@gmail.com
                        </Typography>
                        <a href="mailto:andreluissilsan22@gmail.com" className="email-anchor">
                            <Trans>Enviar e-mail</Trans>
                        </a>
                    </section>

                    <section className="contact-section contact-socials">
                        <Typography color="var(--secondary)" fontWeight="bold" variant="h5" gutterBottom>
                            <Trans>Redes Sociais</Trans>
                        </Typography>

                        <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap", justifyContent: "center", mt: 2 }}>
                            <IconButton className="social-btn" href="https://www.linkedin.com/in/andresantosdev/" title="LinkedIn">
                                <LinkedInIcon />
                            </IconButton>

                            <IconButton className="social-btn" href="https://github.com/andrelssn" title="GitHub">
                                <GitHubIcon />
                            </IconButton>
                        </Box>
                    </section>
                </Box>
            </div>
        </Fade>
    );
}