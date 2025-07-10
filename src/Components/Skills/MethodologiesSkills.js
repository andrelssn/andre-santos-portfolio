import { Box, CircularProgress, Fade, Grid, Rating, Typography } from "@mui/material";

// Styles
import "./Style.css";

// Imgs
import { Methodologies } from "./SkillsGroups/Methodologies";

export default function MethodologiesSkills() {

    if(!Methodologies) return <CircularProgress sx={{ margin: "auto" }}/>;

    return (
        <Fade in={true}>
            <div className="skill-container">
                <Grid container spacing={2}>
                    { Methodologies.map((data) => {
                        return (
                            <Grid item xs={12} md={3} sx={{ display: "flex", justifyContent: "center" }}>
                                <div className="card">
                                    <div class="card-content">
                                        <img src={data.img} alt={data.label} className="icons-skills"/>

                                        <Box>
                                            <Typography textAlign={"center"} fontWeight={"bold"} color="var(--text)">
                                                {data.label}
                                            </Typography>

                                            <Rating
                                                value={data.level}
                                                readOnly
                                                sx={{
                                                    '& .MuiRating-iconEmpty': {
                                                        color: '#999999'
                                                    },
                                                }}
                                            />
                                        </Box>
                                    </div>
                                </div>
                            </Grid>
                        );
                    })}
                </Grid>
            </div>
        </Fade>
    );
}