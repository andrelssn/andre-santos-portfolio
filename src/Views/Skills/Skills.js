import React from "react";
import { Box, Fade, Tab, Tabs } from "@mui/material";

// Style
import "./Style.css";

// Components
import Tech from "../../Components/Skills/Tech";
import SkillLanguage from "../../Components/Skills/SkillLanguage";
import SoftSkills from "../../Components/Skills/SoftSkills";
import { Trans } from "react-i18next";

const tabSx = {
    "& .MuiTabs-indicator": {
        backgroundColor: "var(--purple)",
    },
    "& .MuiButtonBase-root.MuiTab-root": {
        color: "#cecece",
        fontWeight: "bold",
        transition: "color 0.2s ease-in-out",
        "&:hover": {
            color: "var(--purple)",
        },
        "&.Mui-selected": {
            color: "var(--purple)",
            fontWeight: "bold",
            backgroundColor: "var(--test)"
        },
    },
};

export default function Skills({ handleChange, t }) {
    const [value, setValue] = React.useState(0);

    const handleChangeTab = (event, newValue) => {
      setValue(newValue);
    };

    React.useEffect(() => {
        handleChange('', "skills");
    }, []);

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
                        TabScrollButtonProps={{ style: { color: "var(--purple)" } }}
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