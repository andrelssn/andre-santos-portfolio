import React from "react";
import { Box, Fade, Tab, Tabs } from "@mui/material";
import { Trans } from "react-i18next";

// Style
import "./Style.css";

// Components
import Tech from "../../Components/Skills/Tech";
import SkillLanguage from "../../Components/Skills/SkillLanguage";
import SoftSkills from "../../Components/Skills/SoftSkills";

const tabSx = {
    "& .MuiTabs-indicator": {
        backgroundColor: "var(--secondary)",
    },
    "& .MuiButtonBase-root.MuiTab-root": {
        color: "#cecece",
        fontWeight: "bold",
        transition: "color 0.2s ease-in-out",
        "&:hover": {
            color: "var(--secondary)",
        },
        "&.Mui-selected": {
            color: "var(--secondary)",
            fontWeight: "bold",
            backgroundColor: "var(--test)"
        },
    },
};

export default function Skills({ t, updateKeyHeader }) {
    const [value, setValue] = React.useState(0);

    React.useEffect(() => {
        updateKeyHeader(window.location.pathname.substring(0));
    }, []);

    const handleChangeTab = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <Fade in={true}>
            <div className="skills-container">
                <Box className="up-side-skills">
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
                        <Tab label={<Trans>Linguagens de Programação</Trans>} className="tab-button"/>
                        <Tab label={<Trans>Tecnologias e Ferramentas</Trans>} className="tab-button"/>
                        <Tab label="Soft Skills" className="tab-button"/>
                    </Tabs>
                </Box>

                <Box className="bottom-side-skills">
                    { value === 0 ? ( <SkillLanguage /> ) : <></> }
                    { value === 1 ? ( <Tech/> ) : <></> }
                    { value === 2 ? ( <SoftSkills t={t}/> ) : <></> }
                </Box>
            </div>
        </Fade>
    );
}