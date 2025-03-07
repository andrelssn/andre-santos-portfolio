import { Box, Container, Fade, Paper, Typography } from "@mui/material";

import "./Style.css";

import image from "../../images/andre.jpeg";

export default function Home() {
    return (
        <Fade in={true}>
            <nav className="home-container">
                <Box className="left-side">
                    <div style={{ display: "flex", justifySelf: "center" }}>
                        <img src={image} className="img-style"/>
                    </div>

                    <Typography color="var(--main-text)" textAlign={"center"} fontWeight={"bold"}>
                        André Santos <br/>
                        23 years <br/>
                        Software Developer <br/>
                        Computer Scientist
                    </Typography>
                </Box>

                <Box className="right-side">
                    a
                </Box>
            </nav>
        </Fade>
    );
}