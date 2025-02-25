import React from "react";
import { AppBar, Box, IconButton, Tab, Tabs, Typography } from "@mui/material";

// Icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

// Style
import "./Style.css";

// Prop
import { tabSx } from "../../Components/Props/Styles";

export default function Header() {
    const [selectedTab, setSelectedTab] = React.useState("home");
    const [pageName, setPageName]       = React.useState("Olá! Seja Bem-Vindo!");

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);

        if(newValue === "home"){
            setPageName("Olá! Seja Bem-Vindo!")
        }

        if(newValue === "skills"){
            setPageName("Conheça minhas qualificações")
        }
    };

    return (
        <AppBar className="header-bar">
            <Typography color="#ffffff" fontSize={20} fontWeight={"bold"} borderBottom={"2px solid #0f0f0f"} p={"0px 10px"} pb={1}>
                {pageName}
            </Typography>

            <Box sx={{ ml: 3, display: "flex", alignItems: "center" }}>
                <Tabs value={selectedTab} onChange={handleChange} sx={tabSx}>
                    <Tab label="Home" value={"home"}/>
                    <Tab label="Skills" value={"skills"}/>
                    <Tab label="Contact" value={"contact"}/>
                    <Tab label="Social" value={"social-media"}/>
                </Tabs>

                <Box sx={{ display: "inline-flex", position: "absolute", right: 0 }}>
                    <IconButton title="linkedin">
                        <LinkedInIcon sx={{ color: "#ffffff" }}/>
                    </IconButton>

                    <IconButton href="https://github.com/andrelssn" title="github">
                        <GitHubIcon sx={{ color: "#ffffff" }}/>
                    </IconButton>
                </Box>
            </Box>
        </AppBar>
    );
}