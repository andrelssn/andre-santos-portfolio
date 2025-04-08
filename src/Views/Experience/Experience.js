import { Fade, Typography, Divider } from "@mui/material";

import "./Style.css";

export default function Experience() {
    return (
        <Fade in={true}>
            <nav className="experience-container">
                <section className="experience-section">
                    <Typography fontSize={26} color="var(--main-text)">
                        Desenvolvedor Full-Stack
                    </Typography>

                    <Divider sx={{ backgroundColor: "var(--main-text)", mt: 0.5, mb: 2 }}/>

                    <div className="job-information-box">
                        <div className="info-section-job" style={{ maxWidth: 200 }}>
                            <span style={{ fontWeight: "bold" }}>Samsung R&D Brasil</span><br/>
                            <span>Estágio</span><br/>
                            <span>Campinas, São Paulo</span><br/>
                            <span>Jun/2023 - At the moment</span>
                        </div>

                        <div className="info-section-job" style={{ paddingLeft: 10, borderLeft: "1px solid var(--main-text)" }}>
                            <ul className="ul-list">
                                <li>
                                    Práticas de desenvolvimento full-stack, tendo como principal ferramenta para front-end o ReactJS, e o back-end sendo feito com PHP e Laravel.
                                </li>

                                <li>
                                    Execução de Query no MySQL, utilização de NodeJS e Laravel para criação de API's.
                                </li>

                                <li>
                                    Utilização de JIRA e Kanban para manusear atividades e tasks, assim como metas mapeadas.
                                </li>

                                <li>
                                    Manutenção e criação de sistemas internos para a empresa, afim de melhorar a experiência dos colaboradores.
                                </li>
                            </ul>
                        </div>

                        <div className="info-section-job" style={{ paddingLeft: 10, borderLeft: "1px solid var(--main-text)", maxWidth: 200 }}>
                            <span style={{ fontWeight: "bold" }}>Competências</span><br/>
                            <span>JavaScript, ReactJS, HTML & CSS, PHP, MySQL, NodeJS, Laravel, CodeIgniter, UX/UI, API Rest, JIRA</span>
                        </div>
                    </div>
                </section>
            </nav>
        </Fade>
    );
}