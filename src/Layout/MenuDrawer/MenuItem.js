import { Trans } from 'react-i18next';

import HomeIcon from '@mui/icons-material/Home';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SchoolIcon from '@mui/icons-material/School';
import HistoryIcon from '@mui/icons-material/History';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import StarIcon from '@mui/icons-material/Star';
import ContactMailIcon from '@mui/icons-material/ContactMail';

export const menuList = [
    {
        label: <Trans>Início</Trans>,
        route: "/",
        icon: HomeIcon
    },
    {
        label: <Trans>Habilidades</Trans>,
        route: "/skills",
        icon: AutoAwesomeIcon
    },
    {
        label: <Trans>Educação</Trans>,
        route: "/education",
        icon: SchoolIcon
    },
    {
        label: <Trans>Experiências</Trans>,
        route: "/experiences",
        icon: HistoryIcon
    },
    {
        label: <Trans>Projetos</Trans>,
        route: "/projects",
        icon: WysiwygIcon
    },
    {
        label: <Trans>Reconhecimentos</Trans>,
        route: "/recognitions",
        icon: StarIcon
    },
    {
        label: <Trans>Contato</Trans>,
        route: "/contact",
        icon: ContactMailIcon
    },
]