export const profile = {
  name: "André Santos",
  role: "Full-Stack Developer",
  location: "Campinas, São Paulo, Brazil",
  email: "andreluissilsan22@gmail.com",
  github: "https://github.com/andrelssn",
  linkedin: "https://www.linkedin.com/in/andresantosdev/",
};

export const currentStack = [
  "React",
  "TypeScript",
  "Python",
  "Django",
  "PostgreSQL",
  "Celery",
  "Node.js",
  "Docker",
  "GitHub Actions",
  "SonarQube",
];

export const skillGroups = [
  {
    key: "frontend",
    items: [
      { label: "JavaScript", level: 4 },
      { label: "TypeScript", level: 3 },
      { label: "React", level: 4 },
      { label: "Next.js", level: 3 },
      { label: "Material UI", level: 5 },
      { label: "Bootstrap", level: 2 },
      { label: "UI/UX", level: 4 },
      { label: "HTML5", level: 4 },
      { label: "CSS3", level: 4 },
      { label: "Tailwind CSS", level: 4 },
    ],
  },
  {
    key: "backend",
    items: [
      { label: "PHP", level: 3 },
      { label: "Laravel", level: 3 },
      { label: "Node.js", level: 2 },
      { label: "Express.js", level: 2 },
      { label: "REST APIs", level: 4 },
      { label: "CodeIgniter", level: 3 },
      { label: "PostgreSQL", level: 4 },
      { label: "MongoDB", level: 4 },
      { label: "MySQL", level: 4 },
      { label: "Java", level: 2 },
      { label: "Spring Boot", level: 1 },
      { label: "C/C++", level: 2 },
    ],
  },
  {
    key: "mobile",
    items: [
      { label: "React Native", level: 2 },
      { label: "Expo", level: 2 },
      { label: "React Native Paper", level: 2 },
    ],
  },
  {
    key: "tools",
    items: [
      { label: "Git", level: 4 },
      { label: "Linux", level: 2 },
      { label: "Docker", level: 2 },
      { label: "Kubernetes", level: 1 },
      { label: "AWS", level: 1 },
      { label: "Bitbucket", level: 4 },
      { label: "Jira", level: 4 },
    ],
  },
  {
    key: "methodologies",
    items: [
      { label: "Scrum", level: 4 },
      { label: "Kanban", level: 4 },
      { label: "Clean Architecture", level: 4 },
      { label: "SOLID", level: 4 },
      { label: "Clean Code", level: 4 },
    ],
  },
  {
    key: "softSkills",
    items: [
      { labelKey: "teamwork", level: 5 },
      { labelKey: "fastLearning", level: 5 },
      { labelKey: "proactivity", level: 5 },
      { labelKey: "adaptability", level: 5 },
      { labelKey: "problemSolving", level: 5 },
      { labelKey: "criticalThinking", level: 5 },
    ],
  },
];

export const projects = [
  {
    title: "Personal Portfolio",
    repo: "https://github.com/andrelssn/andre-santos-portfolio",
    live: "https://andre-santos-dev.vercel.app/",
    tags: ["React", "JavaScript", "Responsive UI", "i18n"],
    descriptionKey: "portfolio",
  },
  {
    title: "Book Gallery",
    repo: "https://github.com/andrelssn/book-gallery-frontend",
    secondaryRepo: "https://github.com/andrelssn/book-gallery-backend",
    tags: ["React", "Material UI", "Vite", "Laravel", "MySQL"],
    descriptionKey: "bookGallery",
  },
  {
    title: "Pet Gallery",
    repo: "https://github.com/andrelssn/pet-gallery-challenge",
    live: "https://pet-gallery-challenge.vercel.app/",
    tags: ["TypeScript", "Next.js", "Material UI", "Tailwind CSS", "TheCatAPI"],
    descriptionKey: "petGallery",
  },
];

