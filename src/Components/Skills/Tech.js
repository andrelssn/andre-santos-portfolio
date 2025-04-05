import {CircularProgress, Fade, Typography } from "@mui/material";

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

    if(!react || !laravel || !codeigniter || !node || !api || !json || !mysql) return <CircularProgress sx={{ margin: "auto" }}/>;

    return (
        <Fade in={true}>
            <div className="skill-container">
                <div style={{ display: "flex" }}>
                    <div className="nav-box">
                        <img src={react} alt="react" className="icons-skills"/>
                        <Typography textAlign={"center"} fontWeight={"bold"}>React</Typography>
                    </div>

                    <div className="nav-box">
                        <img src={laravel} alt="laravel" className="icons-skills"/>
                        <Typography textAlign={"center"} fontWeight={"bold"}>Laravel Framework</Typography>
                    </div>

                    <div className="nav-box">
                        <img src={codeigniter} alt="codeigniter" className="icons-skills"/>
                        <Typography textAlign={"center"} fontWeight={"bold"}>Codeigniter Framework</Typography>
                    </div>
                </div>

                <div style={{ display: "flex" }}>
                    <div className="nav-box">
                        <img src={node} alt="node" className="icons-skills"/>
                        <Typography textAlign={"center"} fontWeight={"bold"}>Node</Typography>
                    </div>

                    <div className="nav-box">
                        <img src={api} alt="api" className="icons-skills"/>
                        <Typography textAlign={"center"} fontWeight={"bold"}>API Rest</Typography>
                    </div>

                    <div className="nav-box">
                        <img src={json} alt="json" className="icons-skills"/>
                        <Typography textAlign={"center"} fontWeight={"bold"}>JSON</Typography>
                    </div>
                </div>

                <div style={{ display: "flex" }}>
                    <div className="nav-box">
                        <img src={mysql} alt="mysql" className="icons-skills"/>
                        <Typography textAlign={"center"} fontWeight={"bold"}>MySQL</Typography>
                    </div>
                </div>
            </div>
        </Fade>
    );
}