import './App.css'
import { useEffect, useMemo, useState } from 'react'
import toolsStrip from './assets/group-1899.png'
import profilePic from './assets/profilepic.png'
import sokoroImg from './assets/sokoro.png'
import spotifyImg from './assets/spotify.png'
import remotegemzImg from './assets/remotegemz.jpg'
import scratchImg from './assets/sarctch.webp'

function IconHome(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M3 10.5L12 3l9 7.5V20a1.5 1.5 0 0 1-1.5 1.5h-5.25V15a2.25 2.25 0 0 0-2.25-2.25h-2.5A2.25 2.25 0 0 0 9.75 15v6.5H4.5A1.5 1.5 0 0 1 3 20v-9.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconUser(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 20c0-3.5-3-6.5-7-6.5s-7 3-7 6.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconProjects(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 4h6v6H4V4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 4h6v6h-6V4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 14h6v6H4v-6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 14h6v6h-6v-6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconMail(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m4 7 8 5 8-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function App() {
  const tabs = useMemo(
    () => [
      { id: 'top', href: '#top', label: 'Home', Icon: IconHome },
      { id: 'about', href: '#about', label: 'About', Icon: IconUser },
      { id: 'projects', href: '#projects', label: 'Projects', Icon: IconProjects },
      { id: 'contact', href: '#contact', label: 'Contact', Icon: IconMail },
    ],
    [],
  )

  const [activeTab, setActiveTab] = useState(() => {
    const w = globalThis?.window
    if (!w) return 'top'
    return w.location.hash?.slice(1) || 'top'
  })

  useEffect(() => {
    const w = globalThis.window
    if (!w) return
    const onHashChange = () => setActiveTab(w.location.hash?.slice(1) || 'top')
    w.addEventListener('hashchange', onHashChange)
    return () => w.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    const ids = ['top', 'about', 'projects', 'contact']
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0]
        const id = visible?.target?.id
        if (id) setActiveTab(id)
      },
      {
        threshold: [0.35, 0.55, 0.75],
        rootMargin: '0px 0px -35% 0px',
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="page min-h-screen flex flex-col text-white/95">
      <header className="header">
        <div className="shell header__inner">
          <div className="brand">
            <div className="brand__avatar" aria-hidden="true">
              SS
            </div>
            <div className="brand__text">
              <span className="brand__name">Sameer Shahid</span>
              <span className="brand__tagline">Mobile App Engineer</span>
            </div>
          </div>

          <nav className="nav" aria-label="Primary navigation">
            <a href="#top" className="nav__link hover:text-white hover:-translate-y-0.5 transition">
              Home
            </a>
            <a href="#about" className="nav__link hover:text-white hover:-translate-y-0.5 transition">
              About
            </a>
            <a href="#projects" className="nav__link hover:text-white hover:-translate-y-0.5 transition">
              Projects
            </a>
            <a href="#contact" className="nav__link hover:text-white hover:-translate-y-0.5 transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="shell hero__inner">
            <div className="hero-avatar hero-avatar--glow shadow-[0_0_60px_rgba(148,163,253,0.55)]">
              <img src={profilePic} alt="Sameer Shahid" className="hero-avatar__image" />
            </div>

            <div className="hero-text space-y-2">
              <p className="hero-hello">
                Hello! I am <span className="accent-underline">Sameer Shahid</span>
              </p>
              <p className="hero-role-small">A Mobile App Engineer who</p>
              <h1 className="hero-heading tracking-tight text-balance">
                Judges a book
                <br />
                by its <span className="accent">cover</span>.
              </h1>
              <p className="hero-caption text-sm text-muted-foreground/80">
                Because if the cover does not impress you, what else can?
              </p>

              <div className="hero-primary mt-6">
                <p className="hero-primary-line text-lg font-semibold">
                  I&apos;m a Software Engineer.
                </p>
                <p className="hero-primary-sub">
                  Currently, I&apos;m a Mobile App Engineer (AME) at Sokoro.
                </p>
              </div>

              <p className="hero-body max-w-xl">
                I&apos;m a BSSE graduate from COMSATS University Lahore with a strong focus on mobile and full‑stack
                development. I love crafting delightful, performant experiences that balance user needs with product and
                business goals.
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="section work">
          <div className="shell">
            <header className="section__head">
              <h2 className="section__title">Work Experience</h2>
              <p className="section__kicker">
                Hands-on engineering across mobile, backend, and the web—shipping real products used by real people.
              </p>
            </header>

            <div className="work-grid">
              <article className="card work-card hover:-translate-y-1 hover:shadow-glow-card/80 transition-transform">
                <div className="work-card__icon" aria-hidden="true">
                  <span>RN</span>
                </div>
                <div className="work-card__body">
                  <h3 className="work-card__title">Sokoro</h3>
                  <p className="work-card__role">Junior Mobile App Developer (Full‑Stack)</p>
                  <p className="work-card__meta">Jul 2025 – Present · Calgary, AB · Remote</p>
                  <ul className="work-card__list">
                    <li>Building Sokoro&apos;s mobile app in React Native.</li>
                    <li>Supporting backend features with Node.js.</li>
                    <li>Improving performance, stability, and app architecture.</li>
                  </ul>
                </div>
              </article>

              <article className="card work-card hover:-translate-y-1 hover:shadow-glow-card/80 transition-transform">
                <div className="work-card__icon" aria-hidden="true">
                  <span>WEB</span>
                </div>
                <div className="work-card__body">
                  <h3 className="work-card__title">Team Tech Studio (Official)</h3>
                  <p className="work-card__role">Software Engineer Intern</p>
                  <p className="work-card__meta">Dec 2023 – Feb 2024 · Lahore, Pakistan</p>
                  <ul className="work-card__list">
                    <li>Designed and shipped a new marketing website.</li>
                    <li>Elevated the company&apos;s digital presence and brand.</li>
                    <li>Collaborated end-to-end from concept to launch.</li>
                  </ul>
                </div>
              </article>

              <article className="card work-card hover:-translate-y-1 hover:shadow-glow-card/80 transition-transform">
                <div className="work-card__icon" aria-hidden="true">
                  <span>SEO</span>
                </div>
                <div className="work-card__body">
                  <h3 className="work-card__title">Digital Synergy Management</h3>
                  <p className="work-card__role">Search Engine Optimization Specialist</p>
                  <p className="work-card__meta">Feb 2021 – Aug 2021 · Remote</p>
                  <ul className="work-card__list">
                    <li>SEO strategy and implementation for client visibility.</li>
                    <li>Optimization and analytics.</li>
                  </ul>
                </div>
              </article>

              <article className="card work-card hover:-translate-y-1 hover:shadow-glow-card/80 transition-transform">
                <div className="work-card__icon" aria-hidden="true">
                  <span>KHL</span>
                </div>
                <div className="work-card__body">
                  <h3 className="work-card__title">Khalo</h3>
                  <p className="work-card__role">Freelance Internship · Utility App</p>
                  <p className="work-card__meta">Mar 2022 – Jul 2022 (2 months) · Remote</p>
                  <ul className="work-card__list">
                    <li>Built a utility app as a freelance internship project.</li>
                  </ul>
                </div>
              </article>
            </div>

            <header className="section__head" style={{ marginTop: '2.5rem' }}>
              <h2 className="section__title">Education &amp; Involvement</h2>
              <p className="section__kicker">
                Academic background and society membership.
              </p>
            </header>
            <div className="work-grid">
              <article className="card work-card hover:-translate-y-1 hover:shadow-glow-card/80 transition-transform">
                <div className="work-card__icon" aria-hidden="true">
                  <span>CUI</span>
                </div>
                <div className="work-card__body">
                  <h3 className="work-card__title">COMSATS University Islamabad</h3>
                  <p className="work-card__role">Student</p>
                  <p className="work-card__meta">Feb 2022 – Present · Lahore, Punjab, Pakistan</p>
                  <ul className="work-card__list">
                    <li>Bachelor&apos;s in Software Engineering (BSSE).</li>
                  </ul>
                </div>
              </article>
              <article className="card work-card hover:-translate-y-1 hover:shadow-glow-card/80 transition-transform">
                <div className="work-card__icon" aria-hidden="true">
                  <span>RAS</span>
                </div>
                <div className="work-card__body">
                  <h3 className="work-card__title">RAS · Robotics &amp; Automation Society</h3>
                  <p className="work-card__role">Member</p>
                  <p className="work-card__meta">Aug 2023 – Present · Lahore, Punjab, Pakistan</p>
                  <ul className="work-card__list">
                    <li>Active member of the university robotics and automation society.</li>
                  </ul>
                </div>
              </article>
            </div>

            <header className="section__head" style={{ marginTop: '2.5rem' }}>
              <h2 className="section__title">Certifications &amp; Courses</h2>
              <p className="section__kicker">
                Completed courses and credentials in development and tools.
              </p>
            </header>
            <div className="cert-grid">
              <span className="cert-badge">Version Control</span>
              <span className="cert-badge">Introduction to Mobile Development</span>
              <span className="cert-badge">Programming with JavaScript</span>
              <span className="cert-badge">React</span>
              <span className="cert-badge">Node.js</span>
            </div>
          </div>
        </section>

        <section className="section stack">
          <div className="shell stack__inner">
            <p className="stack__label">A small selection of tools I reach for often</p>
            <div className="stack__icons" aria-hidden="true">
              <img src={toolsStrip} className="stack__sprite" alt="" />
            </div>
            <p className="stack__tags">
              React Native · Java · C++ · Swift (iOS) · Node.js · System Design · Version Control · Data Structures &
              Algorithms
            </p>
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="shell">
            <header className="section__head">
              <h2 className="section__title">Projects</h2>
              <p className="section__kicker">
                A selection of products that show how I think about user experience, architecture, and execution.
              </p>
            </header>

            <div className="project">
              <div className="project__glow" aria-hidden="true" />
              <div className="project__content card backdrop-blur-md hover:-translate-y-1.5 hover:shadow-glow-card/90 transition-transform">
                <div className="project__meta">
                  <p className="project__eyebrow">Local work marketplace</p>
                  <h3 className="project__title">Sokroro</h3>
                  <p className="project__description">
                    A local, Upwork-style platform where people can post jobs and others in their community can get
                    hired to complete them—focused on simple flows, trust, and clear communication.
                  </p>
                  <p className="project__stack">
                    React Native · TypeScript · Node.js · REST APIs · Authentication · Payments
                  </p>
                  <div className="project__actions">
                    <a
                      href="https://github.com/jediwarlord/Sokoro-frontend"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn--ghost"
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>
                <div className="project__frame" aria-hidden="true">
                  <div className="project-window">
                    <div className="project-window__dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="project-window__body">
                    <img src={sokoroImg} alt="Sokoro app screens" className="project-window__img" />
                  </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="project">
              <div className="project__glow" aria-hidden="true" />
              <div className="project__content card backdrop-blur-md hover:-translate-y-1.5 hover:shadow-glow-card/90 transition-transform">
                <div className="project__meta">
                  <p className="project__eyebrow">Music utility</p>
                  <h3 className="project__title">Spotify Downloader</h3>
                  <p className="project__description">
                    A web app that lets users paste Spotify links and download tracks or playlists, built to explore
                    clean APIs, background jobs, and responsive UI patterns.
                  </p>
                  <p className="project__stack">
                    React · Node.js · Express · REST APIs
                  </p>
                </div>
                <div className="project__frame" aria-hidden="true">
                  <div className="project-window">
                    <div className="project-window__dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="project-window__body">
                    <img src={spotifyImg} alt="Spotify Downloader app" className="project-window__img" />
                  </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="project">
              <div className="project__glow" aria-hidden="true" />
              <div className="project__content card backdrop-blur-md hover:-translate-y-1.5 hover:shadow-glow-card/90 transition-transform">
                <div className="project__meta">
                  <p className="project__eyebrow">E‑commerce platform</p>
                  <h3 className="project__title">Sracthch</h3>
                  <p className="project__description">
                    An end-to-end e‑commerce experience with product browsing, carts, and checkout flows, focused on
                    fast, responsive UI and a clean separation between frontend and backend.
                  </p>
                  <p className="project__stack">
                    React · Tailwind CSS · Node.js · REST APIs
                  </p>
                  <div className="project__actions">
                    <a
                      href="https://github.com/X-SAMEER-SHAHID/Scatch"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn--ghost"
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>
                <div className="project__frame" aria-hidden="true">
                  <div className="project-window">
                    <div className="project-window__dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="project-window__body">
                    <img src={scratchImg} alt="Sracthch e-commerce app" className="project-window__img" />
                  </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="project">
              <div className="project__glow" aria-hidden="true" />
              <div className="project__content card backdrop-blur-md hover:-translate-y-1.5 hover:shadow-glow-card/90 transition-transform">
                <div className="project__meta">
                  <p className="project__eyebrow">Software house website</p>
                  <h3 className="project__title">RemoteGemz</h3>
                  <p className="project__description">
                    A marketing website for a software house, focused on clearly presenting services, case studies, and
                    contact flows while staying performant and responsive.
                  </p>
                  <p className="project__stack">React · Tailwind CSS · Node.js</p>
                  <div className="project__actions">
                    <a
                      href="https://github.com/sameer-shahid/remotegemz"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn--ghost"
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>
                <div className="project__frame" aria-hidden="true">
                  <div className="project-window">
                    <div className="project-window__dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="project-window__body">
                    <img src={remotegemzImg} alt="RemoteGemz website" className="project-window__img" />
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile bottom navigation */}
      <nav className="bottom-nav" aria-label="Mobile navigation">
        <div className="bottom-nav__pill">
          {tabs.map(({ id, href, label, Icon }) => (
            <a
              key={id}
              href={href}
              className={`bottom-nav__link ${activeTab === id ? 'bottom-nav__link--active' : ''}`}
              onClick={() => setActiveTab(id)}
            >
              <span className="bottom-nav__icon" aria-hidden="true">
                <Icon />
              </span>
              <span className="bottom-nav__label">{label}</span>
            </a>
          ))}
        </div>
      </nav>

      <footer id="contact" className="footer mt-auto">
        <div className="shell footer__inner">
          <div className="footer__text space-y-2">
            <p className="footer__title">Let&apos;s build something.</p>
            <p className="footer__copy">
              Open to internships, junior roles, and collaborations around mobile and full-stack work.
            </p>
          </div>
          <div className="footer__actions">
            <a href="mailto:sameershahid5911@gmail.com" className="btn btn--primary">
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/sameer-shahid-a05602274"
              target="_blank"
              rel="noreferrer"
              className="btn btn--ghost"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/sameer-shahid"
              target="_blank"
              rel="noreferrer"
              className="btn btn--ghost"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
