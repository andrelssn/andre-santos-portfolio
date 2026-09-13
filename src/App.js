import React from "react";
import { content, profile, projects, skills } from "./data/portfolio";
import "./App.css";

function App() {
  const [language, setLanguage] = React.useState(
    () => localStorage.getItem("portfolio-language") || "en"
  );

  const copy = content[language];

  React.useEffect(() => {
    localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  }, [language]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <a href="#top" className="brand" aria-label="André Santos home">
          <span className="brand-mark">AS</span>
          <span className="brand-copy">
            <strong>{profile.name}</strong>
            <small>{profile.role}</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {Object.entries(copy.nav).map(([key, label]) => (
            <button key={key} type="button" onClick={() => scrollTo(key)}>
              {label}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="language-toggle"
            onClick={() => setLanguage((current) => (current === "en" ? "pt" : "en"))}
            aria-label="Change language"
          >
            {language === "en" ? "PT" : "EN"}
          </button>
          <a className="header-contact" href={`mailto:${profile.email}`}>
            {copy.hero.contactCta}
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <span className="eyebrow">{copy.hero.eyebrow}</span>
            <h1>{copy.hero.title}</h1>
            <p className="hero-description">{copy.hero.description}</p>

            <div className="hero-actions">
              <button className="button-primary" type="button" onClick={() => scrollTo("experience")}>
                {copy.hero.primaryCta}
              </button>
              <a className="button-secondary" href={profile.github} target="_blank" rel="noreferrer">
                {copy.hero.secondaryCta}
              </a>
            </div>

            <div className="hero-meta" aria-label="Profile highlights">
              <span>{copy.hero.availability}</span>
              <span>{copy.hero.language}</span>
              <span>{copy.hero.degree}</span>
            </div>
          </div>

          <aside className="hero-card" aria-label="Developer profile summary">
            <div className="status-line">
              <span className="status-dot" />
              {profile.role}
            </div>
            <div className="code-card">
              <p><span>const</span> developer = &#123;</p>
              <p className="code-indent">frontend: <strong>"React + TypeScript"</strong>,</p>
              <p className="code-indent">backend: <strong>"Python/Django + Node.js"</strong>,</p>
              <p className="code-indent">focus: <strong>"quality + maintainability"</strong>,</p>
              <p className="code-indent">location: <strong>"Campinas, BR"</strong></p>
              <p>&#125;;</p>
            </div>
          </aside>
        </section>

        <section id="about" className="section-wrap section-grid about-section">
          <div>
            <span className="eyebrow">{copy.about.eyebrow}</span>
            <h2>{copy.about.title}</h2>
          </div>
          <div className="section-body">
            <p>{copy.about.body}</p>
            <p>{copy.about.body2}</p>
            <div className="stats-grid">
              {copy.about.stats.map((stat) => (
                <div className="stat-card" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section-wrap">
          <div className="section-heading">
            <span className="eyebrow">{copy.experience.eyebrow}</span>
            <h2>{copy.experience.title}</h2>
          </div>

          <div className="timeline">
            {copy.experience.items.map((item) => (
              <article className="experience-card" key={`${item.company}-${item.period}`}>
                <div className="experience-side">
                  <span>{item.period}</span>
                  <small>{item.location}</small>
                </div>
                <div>
                  <h3>{item.role}</h3>
                  <h4>{item.company}</h4>
                  <ul>
                    {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section-wrap">
          <div className="section-heading">
            <span className="eyebrow">{copy.skillsSection.eyebrow}</span>
            <h2>{copy.skillsSection.title}</h2>
          </div>

          <div className="skills-grid">
            {skills.map((group) => (
              <article className="skill-card" key={group.key}>
                <h3>{copy.skillsSection.labels[group.key]}</h3>
                <div className="pill-list">
                  {group.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-wrap">
          <div className="section-heading project-heading">
            <div>
              <span className="eyebrow">{copy.projectsSection.eyebrow}</span>
              <h2>{copy.projectsSection.title}</h2>
            </div>
            <p>{copy.projectsSection.intro}</p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <span className="project-index">0{index + 1}</span>
                <h3>{project.title}</h3>
                <p>{copy.projectsSection.descriptions[project.descriptionKey]}</p>
                <div className="pill-list compact">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <div className="project-links">
                  <a href={project.repo} target="_blank" rel="noreferrer">
                    {project.secondaryRepo ? copy.projectsSection.frontend : copy.projectsSection.source} ↗
                  </a>
                  {project.secondaryRepo && (
                    <a href={project.secondaryRepo} target="_blank" rel="noreferrer">
                      {copy.projectsSection.backend} ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section-wrap section-grid education-section">
          <div>
            <span className="eyebrow">{copy.education.eyebrow}</span>
            <h2>{copy.education.title}</h2>
          </div>
          <div className="education-content">
            <article className="education-card">
              <div>
                <h3>{copy.education.degree}</h3>
                <p>{copy.education.school}</p>
              </div>
              <div className="education-meta">
                <span>{copy.education.period}</span>
                <span>{copy.education.location}</span>
              </div>
              <p className="education-detail">{copy.education.detail}</p>
            </article>
            <article className="recognition-card">
              <span>{copy.education.recognitionTitle}</span>
              <p>{copy.education.recognition}</p>
            </article>
          </div>
        </section>

        <section id="contact" className="section-wrap contact-section">
          <span className="eyebrow">{copy.contact.eyebrow}</span>
          <h2>{copy.contact.title}</h2>
          <p>{copy.contact.body}</p>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>{copy.contact.email}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">{copy.contact.linkedin}</a>
            <a href={profile.github} target="_blank" rel="noreferrer">{copy.contact.github}</a>
          </div>
        </section>
      </main>

      <footer>
        <span>{copy.footer}</span>
        <a href="#top">↑</a>
      </footer>
    </div>
  );
}

export default App;
