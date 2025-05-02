import React from "react";
import { AppBar, Box, IconButton, MenuItem, Select, Tab, Tabs, TextField, Typography } from "@mui/material";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// IMG
import pt from "../../images/flags/brasil.png";
import en from "../../images/flags/eua.png";

// Icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

// Style
import "./Style.css";

// Prop
import { tabSx } from "../../Components/Props/Styles";
import { props, styleSx } from "../../Components/Skills/selectSx";

export default function Header(params) {
    const {
        selectedTab,
        pageName,
        handleChange,
        update,
        setUpdate
    } = params;

    const { i18n: {changeLanguage, language} } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = React.useState(language);

    const handleChangeLanguage = () => {
        const newLanguage = currentLanguage === "en" ? "pt" : "en";

        localStorage.setItem("language", newLanguage);
        setCurrentLanguage(newLanguage);
        changeLanguage(newLanguage);
        setUpdate(update + 1);
    }

    return (
        <AppBar className="header-bar">
            <Typography color="#ffffff" fontSize={20} fontWeight={"bold"} borderBottom={"2px solid #0f0f0f"} p={"12px 10px"}>
                {pageName}
            </Typography>

            <Box sx={{ mt: 1, ml: 1, position: "relative", display: "flex", alignItems: "center", flexWrap: "wrap", overflow: "auto" }}>
                <Box sx={{ display: "flex", flex: 1, minWidth: "57%", mb: 2}}>
                    <Tabs variant="scrollable" scrollButtons allowScrollButtonsMobile value={selectedTab} onChange={handleChange} sx={tabSx}>
                        <Tab label={<Trans>Início</Trans>} value={"home"} LinkComponent={Link} to={"/"}/>
                        <Tab label={<Trans>Sobre Mim</Trans>} value={"about"} LinkComponent={Link} to={"/about"}/>
                        <Tab label={<Trans>Habilidades</Trans>} value={"skills"} LinkComponent={Link} to={"/skills"}/>
                        <Tab label={<Trans>Educação</Trans>} value={"education"} LinkComponent={Link} to={"/education"}/>
                        <Tab label={<Trans>Experiências</Trans>} value={"experience"} LinkComponent={Link} to={"/experience"}/>
                        <Tab label={<Trans>Projetos</Trans>} value={"projects"} LinkComponent={Link} to={"/projects"}/>
                        <Tab label={<Trans>Reconhecimentos</Trans>} value={"recognitions"} LinkComponent={Link} to={"/recognitions"}/>
                        <Tab label={<Trans>Contato</Trans>} value={"contact"} LinkComponent={Link} to={"/contact"}/>
                    </Tabs>
                </Box>

                <Box sx={{ display: "flex", flex: 1, minWidth: 300, mb: 2}}>
                    <IconButton href="https://www.linkedin.com/in/andresantosdev/" title="linkedin">
                        <LinkedInIcon sx={{ color: "#ffffff" }}/>
                    </IconButton>

                    <IconButton href="https://github.com/andrelssn" title="github">
                        <GitHubIcon sx={{ color: "#ffffff" }}/>
                    </IconButton>

                    <Box sx={{ width: 160, ml: 2 }}>
                        <TextField
                            select
                            fullWidth
                            size="small"
                            label={<Trans>Linguagem</Trans>}
                            slotProps={props}
                            sx={styleSx}
                            defaultValue={currentLanguage}
                            onChange={(e) => handleChangeLanguage(e.target.value)}
                        >
                            <MenuItem value="pt" >
                                <span style={{ display: "flex" }}>
                                    <img src={pt} style={{ width: 20, height: 20, marginRight: 5 }}/>
                                    Português
                                </span>
                            </MenuItem>

                            <MenuItem value="en">
                                <span style={{ display: "flex" }}>
                                    <img src={en} style={{ width: 20, height: 20, marginRight: 5 }}/>
                                    English
                                </span>
                            </MenuItem>
                        </TextField>
                    </Box>
                </Box>
            </Box>
        </AppBar>
    );
}