import React from "react";
import { content, currentStack, profile, projects, skillGroups } from "./data/portfolio";
import profileImage from "./images/andreimage.jpg";
import avatarImage from "./images/andre.jpeg";
import certificateApi from "./images/certificates/apis.jpg";
import certificateCodeIgniter from "./images/certificates/codeigniter.jpg";
import certificateGit from "./images/certificates/github.jpg";
import certificatePhp from "./images/certificates/php.jpg";
import certificateSql from "./images/certificates/sql.jpg";
import certificateTeamBuilding from "./images/certificates/teambuilding.jpeg";
import certificateWiseUp from "./images/certificates/wiseup.png";
import "./App.css";

const certificateImages = {
  "APIs Node.js, Express + MongoDB, SQL": certificateApi,
  "Team Building": certificateTeamBuilding,
  "CodeIgniter Framework": certificateCodeIgniter,
  PHP: certificatePhp,
  SQL: certificateSql,
  "Git & GitHub": certificateGit,
  "WiseUp (English)": certificateWiseUp,
  "WiseUp (Inglês)": certificateWiseUp,
};

function Stars({ level, label }) {
  return (
    <div className="stars" aria-label={`${label}: ${level} of 5`} title={`${label}: ${level}/5`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={star <= level ? "star filled" : "star"}>★</span>
      ))}
    </div>
  );
}

function App() {
  const [language, setLanguage] = React.useState(
    () => localStorage.getItem("portfolio-language") || "en"
  );
  const [selectedCertificate, setSelectedCertificate] = React.useState("");
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
          <img src={avatarImage} alt="André Santos" className="brand-avatar" />
          <span className="brand-copy">
            <strong>{profile.name}</strong>
            <small>{profile.role}</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {Object.entries(copy.nav).map(([key, label]) => (
            <button key={key} type="button" onClick={() => scrollTo(key)}>{label}</button>
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
          <a className="header-contact" href={`mailto:${profile.email}`}>{copy.hero.contactCta}</a>
        </div>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy simple-hero">
            <span className="eyebrow">{copy.hero.location}</span>
            <h1>{copy.hero.greeting}</h1>
            <h2 className="hero-role">{copy.hero.title}</h2>
            <p className="hero-description">{copy.hero.description}</p>

            <div className="hero-actions">
              <button className="button-primary" type="button" onClick={() => scrollTo("about")}>
                {copy.hero.primaryCta}
              </button>
              <a className="button-secondary" href={profile.github} target="_blank" rel="noreferrer">
                {copy.hero.secondaryCta}
              </a>
            </div>

            <div className="hero-meta">
              <span>{copy.hero.language}</span>
              <span>{copy.hero.degree}</span>
            </div>
          </div>
        </section>

        <section id="about" className="section-wrap section-grid about-section">
          <div className="about-photo-column">
            <span className="eyebrow">{copy.about.eyebrow}</span>
            <h2>{copy.about.title}</h2>
            <img src={profileImage} alt="André Santos" className="about-photo" />
          </div>
          <div className="section-body">
            <p>{copy.about.body}</p>
            <p>{copy.about.body2}</p>
            <div className="fact-list">
              {copy.about.facts.map((fact) => <span key={fact}>{fact}</span>)}
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
                <div className="experience-side"><span>{item.period}</span><small>{item.location}</small></div>
                <div>
                  <h3>{item.role}</h3>
                  <h4>{item.company}</h4>
                  <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section-wrap">
          <div className="section-heading">
            <span className="eyebrow">{copy.skillsSection.eyebrow}</span>
            <h2>{copy.skillsSection.title}</h2>
            <p className="section-intro">{copy.skillsSection.intro}</p>
          </div>

          <div className="current-stack-block">
            <strong>{copy.skillsSection.current}</strong>
            <div className="pill-list">
              {currentStack.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>

          <div className="skill-legend" aria-label="Skill level legend">
            {copy.skillsSection.legend.map((item, index) => (
              <span key={item}><b>{index + 1}★</b> {item}</span>
            ))}
          </div>

          <div className="skills-large-grid">
            {skillGroups.map((group) => (
              <article className="skill-group-card" key={group.key}>
                <h3>{copy.skillsSection.labels[group.key]}</h3>
                <div className="skill-items-grid">
                  {group.items.map((item) => {
                    const label = item.label || copy.skillsSection.softLabels[item.labelKey];
                    return (
                      <div className="skill-row" key={label}>
                        <span className="skill-name">{label}</span>
                        <Stars level={item.level} label={label} />
                      </div>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-wrap">
          <div className="section-heading project-heading">
            <div><span className="eyebrow">{copy.projectsSection.eyebrow}</span><h2>{copy.projectsSection.title}</h2></div>
            <p>{copy.projectsSection.intro}</p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <span className="project-index">0{index + 1}</span>
                <h3>{project.title}</h3>
                <p>{copy.projectsSection.descriptions[project.descriptionKey]}</p>
                <div className="pill-list compact">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="project-links">
                  <a href={project.repo} target="_blank" rel="noreferrer">
                    {project.secondaryRepo ? copy.projectsSection.frontend : copy.projectsSection.source} ↗
                  </a>
                  {project.secondaryRepo && <a href={project.secondaryRepo} target="_blank" rel="noreferrer">{copy.projectsSection.backend} ↗</a>}
                  {project.live && <a href={project.live} target="_blank" rel="noreferrer">{copy.projectsSection.live} ↗</a>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section-wrap section-grid education-section">
          <div><span className="eyebrow">{copy.education.eyebrow}</span><h2>{copy.education.title}</h2></div>
          <div className="education-content">
            <article className="education-card">
              <div><h3>{copy.education.degree}</h3><p>{copy.education.school}</p></div>
              <div className="education-meta"><span>{copy.education.period}</span><span>{copy.education.location}</span></div>
              <p className="education-detail">{copy.education.detail}</p>
            </article>
            <article className="recognition-card"><span>{copy.education.recognitionTitle}</span><p>{copy.education.recognition}</p></article>
          </div>
        </section>

        <section id="certifications" className="section-wrap certificates-section">
          <div className="section-heading">
            <span className="eyebrow">{copy.certifications.eyebrow}</span>
            <h2>{copy.certifications.title}</h2>
            <p className="section-intro">{copy.certifications.intro}</p>
          </div>

          <div className="certificate-layout">
            <div className="certificate-list" role="tablist" aria-label={copy.certifications.selectLabel}>
              {copy.certifications.courses.map((course) => (
                <button
                  key={course}
                  type="button"
                  className={selectedCertificate === course ? "certificate-option active" : "certificate-option"}
                  onClick={() => setSelectedCertificate(course)}
                >
                  {course}
                </button>
              ))}
            </div>

            <div className="certificate-viewer">
              {selectedCertificate ? (
                <img src={certificateImages[selectedCertificate]} alt={selectedCertificate} />
              ) : (
                <div className="certificate-placeholder">{copy.certifications.selectLabel}</div>
              )}
            </div>
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

      <footer><span>{copy.footer}</span><a href="#top">↑</a></footer>
    </div>
  );
}

export default App;
