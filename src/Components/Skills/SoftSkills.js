import { CircularProgress, Fade, Typography } from "@mui/material";

// Styles
import "./Style.css";

// Imgs
import emotional from "../../images/icons/soft/emotional.png";
import adaptacao from "../../images/icons/soft/adaptacao.png";
import aprendizado from "../../images/icons/soft/aprendizado.png";
import comunicacao from "../../images/icons/soft/comunicacao.png";
import critico from "../../images/icons/soft/critico.png";
import problemsolution from "../../images/icons/soft/problemsolution.png";
import teamwork from "../../images/icons/soft/trabalhoequipe.png";

export default function SoftSkills() {

    if(!emotional) return <CircularProgress sx={{ margin: "auto" }}/>;

    return (
        <Fade in={true}>
            <div className="skill-container">
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <div className="nav-box">
                        <img src={emotional} alt="emotional inteligence" className="icons-skills"/>
                        <Typography textAlign={"center"} fontWeight={"bold"} ml={2}>Inteligência Emocional</Typography>
                    </div>

                    <div className="nav-box">
                        <img src={adaptacao} alt="adaptation" className="icons-skills"/>
                        <Typography textAlign={"center"} fontWeight={"bold"} ml={2}>Rápida Adaptação</Typography>
                    </div>

                    <div className="nav-box">
                        <img src={aprendizado} alt="apprenticeship" className="icons-skills"/>
                        <Typography textAlign={"center"} fontWeight={"bold"} ml={2}>Rápido Aprendizado</Typography>
                    </div>

                    <div className="nav-box">
                        <img src={comunicacao} alt="comunication" className="icons-skills"/>
                        <Typography textAlign={"center"} fontWeight={"bold"} ml={2}>Boa Comunicação</Typography>
                    </div>

                    <div className="nav-box">
                        <img src={critico} alt="critico" className="icons-skills"/>
                        <Typography textAlign={"center"} fontWeight={"bold"} ml={2}>Pensamento Crítico</Typography>
                    </div>

                    <div className="nav-box">
                        <img src={problemsolution} alt="problemsolution" className="icons-skills"/>
                        <Typography textAlign={"center"} fontWeight={"bold"} ml={2}>Solução de Problemas</Typography>
                    </div>

                    <div className="nav-box">
                        <img src={teamwork} alt="teamwork" className="icons-skills"/>
                        <Typography textAlign={"center"} fontWeight={"bold"} ml={2}>Trabalho em Equipe</Typography>
                    </div>
                </div>
            </div>
        </Fade>
    );
}