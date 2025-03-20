import {Fade, Typography } from "@mui/material";

// Styles
import "./Style.css";

// Imgs
import react from "../../images/icons/tech/React-icon.svg.png";
import laravel from "../../images/icons/tech/Laravel.svg.png";
import codeigniter from "../../images/icons/tech/codeigniter.webp";
import node from "../../images/icons/tech/node-js.png";
import api from "../../images/icons/tech/api.png";
import json from "../../images/icons/tech/arquivo-json.png";
import mysql from "../../images/icons/tech/mysql.png";

export default function Tech() {
    return (
        <Fade in={true}>
            <div className="skill-container">
                <div style={{ display: "flex" }}>
                    <nav className="nav-box">
                        <img src={react} alt="react" className="icons-skills"/>
                        <Typography textAlign={"center"} fontWeight={"bold"}>React</Typography>
                    </nav>

                    <nav className="nav-box">
                        <img src={laravel} alt="laravel" className="icons-skills"/>
                        <Typography textAlign={"center"} fontWeight={"bold"}>Laravel Framework</Typography>
                    </nav>

                    <nav className="nav-box">
                        <img src={codeigniter} alt="codeigniter" className="icons-skills"/>
                        <Typography textAlign={"center"} fontWeight={"bold"}>Codeigniter Framework</Typography>
                    </nav>
                </div>

                <div style={{ display: "flex" }}>
                    <nav className="nav-box">
                        <img src={node} alt="node" className="icons-skills"/>
                        <Typography textAlign={"center"} fontWeight={"bold"}>Node</Typography>
                    </nav>

                    <nav className="nav-box">
                        <img src={api} alt="api" className="icons-skills"/>
                        <Typography textAlign={"center"} fontWeight={"bold"}>API Rest</Typography>
                    </nav>

                    <nav className="nav-box">
                        <img src={json} alt="json" className="icons-skills"/>
                        <Typography textAlign={"center"} fontWeight={"bold"}>JSON</Typography>
                    </nav>
                </div>

                <div style={{ display: "flex" }}>
                    <nav className="nav-box">
                        <img src={mysql} alt="mysql" className="icons-skills"/>
                        <Typography textAlign={"center"} fontWeight={"bold"}>MySQL</Typography>
                    </nav>
                </div>
            </div>
        </Fade>
    );
}