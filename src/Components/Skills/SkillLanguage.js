import { Fade, Typography } from "@mui/material";

// Styles
import "./Style.css";

// Imgs
import c from "../../images/icons/c.png";
import js from "../../images/icons/js.png";
import php from "../../images/icons/php.png";

export default function SkillLanguage() {
    return (
        <Fade in={true}>
            <div className="skill-container">
                <div style={{ display: "flex" }}>
                    <nav className="nav-box">
                        <img src={js} alt="js" className="icons-skills"/>
                        <Typography textAlign={"center"} fontWeight={"bold"}>JavaScript</Typography>
                    </nav>

                    <nav className="nav-box">
                        <img src={php} alt="php" className="icons-skills"/>
                        <Typography textAlign={"center"} fontWeight={"bold"}>PHP</Typography>
                    </nav>

                    <nav className="nav-box">
                        <img src={c} alt="c/c++" className="icons-skills"/>
                        <Typography textAlign={"center"} fontWeight={"bold"}>C/C++</Typography>
                    </nav>
                </div>
            </div>
        </Fade>
    );
}