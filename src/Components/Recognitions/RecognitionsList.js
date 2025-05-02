import React from "react";
import {CircularProgress, Fade, MenuItem, TextField, Typography } from "@mui/material";

// img
import srbr from "../../images/certificate.jpg";

// Styles
import "./Style.css";
import { props, styleSx } from "../Skills/selectSx";
import { Trans } from "react-i18next";

const certificates = [
    "Samsung R&D Brazil",
]

export default function RecognitionsList() {
    const [option, setOption] = React.useState(null);

    if(!srbr) return <CircularProgress sx={{ margin: "auto" }}/>;

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
                        {!option ? <Trans>Select an option</Trans> : <Trans>Certificado de Reconhecimento</Trans>}
                    </Typography>

                    { option === "Samsung R&D Brazil" ? ( <Fade in={true}><img src={srbr} alt="srbr" className="img-certificates"/></Fade> ) : (<></>) }
                </div>
            </div>
        </Fade>
    );
}