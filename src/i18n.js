import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            "Linguagem": "Language",
            "Início": "Home",
            "Sobre Mim": "About me",
            "Habilidades": "Skills",
            "Educação": "Education",
            "Experiências": "Experience",
            "Projetos": "Projects",
            "Reconhecimentos": "Recognitions",
            "Contato": "Contact",
            "Olá! Seja Bem-Vindo!": "Hello! Welcome!",
            "Conheça mais sobre mim!": "Get to know more about me!",
            "Conheça minhas qualificações!": "Discover my qualifications!",
            "Uma visão geral de minha trilha acadêmica.": "An overview of my academic journey.",
            "Saiba mais sobre minhas experiências!": "Learn more about my experiences!",
            "Projetos já desenvolvidos até o momento.": "Projects developed so far.",
            "Confira os reconhecimentos que já recebi!": "Check out the recognitions I've received!",
            "Vamos criar soluções inovadoras juntos?": "Shall we create innovative solutions together?",
            "anos": "years",
            "Desenvolvedor de Software": "Software Developer",
            "Cientista da Computação": "Computer Scientist",
            "Olá! Muito prazer, eu sou André Santos - Desenvolvedor de Software.": "Hello! Nice to meet you, I'm André Santos - Software Developer.",
            "Sou um Desenvolvedor de Software apaixonado, com 2 anos de experiência na área criando soluções inovadoras e eficientes para os usuários. Minha especialidade no momento segue sendo na área de Desenvolvimento Web Full-Stack, onde eu atuo em estágio na Samsung R&D Brazil.": "I am a passionate Software Developer with two years of experience in the field, creating innovative and efficient solutions for users. My current specialty is in Full-Stack Web Development, where I am interning at Samsung R&D Brazil.",
            "Meus principais conhecimentos são com": "My main areas of expertise are in",
            "e": "and",
            " mas clicando": " but clicking",
            "aqui": "here",
            "você poderá ver o resumo completo de minhas qualificações.": "you will be able to see the full summary of my qualifications.",
            "No meu dia a dia, estou sempre estudando ou pesquisando novas tecnologias. Sou empenhado em melhorar continuamente o meu trabalho, garantindo que esteja sempre apto a atuar ativamente neste mercado.": "In my daily life, I am always studying or researching new technologies. I am committed to continuously improving my work, ensuring that I am always ready to actively participate in this market.",
            "Me conheça!": "Get to know me!",
            "Desde criança, sempre fui fascinado por programação. Jogava video-games e me perguntava como os programas eram criados.": "Since childhood, I have always been fascinated by programming. I played video games and wondered how the programs were created.",
            "Com o tempo, essa curiosidade cresceu. Comecei com C/C++, assustador no início, mas tudo fez sentido ao entender lógica e algoritmos.": "Over time, this curiosity grew. I started with C/C++, which was intimidating at first, but everything made sense once I understood logic and algorithms.",
            "Logo, me interessei por desenvolvimento web e me apaixonei por React JS. Meu estágio na Samsung R&D foi essencial para minha jornada como full-stack, trabalhando tanto no Front-End quanto no Back-End.": "Soon, I became interested in web development and fell in love with React JS. My internship at Samsung R&D was essential for my journey as a full-stack developer, working on both the Front-End and Back-End.",
            "Hoje, continuo aprimorando minhas habilidades e explorando novas linguagens, sempre buscando entregar os melhores resultados aos clientes!": "Today, I continue refining my skills and exploring new languages, always striving to deliver the best results for my clients!",
            "Linguagens de Programação": "Programming Languages",
            "Tecnologias e Ferramentas": "Technologies and Tools",
            "Inteligência Emocional": "Emotional Intelligence",
            "Rápida Adaptação": "Quick Adaptation",
            "Rápido Aprendizado": "Fast Learning",
            "Boa Comunicação": "Good Communication",
            "Trabalho em Equipe": "Teamwork",
            "Solução de Problemas": "Problem Solving",
            "Pensamento Crítico": "Critical Thinking",
            "Escolaridade": "Education",
            "Certificações": "Certification",
            "Ensino Superior": "Higher Education",
            "Bacharelado em Ciências da Computação": "Bachelor's Degree in Computer Science",
            "Ensino Médio & Fundamental": "High School & Elementary School",
            "Selecione uma opção": "Select an option",
            "Selecionar": "Select",
            "Certificado": "Certificate",
            "Desenvolvedor Full-Stack": "Full-Stack Developer",
            "Estágio": "Internship",
            "Até o momento": "At the moment",
            "Práticas de desenvolvimento full-stack, tendo como principal ferramenta para front-end o ReactJS, e o back-end sendo feito com PHP e Laravel.": "Full-stack development practices, with ReactJS as the primary front-end tool and PHP with Laravel for the back-end.",
            "Execução de Query no MySQL, utilização de NodeJS e Laravel para criação de API's.": "Execution of queries in MySQL, using NodeJS and Laravel for API development.",
            "Utilização de JIRA e Kanban para manusear atividades e tasks, assim como metas mapeadas.": "Use of JIRA and Kanban to manage activities and tasks, as well as mapped goals.",
            "Manutenção e criação de sistemas internos para a empresa, afim de melhorar a experiência dos colaboradores." : "Maintenance and development of internal systems for the company, aiming to enhance the employees' experience.",
            "Competências": "Skills & Competencies",
            "Sobre": "About",
            "Primeira versão do sistema": "First version of the system",
            "versão": "version",
            "Tecnologias Utilizadas": "Technologies Used",
            "Objetivo e Usabilidade": "Objective and Usability",
            "Este projeto tem como objetivo proporcionar uma plataforma digital profissional e intuitiva para apresentar habilidades, experiências e projetos desenvolvidos. Ele foi criado para oferecer uma identidade visual única, destacando as conquistas de forma atraente e acessível": "This project aims to provide a professional and intuitive digital platform for showcasing skills, experiences, and developed projects. It was designed to offer a unique visual identity, highlighting achievements in an engaging and accessible way.",
            "Com um design básico e responsivo, o portfólio permite que recrutadores, clientes e colaboradores visualizem as informações de maneira clara e organizada. Além disso, a estrutura do projeto facilita futuras atualizações e expansões, garantindo que ele permaneça relevante ao longo do tempo.": "With a simple and responsive design, the portfolio allows recruiters, clients, and collaborators to view information clearly and in an organized manner. Additionally, the project structure facilitates future updates and expansions, ensuring it remains relevant over time.",
            "Estrutura do Projeto": "Project Structure",
            "Sistema desenvolvido utilizando rotas, com a biblioteca React Router Dom": "The system is developed using routes with the React Router Dom library, ensuring smooth navigation between different pages.",
            "Responsividade para dispositivos mobile e desktop": "The system is designed with responsiveness in mind, ensuring a seamless experience on both mobile and desktop devices.",
            "Certificado de Reconhecimento": "Recognition Certificate",
            "Email para contato": "Contact Email",
            "Enviar e-mail": "Send Email",
            "Redes Sociais": "Social Media"
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
            resources,
            lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
            // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
            // if you're using a language detector, do not define the lng option

            interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

  export default i18n;