import React from "react";
import { Box, Fade, Rating, Typography } from "@mui/material";
import { Trans } from "react-i18next";

// Style
import "./Style.css";

// Components
import FrontEndSkills from "../../Components/Skills/FrontEndSkills";
import BackEndSkills from "../../Components/Skills/BackEndSkills";
import ToolsTechSkills from "../../Components/Skills/ToolsTechSkills";
import MethodologiesSkills from "../../Components/Skills/MethodologiesSkills";
import SoftPowerSkills from "../../Components/Skills/SoftPowerSkills";
import MobileSkills from "../../Components/Skills/MobileSkills";

// const tabSx = {
//     "& .MuiTabs-indicator": {
//         backgroundColor: "var(--secondary)",
//     },
//     "& .MuiButtonBase-root.MuiTab-root": {
//         color: "#cecece",
//         fontWeight: "bold",
//         transition: "color 0.2s ease-in-out",
//         "&:hover": {
//             color: "var(--secondary)",
//         },
//         "&.Mui-selected": {
//             color: "var(--secondary)",
//             fontWeight: "bold",
//             backgroundColor: "var(--test)"
//         },
//     },
// };

export default function Skills({ t, updateKeyHeader }) {
    const [star, setStar]   = React.useState(1);
    const [level, setLevel] = React.useState(<Trans>Iniciante</Trans>);

    React.useEffect(() => {
        updateKeyHeader(window.location.pathname.substring(0));
    }, []);

    function starLevel(value) {
        setStar(value);

        if (value === 1) {
            setLevel(<Trans>Iniciante</Trans>);
        };

        if (value === 2) {
            setLevel(<Trans>Básico</Trans>);
        };

        if (value === 3) {
            setLevel(<Trans>Intermediário</Trans>);
        };

        if (value === 4) {
            setLevel(<Trans>Avançado</Trans>);
        };

        if (value === 5) {
            setLevel(<Trans>Proficiente</Trans>);
        };
    }

    return (
        <Fade in={true}>
            <div className="skills-container">
                <Box className="up-side-skills">
                    <Typography color="var(--text)">
                        <Trans>Clique em uma estrela para ver o nivel que ela representa</Trans>
                    </Typography>

                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Rating
                            value={star}
                            onChange={(event, newValue) => {
                                starLevel(newValue);
                            }}
                            sx={{
                                '& .MuiRating-iconEmpty': {
                                    color: '#999999'
                                },
                            }}
                        />

                        <span style={{ color: "var(--text)", marginLeft: 10 }}>
                            {level}
                        </span>
                    </Box>
                </Box>

                <br/>

                <Typography className="stack-type-card">
                    Front-End
                </Typography>

                <Box className="bottom-side-skills">
                    <FrontEndSkills />
                </Box>

                <Typography className="stack-type-card">
                    Back-End
                </Typography>

                <Box className="bottom-side-skills">
                    <BackEndSkills />
                </Box>

                <Typography className="stack-type-card">
                    Mobile
                </Typography>

                <Box className="bottom-side-skills">
                    <MobileSkills />
                </Box>

                <Typography className="stack-type-card">
                    Tools and Technologies
                </Typography>

                <Box className="bottom-side-skills">
                    <ToolsTechSkills />
                </Box>

                <Typography className="stack-type-card">
                    Methodologies
                </Typography>

                <Box className="bottom-side-skills">
                    <MethodologiesSkills />
                </Box>

                <Typography className="stack-type-card">
                    Soft Skills / Power Skills
                </Typography>

                <Box className="bottom-side-skills">
                    <SoftPowerSkills />
                </Box>
            </div>
        </Fade>
    );
}