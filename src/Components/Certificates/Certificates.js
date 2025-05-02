import React from "react";
import {CircularProgress, Fade, MenuItem, TextField, Typography } from "@mui/material";
import { Trans } from "react-i18next";

// img
import api from "../../images/certificates/apis.jpg";
import codeigniter from "../../images/certificates/codeigniter.jpg";
import github from "../../images/certificates/github.jpg";
import php from "../../images/certificates/php.jpg";
import sql from "../../images/certificates/sql.jpg";
import teambuilding from "../../images/certificates/teambuilding.jpeg";
import wiseup from "../../images/certificates/wiseup.png";

// Styles
import "./Style.css";
import { props, styleSx } from "../Skills/selectSx";

const certificates = [
    "APIs Nodejs, Express + MongoDB, SQL",
    "Team Building",
    "CodeIgniter Framework",
    "PHP",
    "SQL",
    "Git e Github",
    "WiseUp (Inglês)"
]

export default function Certificates() {
    const [option, setOption] = React.useState(null);

    if(!api || !codeigniter || !github || !php || !sql || !teambuilding || !wiseup) return <CircularProgress sx={{ margin: "auto" }}/>;

    return (
        <Fade in={true}>
            <div className="certificates-container">
                <div className="select-div">
                    <TextField
                        select
                        size="small"
                        label={<Trans>Selecionar</Trans>}
                        slotProps={props}
                        sx={styleSx}
                        fullWidth
                        onChange={(e) => setOption(e.target.value)}
                    >
                        { certificates.map((data) => {
                            return (
                                <MenuItem value={data}>{data}</MenuItem>
                            );
                        })}
                    </TextField>
                </div>

                <div className="certificates-div">
                    <Typography p={2} bgcolor={"var(--purple)"} color="#ffffff" fontWeight={"bold"}>
                        {!option ? <Trans>Selecione uma opção</Trans> : <Trans>Certificado</Trans>}
                    </Typography>

                    { option === "APIs Nodejs, Express + MongoDB, SQL" ? ( <Fade in={true}><img src={api} alt="api" className="img-certificates"/></Fade> ) : (<></>) }
                    { option === "Team Building" ? ( <Fade in={true}><img src={teambuilding} alt="teambuilding" className="img-certificates"/></Fade> ) : (<></>) }
                    { option === "CodeIgniter Framework" ? ( <Fade in={true}><img src={codeigniter} alt="codeigniter" className="img-certificates"/></Fade> ) : (<></>) }
                    { option === "PHP" ? ( <Fade in={true}><img src={php} alt="php" className="img-certificates"/></Fade> ) : (<></>) }
                    { option === "SQL" ? ( <Fade in={true}><img src={sql} alt="sql" className="img-certificates"/></Fade> ) : (<></>) }
                    { option === "Git e Github" ? ( <Fade in={true}><img src={github} alt="github" className="img-certificates"/></Fade> ) : (<></>) }
                    { option === "WiseUp (Inglês)" ? ( <Fade in={true}><img src={wiseup} alt="wiseup" className="img-certificates"/></Fade> ) : (<></>) }

                </div>
            </div>
        </Fade>
    );
}