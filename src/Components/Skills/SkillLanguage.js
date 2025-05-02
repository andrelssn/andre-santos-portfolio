import { CircularProgress, Fade, Typography } from "@mui/material";

// Styles
import "./Style.css";

// Imgs
import c from "../../images/icons/c.png";
import js from "../../images/icons/js.png";
import php from "../../images/icons/php.png";

export default function SkillLanguage() {

    if(!c || !js || !php) return <CircularProgress sx={{ margin: "auto" }}/>;

    return (
        <Fade in={true}>
            <div className="skill-container">
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <div className="nav-box">
                        <img src={js} alt="js" className="icons-skills"/>
                        <Typography textAlign={"center"} fontWeight={"bold"} ml={2}>JavaScript</Typography>
                    </div>

                    <div className="nav-box">
                        <img src={php} alt="php" className="icons-skills"/>
                        <Typography textAlign={"center"} fontWeight={"bold"} ml={2}>PHP</Typography>
                    </div>

                    <div className="nav-box">
                        <img src={c} alt="c/c++" className="icons-skills"/>
                        <Typography textAlign={"center"} fontWeight={"bold"} ml={2}>C/C++</Typography>
                    </div>
                </div>
            </div>
        </Fade>
    );
}