import React from "react";
import { Fade, Typography, Divider, Box, Tabs, Tab, Collapse, Button } from "@mui/material";
import { Trans } from "react-i18next";

// Styles
import "./Style.css";

// Components
import Certificates from "../../Components/Certificates/Certificates";

const tabSx = {
    "& .MuiTabs-indicator": {
        backgroundColor: "var(--secondary)",
    },
    "& .MuiButtonBase-root.MuiTab-root": {
        color: "var(--text)",
        fontWeight: "bold",
        transition: "color 0.2s ease-in-out",
        "&:hover": {
            color: "var(--secondary)",
        },
        "&.Mui-selected": {
            color: "var(--secondary)",
            fontWeight: "bold",
        },
    },
};

export default function Education({ updateKeyHeader }) {
    const [value, setValue]             = React.useState(0);
    const [openDetails, setOpenDetails] = React.useState(false);

    React.useEffect(() => {
        updateKeyHeader(window.location.pathname.substring(0));
    }, []);

    const handleChangeTab = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <Fade in={true}>
            <section className="education-container">
                <Box className="up-side-education">
                    <Tabs
                        orientation="horizontal"
                        value={value}
                        onChange={handleChangeTab}
                        sx={tabSx}
                        variant="scrollable"
                        scrollButtons
                        allowScrollButtonsMobile
                        TabScrollButtonProps={{ style: { color: "var(--secondary)" } }}
                    >
                        <Tab label={<Trans>Escolaridade</Trans>} className="tab-button"/>
                        <Tab label={<Trans>Certificações</Trans>} className="tab-button"/>
                    </Tabs>
                </Box>

                {
                    value === 0
                        ? <Fade in={true}>
                            <nav className="bottom-side-education">
                                <section className="education-section">
                                    <Typography fontSize={26} color="var(--text)">
                                        <Trans>Ensino Superior</Trans>
                                    </Typography>

                                    <Divider sx={{ backgroundColor: "var(--text)", mt: 0.5, mb: 2 }}/>

                                    <span style={{ fontWeight: "bold", fontSize: 18 }}>
                                        <Trans>Bacharelado em Ciências da Computação</Trans>
                                    </span><br/>
                                    <span>Centro Universitário UniMetrocamp - Wyden</span><br/>
                                    <span>Campinas, São Paulo</span><br/>
                                    <span>2021 - 2025</span><br/><br/>

                                    <Button fullWidth onClick={() => setOpenDetails(!openDetails)} className="global-btn-style">
                                        <Trans>Ver Detalhes</Trans>
                                    </Button>

                                    <Collapse in={openDetails}>
                                        <ul style={{ backgroundColor: "var(--background)", borderRadius: 5, color: "var(--text)", padding: "20px 40px" }}>
                                            <li>Outreach project in Python (Influenza data management system)</li>
                                            <li>Outreach project using Azure and Arduino (Motion detection system)</li>
                                            <li>Hands-on laboratory sessions using programming languages such as C/C++, Python, Java, JavaScript, and PHP</li>
                                        </ul>
                                    </Collapse>
                                </section>

                                <section className="education-section">
                                    <Typography fontSize={26} color="var(--text)">
                                        <Trans>Ensino Médio & Fundamental</Trans>
                                    </Typography>

                                    <Divider sx={{ backgroundColor: "var(--text)", mt: 0.5, mb: 2 }}/>

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
                        : <></>
                }

                { value === 1 ? <Certificates/> : <></> }
            </section>
        </Fade>
    );
}