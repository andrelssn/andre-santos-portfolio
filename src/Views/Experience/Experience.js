import React from "react";
import { Fade, Typography, Divider } from "@mui/material";
import { Trans } from "react-i18next";

import "./Style.css";

export default function Experience({ updateKeyHeader }) {

    React.useEffect(() => {
        updateKeyHeader(window.location.pathname.substring(0));
    }, []);

    return (
        <Fade in={true}>
            <section className="experience-container">
                <Typography variant="h4" color="var(--secondary)" fontWeight="bold" mb={3}>
                    <Trans>Experiências Profissionais</Trans>
                </Typography>

                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-dot" />
                        <div className="timeline-card">
                            <Typography variant="h6" color="var(--secondary)" fontWeight="bold">
                                <Trans>Desenvolvedor Full-Stack</Trans>
                            </Typography>
                            <Typography variant="subtitle2" color="var(--secondary)" mb={1}>
                                <Trans>Samsung R&D Brasil | Campinas, São Paulo | Jun/2023 - Jun/2025</Trans>
                            </Typography>

                            <Divider sx={{ backgroundColor: "rgba(255,255,255,0.15)", my: 1 }}/>

                            <ul className="timeline-list">
                                <li><Trans>Práticas de desenvolvimento full-stack, tendo como principal ferramenta para front-end o ReactJS, e o back-end sendo feito com PHP e Laravel.</Trans></li>
                                <li><Trans>Execução de Query no MySQL, utilização de NodeJS e Laravel para criação de API's.</Trans></li>
                                <li><Trans>Utilização de JIRA e Kanban para manusear atividades e tasks, assim como metas mapeadas.</Trans></li>
                                <li><Trans>Manutenção e criação de sistemas internos para a empresa, afim de melhorar a experiência dos colaboradores.</Trans></li>
                            </ul>

                            <Typography variant="body2" mt={1} fontWeight="bold" color="var(--secondary)">
                                <Trans>Competências</Trans>:
                            </Typography>
                            <Typography variant="body2" color="var(--text)">
                                JavaScript, ReactJS, HTML & CSS, PHP, MySQL, NodeJS, Laravel, CodeIgniter, UX/UI, API Rest, JIRA
                            </Typography>
                        </div>
                    </div>
                </div>
            </section>
        </Fade>
    );
}