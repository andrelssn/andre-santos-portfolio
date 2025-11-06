import { Trans } from "react-i18next"

import teamwork from "../../../images/softskills/trabalhoequipe.png"
import fastlearn from "../../../images/softskills/aprendizado.png"
import proactiveness from "../../../images/softskills/proactiveness.png"
import quickadapt from "../../../images/softskills/adaptacao.png"
import problemsolution from "../../../images/softskills/problemsolution.png"
import criticalthink from "../../../images/softskills/critico.png"

export const SoftSkills = [
    {
        label: <Trans>Trabalho em Equipe</Trans>,
        level: 5,
        img: teamwork
    },
    {
        label: <Trans>Rápido Aprendizado</Trans>,
        level: 5,
        img: fastlearn
    },
    {
        label: <Trans>Proatividade</Trans>,
        level: 5,
        img: proactiveness
    },
    {
        label: <Trans>Rápida Adaptação</Trans>,
        level: 5,
        img: quickadapt
    },
    {
        label: <Trans>Solução de Problemas</Trans>,
        level: 5,
        img: problemsolution
    },
    {
        label: <Trans>Pensamento Crítico</Trans>,
        level: 5,
        img: criticalthink
    },
]