export const profile = {
  name: "André Santos",
  role: "Full-Stack Developer",
  location: "Campinas, São Paulo, Brazil",
  email: "andreluissilsan22@gmail.com",
  github: "https://github.com/andrelssn",
  linkedin: "https://www.linkedin.com/in/andresantosdev/",
};

export const skills = [
  {
    key: "frontend",
    items: ["React", "TypeScript", "JavaScript", "Next.js", "Vite", "Material UI"],
  },
  {
    key: "backend",
    items: ["Python", "Django", "FastAPI", "Node.js", "Express", "PHP", "Laravel", "CodeIgniter"],
  },
  {
    key: "data",
    items: ["PostgreSQL", "MySQL", "Celery", "Celery Beat", "REST APIs", "JWT"],
  },
  {
    key: "mobile",
    items: ["React Native", "Expo"],
  },
  {
    key: "devops",
    items: ["Docker", "GitHub Actions", "CI/CD", "Railway", "Vercel", "Linux", "SonarQube"],
  },
  {
    key: "engineering",
    items: ["SOLID", "Clean Code", "Design Patterns", "Refactoring", "Scrum", "Kanban"],
  },
];

export const projects = [
  {
    title: "L0gik — Lead Manager",
    repo: "https://github.com/andrelssn/Lead-Manager",
    tags: ["Next.js", "Node.js", "Express", "Prisma", "MySQL"],
    descriptionKey: "leadManager",
  },
  {
    title: "Task Manager API",
    repo: "https://github.com/andrelssn/tasks-manager-api",
    tags: ["FastAPI", "SQLModel", "Pytest", "GitHub Actions"],
    descriptionKey: "taskManager",
  },
  {
    title: "Book Gallery",
    repo: "https://github.com/andrelssn/book-gallery-frontend",
    secondaryRepo: "https://github.com/andrelssn/book-gallery-backend",
    tags: ["React", "Material UI", "Vite", "Laravel", "MySQL"],
    descriptionKey: "bookGallery",
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
      contact: "Contact",
    },
    hero: {
      eyebrow: "Full-Stack Developer · Campinas, Brazil",
      title: "I build reliable software from interface to API.",
      description:
        "I work across React/TypeScript frontends and Python/Django or Node.js backends, with experience in asynchronous processing, integrations, reporting, testing and CI/CD.",
      primaryCta: "View experience",
      secondaryCta: "GitHub",
      contactCta: "Contact me",
      availability: "Professional experience since 2023",
      language: "English B2",
      degree: "B.Sc. Computer Science",
    },
    about: {
      eyebrow: "About",
      title: "Engineering with product context and maintainability in mind.",
      body:
        "I'm a Computer Science graduate and Full-Stack Developer who enjoys turning requirements into practical, maintainable software. My experience spans internal R&D systems, engineering applications, APIs, asynchronous jobs, reports, integrations and deployment workflows.",
      body2:
        "I care about clear architecture, code quality, good developer experience and interfaces that are simple for people to use. I keep studying software engineering fundamentals while applying them to real projects.",
      stats: [
        { value: "2023", label: "Professional start" },
        { value: "2", label: "Professional companies" },
        { value: "B2", label: "English" },
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
      title: "Technologies I use to ship software",
      labels: {
        frontend: "Frontend",
        backend: "Backend",
        data: "Data & Async",
        mobile: "Mobile",
        devops: "DevOps & Quality",
        engineering: "Engineering",
      },
    },
    projectsSection: {
      eyebrow: "Projects",
      title: "Selected public work",
      intro:
        "A small selection of public repositories that shows different parts of my stack — full-stack product work, Python APIs and React/Laravel applications.",
      descriptions: {
        leadManager:
          "Lead management system with a public capture form, campaign parameter tracking, admin dashboard and CSV export, built as a full-stack application.",
        taskManager:
          "FastAPI task-management backend with SQLModel, SQLite, automated tests with Pytest and a GitHub Actions pipeline.",
        bookGallery:
          "Full-stack books and authors CRUD with a React/Material UI frontend and a Laravel/MySQL REST API backend.",
      },
      source: "Source",
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
    contact: {
      eyebrow: "Contact",
      title: "Let's build something useful.",
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
      contact: "Contato",
    },
    hero: {
      eyebrow: "Desenvolvedor Full-Stack · Campinas, Brasil",
      title: "Construo software confiável da interface à API.",
      description:
        "Atuo com frontends em React/TypeScript e backends em Python/Django ou Node.js, com experiência em processamento assíncrono, integrações, relatórios, testes e CI/CD.",
      primaryCta: "Ver experiência",
      secondaryCta: "GitHub",
      contactCta: "Entrar em contato",
      availability: "Experiência profissional desde 2023",
      language: "Inglês B2",
      degree: "Bacharel em Ciência da Computação",
    },
    about: {
      eyebrow: "Sobre",
      title: "Engenharia com contexto de produto e manutenção em mente.",
      body:
        "Sou Bacharel em Ciência da Computação e Desenvolvedor Full-Stack. Gosto de transformar requisitos em software prático e sustentável. Minha experiência passa por sistemas internos de P&D, aplicações de engenharia, APIs, jobs assíncronos, relatórios, integrações e fluxos de deploy.",
      body2:
        "Valorizo arquitetura clara, qualidade de código, boa experiência de desenvolvimento e interfaces simples para quem usa o produto. Continuo aprofundando fundamentos de engenharia de software enquanto aplico esse conhecimento em projetos reais.",
      stats: [
        { value: "2023", label: "Início profissional" },
        { value: "2", label: "Empresas na carreira" },
        { value: "B2", label: "Inglês" },
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
      title: "Tecnologias que uso para entregar software",
      labels: {
        frontend: "Frontend",
        backend: "Backend",
        data: "Dados & Assíncrono",
        mobile: "Mobile",
        devops: "DevOps & Qualidade",
        engineering: "Engenharia",
      },
    },
    projectsSection: {
      eyebrow: "Projetos",
      title: "Trabalhos públicos selecionados",
      intro:
        "Uma pequena seleção de repositórios públicos que mostra diferentes partes da minha stack — produto full-stack, APIs Python e aplicações React/Laravel.",
      descriptions: {
        leadManager:
          "Sistema de gerenciamento de leads com formulário público, captura de parâmetros de campanha, painel administrativo e exportação CSV, desenvolvido como aplicação full-stack.",
        taskManager:
          "Backend de gerenciamento de tarefas em FastAPI com SQLModel, SQLite, testes automatizados com Pytest e pipeline no GitHub Actions.",
        bookGallery:
          "CRUD full-stack de livros e autores com frontend em React/Material UI e backend REST em Laravel/MySQL.",
      },
      source: "Código",
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
    contact: {
      eyebrow: "Contato",
      title: "Vamos construir algo útil.",
      body:
        "Se quiser conversar sobre uma vaga Full-Stack, projeto de software ou colaboração técnica, entre em contato.",
      email: "Enviar e-mail",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: "Construído com React · Desenvolvido e mantido por André Santos",
  },
};
