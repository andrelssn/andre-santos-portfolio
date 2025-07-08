import React from "react";
import { Box, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, MenuItem, Tab, Tabs, TextField } from "@mui/material";
import { Trans, useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

// IMG
import pt from "../../images/flags/brasil.png";
import en from "../../images/flags/eua.png";
import logoLight from "../../images/site-logo/logo-light.png";
import logoDark from "../../images/site-logo/logo-dark.png";

// Icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';

// Style
import "./Style.css";

// Prop
import { tabSx } from "../../Components/Props/Styles";
import { props, styleSx } from "../../Components/Skills/selectSx";
import { menuList } from "../MenuDrawer/MenuItem";

// Components
import ThemeSwitch from "../../Components/ThemeSwitch/ThemeSwitch";

export default function Header(params) {
    const {
        selectedTab,
        handleChange,
        theme,
        toggleTheme,
        isMobile
    } = params;

    const { i18n: {changeLanguage, language} }  = useTranslation();
    const [currentLanguage, setCurrentLanguage] = React.useState(language);
    const [drawerOpen, setDrawerOpen]           = React.useState(false);
    const navigate = useNavigate();

    const handleChangeLanguage = () => {
        const newLanguage = currentLanguage === "en" ? "pt" : "en";

        localStorage.setItem("language", newLanguage);
        setCurrentLanguage(newLanguage);
        changeLanguage(newLanguage);
    }

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const drawer = (
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            <Box
                className="header-drawer-style"
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
            >
                <List>
                    { menuList.map((item) => {
                        return (
                            <ListItemButton
                                onClick={() => { handleChange('', item.route); navigate(item.route); }}
                                className={selectedTab === item.route ? "selected-page-item" : "header-menu-item"}
                            >
                                <ListItemIcon sx={{ color: "var(--text)" }}>
                                    <item.icon/>
                                </ListItemIcon>

                                <ListItemText primary={item.label}/>
                            </ListItemButton>
                        );
                    })}
                </List>

                <Box sx={{ display: "flex", alignItems: "center", position: "absolute", bottom: 10 }}>
                    <Box sx={{ width: 150, ml: 2, mr: 1.5 }}>
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
                                    <img alt="ptbr" src={pt} style={{ width: 20, height: 20, marginRight: 5 }}/>
                                    Português
                                </span>
                            </MenuItem>

                            <MenuItem value="en">
                                <span style={{ display: "flex" }}>
                                    <img alt="en" src={en} style={{ width: 20, height: 20, marginRight: 5 }}/>
                                    English
                                </span>
                            </MenuItem>
                        </TextField>
                    </Box>

                    <ThemeSwitch toggleTheme={toggleTheme}/>
                </Box>
            </Box>
        </Drawer>
    );

    return (
        <header className="header-bar">
            { isMobile
                ? (
                    <Box display={"flex"} justifyContent={"center"} width={"100%"}>
                        <IconButton
                            color="inherit"
                            edge="start"
                            onClick={toggleDrawer(true)}
                            size="large"
                            sx={{ position: "absolute", left: 10 }}
                        >
                            <MenuIcon sx={{ color: "var(--text)" }}/>
                        </IconButton>

                        { theme === "light"
                            ? <img alt="andre-santos" src={logoLight} style={{ width: 160 }}/>
                            : <img alt="andre-santos" src={logoDark} style={{ width: 160 }}/>
                        }
                    </Box>
                ) : (
                    <React.Fragment>
                        <Box sx={{ ml: 2 }}>
                            { theme === "light"
                                ? <img alt="andre-santos" src={logoLight} style={{ width: 160 }}/>
                                : <img alt="andre-santos" src={logoDark} style={{ width: 160 }}/>
                            }
                        </Box>

                        <Box className="tabs-wrapper">
                            <Tabs variant="scrollable" scrollButtons={"auto"} value={selectedTab} onChange={handleChange} sx={tabSx}>
                                { menuList.map((item) => {
                                    return (
                                        <Tab
                                            label={
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                    <item.icon sx={{ fontSize: 15 }} />
                                                    {item.label}
                                                </Box>
                                            }
                                            value={item.route}
                                            LinkComponent={Link}
                                            to={item.route}
                                            iconPosition="start"
                                            sx={{ fontSize: 12 }}
                                        />
                                    );
                                })}
                            </Tabs>
                        </Box>

                        {/* <IconButton href="https://www.linkedin.com/in/andresantosdev/" title="linkedin">
                            <LinkedInIcon sx={{ color: "#ffffff" }}/>
                        </IconButton>

                        <IconButton href="https://github.com/andrelssn" title="github">
                            <GitHubIcon sx={{ color: "#ffffff" }}/>
                        </IconButton> */}

                        <Box sx={{ display: "flex", mr: 5 }}>
                            <ThemeSwitch toggleTheme={toggleTheme}/>

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
                    </React.Fragment>
                )
            }

            {drawer}
        </header>
    );
}