export const content = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      education: "Education",
      certifications: "Certificates",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm André Santos.",
      title: "Full-Stack Developer",
      description:
        "I develop web applications and APIs with React, TypeScript, Python/Django and Node.js. I enjoy solving real product problems, improving existing systems and writing software that remains easy to maintain as it grows.",
      primaryCta: "About me",
      secondaryCta: "GitHub",
      contactCta: "Contact me",
      location: "Campinas, Brazil",
      language: "English B2",
      degree: "B.Sc. Computer Science",
    },
    about: {
      eyebrow: "About",
      title: "A little more about me",
      body:
        "I'm a Computer Science graduate and Full-Stack Developer with professional experience in R&D and engineering software. My work includes web interfaces, REST APIs, asynchronous jobs, integrations, report generation, automated tests and deployment workflows.",
      body2:
        "I started my professional journey at Samsung R&D Brazil and today work at SimWorx Eng. P&D. I keep strengthening my software engineering fundamentals while applying them to real products and production code.",
      facts: [
        "Professional experience since 2023",
        "Based in Campinas, São Paulo",
        "English B2 · Portuguese native",
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Professional journey",
      items: [
        {
          company: "SimWorx Eng. P&D",
          role: "Junior Full-Stack Developer",
          period: "Oct 2025 — Present",
          location: "Campinas, São Paulo",
          bullets: [
            "Develop and maintain applications with React/TypeScript, Python/Django and PostgreSQL.",
            "Implemented PDF/DOCX report generation and scheduled or asynchronous workflows with Celery and Celery Beat.",
            "Work with external API integrations, automated tests, SonarQube quality improvements, deployments and application maintenance.",
          ],
        },
        {
          company: "Samsung R&D Brazil",
          role: "Full-Stack Developer Intern",
          period: "Jun 2023 — Jun 2025",
          location: "Campinas, São Paulo",
          bullets: [
            "Developed and maintained internal web applications with React, Material UI, PHP, Laravel, CodeIgniter and MySQL.",
            "Built and integrated REST APIs, delivered features, fixed bugs and improved usability and performance.",
            "Worked collaboratively with Git, Jira and Confluence in an agile R&D environment.",
          ],
        },
      ],
    },
    skillsSection: {
      eyebrow: "Skills",
      title: "Skills & technologies",
      intro:
        "The detailed skill view from my previous portfolio is back. The stars preserve the proficiency levels I had already mapped, while the current professional stack is highlighted separately above.",
      current: "Current professional stack",
      legend: ["Starter", "Basic", "Intermediate", "Advanced", "Proficient"],
      labels: {
        frontend: "Frontend",
        backend: "Backend, languages & data",
        mobile: "Mobile",
        tools: "Tools & technologies",
        methodologies: "Engineering & methodologies",
        softSkills: "Soft skills",
      },
      softLabels: {
        teamwork: "Teamwork",
        fastLearning: "Fast learning",
        proactivity: "Proactivity",
        adaptability: "Adaptability",
        problemSolving: "Problem solving",
        criticalThinking: "Critical thinking",
      },
    },
    projectsSection: {
      eyebrow: "Projects",
      title: "Selected projects",
      intro: "Only the projects I want to keep highlighted in my portfolio.",
      descriptions: {
        portfolio:
          "My personal website, created to present my professional journey, skills, education and selected work in a responsive experience.",
        bookGallery:
          "Full-stack books and authors CRUD with a React/Material UI frontend and a Laravel/MySQL REST API backend.",
        petGallery:
          "Cat-breed discovery application built with TypeScript and Next.js, consuming TheCatAPI and focusing on reusable UI, responsiveness and user experience.",
      },
      source: "Source",
      live: "Live project",
      frontend: "Frontend",
      backend: "Backend",
    },
    education: {
      eyebrow: "Education",
      title: "Academic background",
      degree: "Bachelor of Computer Science",
      school: "IBMEC Unimetrocamp Wyden",
      period: "2021 — 2025",
      location: "Campinas, São Paulo",
      detail:
        "Coursework included software engineering, databases, web development, data structures, networks, cybersecurity, AI, cloud computing, IoT and design patterns.",
      recognitionTitle: "Recognition",
      recognition:
        "Samsung R&D recognition for contribution to company growth during my internship period.",
    },
    certifications: {
      eyebrow: "Certificates",
      title: "Courses & certificates",
      intro:
        "Select a course to view the original certificate image. All certificates that were shown in the previous portfolio are preserved here.",
      selectLabel: "Choose certificate",
      courses: [
        "APIs Node.js, Express + MongoDB, SQL",
        "Team Building",
        "CodeIgniter Framework",
        "PHP",
        "SQL",
        "Git & GitHub",
        "WiseUp (English)",
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk.",
      body:
        "If you'd like to talk about a Full-Stack role, software project or technical collaboration, feel free to reach out.",
      email: "Send email",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: "Built with React · Designed and maintained by André Santos",
  },
  pt: {
    nav: {
      about: "Sobre",
      experience: "Experiência",
      skills: "Habilidades",
      projects: "Projetos",
      education: "Formação",
      certifications: "Certificados",
      contact: "Contato",
    },
    hero: {
      greeting: "Olá, eu sou André Santos.",
      title: "Desenvolvedor Full-Stack",
      description:
        "Desenvolvo aplicações web e APIs com React, TypeScript, Python/Django e Node.js. Gosto de resolver problemas reais de produto, melhorar sistemas existentes e escrever software que continue fácil de manter conforme cresce.",
      primaryCta: "Sobre mim",
      secondaryCta: "GitHub",
      contactCta: "Entrar em contato",
      location: "Campinas, Brasil",
      language: "Inglês B2",
      degree: "Bacharel em Ciência da Computação",
    },
    about: {
      eyebrow: "Sobre",
      title: "Um pouco mais sobre mim",
      body:
        "Sou Bacharel em Ciência da Computação e Desenvolvedor Full-Stack com experiência profissional em P&D e software de engenharia. Meu trabalho envolve interfaces web, APIs REST, jobs assíncronos, integrações, geração de relatórios, testes automatizados e fluxos de deploy.",
      body2:
        "Iniciei minha trajetória profissional na Samsung R&D Brasil e hoje atuo na SimWorx Eng. P&D. Continuo aprofundando fundamentos de engenharia de software enquanto aplico esse conhecimento em produtos reais e código de produção.",
      facts: [
        "Experiência profissional desde 2023",
        "Campinas, São Paulo",
        "Inglês B2 · Português nativo",
      ],
    },
    experience: {
      eyebrow: "Experiência",
      title: "Trajetória profissional",
      items: [
        {
          company: "SimWorx Eng. P&D",
          role: "Desenvolvedor Full-Stack Júnior",
          period: "Out 2025 — Atual",
          location: "Campinas, São Paulo",
          bullets: [
            "Desenvolvimento e manutenção de aplicações com React/TypeScript, Python/Django e PostgreSQL.",
            "Implementação de geração de relatórios PDF/DOCX e rotinas agendadas ou assíncronas com Celery e Celery Beat.",
            "Atuação com integrações de APIs externas, testes automatizados, melhorias de qualidade com SonarQube, deploys e manutenção de aplicações.",
          ],
        },
        {
          company: "Samsung R&D Brasil",
          role: "Estagiário de Desenvolvimento Full-Stack",
          period: "Jun 2023 — Jun 2025",
          location: "Campinas, São Paulo",
          bullets: [
            "Desenvolvimento e manutenção de aplicações web internas com React, Material UI, PHP, Laravel, CodeIgniter e MySQL.",
            "Construção e integração de APIs REST, desenvolvimento de funcionalidades, correção de bugs e melhorias de usabilidade e performance.",
            "Trabalho colaborativo com Git, Jira e Confluence em ambiente ágil de P&D.",
          ],
        },
      ],
    },
    skillsSection: {
      eyebrow: "Habilidades",
      title: "Habilidades & tecnologias",
      intro:
        "A visualização detalhada do portfólio anterior voltou. As estrelas preservam os níveis de proficiência que eu já havia mapeado, enquanto a stack profissional atual fica destacada separadamente acima.",
      current: "Stack profissional atual",
      legend: ["Iniciante", "Básico", "Intermediário", "Avançado", "Proficiente"],
      labels: {
        frontend: "Frontend",
        backend: "Backend, linguagens & dados",
        mobile: "Mobile",
        tools: "Ferramentas & tecnologias",
        methodologies: "Engenharia & metodologias",
        softSkills: "Soft skills",
      },
      softLabels: {
        teamwork: "Trabalho em equipe",
        fastLearning: "Rápido aprendizado",
        proactivity: "Proatividade",
        adaptability: "Rápida adaptação",
        problemSolving: "Solução de problemas",
        criticalThinking: "Pensamento crítico",
      },
    },
    projectsSection: {
      eyebrow: "Projetos",
      title: "Projetos selecionados",
      intro: "Somente os projetos que quero manter em destaque no meu portfólio.",
      descriptions: {
        portfolio:
          "Meu site pessoal, criado para apresentar trajetória profissional, habilidades, formação e trabalhos selecionados em uma experiência responsiva.",
        bookGallery:
          "CRUD full-stack de livros e autores com frontend em React/Material UI e backend REST em Laravel/MySQL.",
        petGallery:
          "Aplicação para explorar raças de gatos desenvolvida com TypeScript e Next.js, consumindo TheCatAPI e com foco em UI reutilizável, responsividade e experiência do usuário.",
      },
      source: "Código",
      live: "Ver projeto",
      frontend: "Frontend",
      backend: "Backend",
    },
    education: {
      eyebrow: "Formação",
      title: "Formação acadêmica",
      degree: "Bacharelado em Ciência da Computação",
      school: "IBMEC Unimetrocamp Wyden",
      period: "2021 — 2025",
      location: "Campinas, São Paulo",
      detail:
        "A formação incluiu engenharia de software, bancos de dados, desenvolvimento web, estruturas de dados, redes, cibersegurança, IA, cloud computing, IoT e padrões de projeto.",
      recognitionTitle: "Reconhecimento",
      recognition:
        "Reconhecimento da Samsung R&D pela contribuição ao crescimento da empresa durante o período de estágio.",
    },
    certifications: {
      eyebrow: "Certificados",
      title: "Cursos & certificados",
      intro:
        "Selecione um curso para visualizar a imagem original do certificado. Todos os certificados apresentados no portfólio anterior foram preservados aqui.",
      selectLabel: "Escolha um certificado",
      courses: [
        "APIs Node.js, Express + MongoDB, SQL",
        "Team Building",
        "CodeIgniter Framework",
        "PHP",
        "SQL",
        "Git & GitHub",
        "WiseUp (Inglês)",
      ],
    },
    contact: {
      eyebrow: "Contato",
      title: "Vamos conversar.",
      body:
        "Se quiser conversar sobre uma vaga Full-Stack, projeto de software ou colaboração técnica, entre em contato.",
      email: "Enviar e-mail",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: "Construído com React · Desenvolvido e mantido por André Santos",
  },
};
