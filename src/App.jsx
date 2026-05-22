import './App.css'

const featuredProjects = [
  {
    name: 'ZYNRA.PK',
    description:
      'A modern e-commerce website built with Next.js, preserving original styles while delivering a scalable, production-ready experience.',
    tags: ['TypeScript', 'Next.js', 'E-commerce'],
    url: 'https://github.com/MuhammadMahad0002/ZYNRA.PK',
  },
  {
    name: 'Fluency-Pro',
    description:
      'An interactive JavaScript product built for smooth UX, dynamic interactions, and refined frontend polish.',
    tags: ['JavaScript', 'Frontend', 'UX Focus'],
    url: 'https://github.com/MuhammadMahad0002/Fluency-Pro',
  },
  {
    name: 'N-Body-Gravity',
    description:
      'A physics-based simulation modeling dynamic particle systems using the N-body algorithm for complex computational behavior.',
    tags: ['Simulation', 'C/C++', 'Makefile'],
    url: 'https://github.com/MuhammadMahad0002/N-Body-Gravity',
  },
]

const miniProjects = [
  {
    name: 'HoenScanner Microservice',
    description: 'Backend microservice focused on scanning and parsing with Java.',
    url: 'https://github.com/MuhammadMahad0002/HoenScanner-microservice',
  },
  {
    name: 'Resume Tailor App',
    description: 'TypeScript web app for customizing and tailoring resumes.',
    url: 'https://github.com/MuhammadMahad0002/resume-tailor-app',
  },
  {
    name: 'Amazon Clone',
    description: 'HTML/CSS clone focused on layout and styling practice.',
    url: 'https://github.com/MuhammadMahad0002/Amazon-Clone',
  },
  {
    name: 'Form Validation',
    description: 'JavaScript form validation practice project.',
    url: 'https://github.com/MuhammadMahad0002/Form-Validation',
  },
  {
    name: 'Profile Card',
    description: 'TypeScript profile card UI experiment.',
    url: 'https://github.com/MuhammadMahad0002/Profile-Card',
  },
  {
    name: 'Ramadan Reminder',
    description: 'JavaScript reminder app focused on clean UI.',
    url: 'https://github.com/MuhammadMahad0002/Ramadan-Reminder',
  },
]

const externalLinkProps = {
  target: '_blank',
  rel: 'noreferrer noopener',
}

function App() {
  return (
    <>
      <a className="skip-link" href="#projects">
        Skip to content
      </a>

      <header className="hero">
        <div className="hero__glow" aria-hidden="true" />
        <p className="hero__eyebrow">Software Developer</p>
        <h1>Muhammad Mahad</h1>
        <p className="hero__subtitle">
          Crafting modern web experiences, scalable microservices, and immersive
          simulations.
        </p>
        <div className="cta-group" role="group" aria-label="Primary actions">
          <a className="btn" href="https://github.com/MuhammadMahad0002" {...externalLinkProps}>
            View GitHub
          </a>
          <a className="btn btn--secondary" href="#projects">
            Explore Projects
          </a>
        </div>
      </header>

      <main className="container" id="projects">
        <section aria-labelledby="featured-projects-heading">
          <h2 id="featured-projects-heading" className="section-title">
            Featured Projects
          </h2>
          <p className="section-subtitle">
            Three standout projects that best represent my skills and the work I
            want to showcase.
          </p>

          <div className="grid">
            {featuredProjects.map((project) => (
              <article className="card" key={project.name}>
                <span className="feature-tag">FEATURED</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ul className="tags" aria-label={`${project.name} technologies`}>
                  {project.tags.map((tag) => (
                    <li className="tag" key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
                <a className="card-link" href={project.url} {...externalLinkProps}>
                  View on GitHub <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="mini-projects-heading">
          <h2 id="mini-projects-heading" className="section-title section-title--spaced">
            Mini Practice Projects
          </h2>
          <p className="section-subtitle">
            Smaller builds and experiments that show my learning journey and creative
            practice.
          </p>

          <div className="mini-grid">
            {miniProjects.map((project) => (
              <article className="mini-card" key={project.name}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a className="card-link" href={project.url} {...externalLinkProps}>
                  View <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Muhammad Mahad. Crafted with passion and precision.</p>
      </footer>
    </>
  )
}

export default App
