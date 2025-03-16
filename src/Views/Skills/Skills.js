import React from "react";
import { Box, Fade, Tab, Tabs, Typography } from "@mui/material";
import { Link } from "react-router-dom";

// Style
import "./Style.css";
import Tech from "../../Components/Skills/Tech";
import Certificates from "../../Components/Skills/Certificates";
import SkillLanguage from "../../Components/Skills/SkillLanguage";

const tabSx = {
    "& .MuiTabs-indicator": {
        backgroundColor: "#ffffff",
    },
    "& .MuiButtonBase-root.MuiTab-root": {
        color: "#cecece",
        fontWeight: "bold",
        transition: "color 0.2s ease-in-out",
        "&:hover": {
            color: "#ffffff",
        },
        "&.Mui-selected": {
            color: "#ffffff",
            fontWeight: "bold",
            textShadow: " 0 0 3px #ffffff, 0 0 1px #ffffff",
            backgroundColor: "var(--test)"
        },
    },
};


export default function Skills({handleChange}) {
    const [value, setValue] = React.useState(0);

    const handleChangeTab = (event, newValue) => {
      setValue(newValue);
    };

    React.useEffect(() => {
        handleChange('', "skills");
    }, []);

    return (
        <Fade in={true}>
            <nav className="skills-container">
                <Box className="left-side-skills">
                    <Tabs
                        orientation="vertical"
                        value={value}
                        onChange={handleChangeTab}
                        sx={tabSx}
                    >
                        <Tab label="Linguagens de Programação" className="tab-button"/>
                        <Tab label="Tecnologias e Ferramentas" className="tab-button"/>
                        <Tab label="Certificações" className="tab-button"/>
                    </Tabs>
                </Box>

                <Box className="right-side-skills">
                    { value === 0 ? ( <SkillLanguage/> ) : <></> }
                    { value === 1 ? ( <Tech/> ) : <></> }
                    { value === 2 ? ( <Certificates/> ) : <></> }
                </Box>
            </nav>
        </Fade>
    );
}