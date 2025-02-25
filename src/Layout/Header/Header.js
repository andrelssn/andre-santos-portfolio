import React from "react";
import { AppBar, Box, Tab, Tabs, Typography } from "@mui/material";

// Style
import "./Style.css";

export default function Header() {
    const [selectedTab, setSelectedTab] = React.useState("home");
    const [pageName, setPageName]       = React.useState("home");

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
            <Typography color="var(--main-text)" fontSize={20} fontWeight={"bold"}>
                {pageName}
            </Typography>

            <Box>
                <Tabs value={selectedTab} onChange={handleChange} sx={{ "& button": { fontSize: 14, fontWeight: "bold" } }}>
                    <Tab label="Home" value={"home"}/>
                    <Tab label="Skills" value={"skills"}/>
                    <Tab label="Contact" value={"contact"}/>
                    <Tab label="Social" value={"social-media"}/>
                </Tabs>
            </Box>
        </AppBar>
    );
}