import React from "react";
import { AppBar, Box, IconButton, Tab, Tabs, Typography } from "@mui/material";

// Icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

// Style
import "./Style.css";

// Prop
import { tabSx } from "../../Components/Props/Styles";
import { Link } from "react-router-dom";

export default function Header(params) {

    const {
        selectedTab,
        pageName,
        handleChange
    } = params;

    return (
        <AppBar className="header-bar">
            <Typography color="#ffffff" fontSize={20} fontWeight={"bold"} borderBottom={"2px solid #0f0f0f"} p={"12px 10px"}>
                {pageName}
            </Typography>

            <Box sx={{ mt: 1, ml: 1, display: "flex", alignItems: "center" }}>
                <Tabs variant="scrollable" scrollButtons allowScrollButtonsMobile value={selectedTab} onChange={handleChange} sx={tabSx}>
                    <Tab label="Home" value={"home"} LinkComponent={Link} to={"/"}/>
                    <Tab label="About me" value={"about"} LinkComponent={Link} to={"/about"}/>
                    <Tab label="Skills" value={"skills"} LinkComponent={Link} to={"/skills"}/>
                    <Tab label="Education" value={"education"} LinkComponent={Link} to={"/education"}/>
                    <Tab label="Experience" value={"experience"} LinkComponent={Link} to={"/experience"}/>
                    <Tab label="Contact" value={"contact"} LinkComponent={Link} to={"/contact"}/>
                </Tabs>

                <Box sx={{ display: "flex", float: "right"}}>
                    <IconButton href="https://www.linkedin.com/in/andresantosdev/" title="linkedin">
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