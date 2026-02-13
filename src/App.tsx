import "./App.css";

function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">Team 07 • CS185</p>
          <h1>Reason Lab - AI Learning Companion Development Log</h1>
          <p className="lead">
            A living record of our experiments, design iterations, and technical
            decisions as we build a supportive AI companion for learners.
          </p>
          <div className="hero-tags">
            <span className="tag">Research-driven</span>
            <span className="tag">Human-centered</span>
            <span className="tag">Iteration-focused</span>
          </div>
          <div>
            <a
              href="https://drive.google.com/drive/folders/1pJ7-bV4TcJ1GCvZaPrTLhmJrIU3Bazs3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Drive Folder
            </a>
          </div>
        </div>
      </header>

      <main className="content">
        <section className="section">
          <div className="section-header">
            <h2>Development Log</h2>
          </div>
          <div className="grid">
            <article className="log-card" style={{ animationDelay: "0ms" }}>
              <h3>GR1 — Needfinding</h3>
              <ul>
                <a
                  href="https://docs.google.com/presentation/d/1nBjcG8Fekon2OWGzjiJQ__aN9x5BAtol6B7MVjcqcCs/edit?slide=id.gd1bf8d60a4_0_0#slide=id.gd1bf8d60a4_0_0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link
                </a>
              </ul>
            </article>
            <article className="log-card" style={{ animationDelay: "80ms" }}>
              <h3>GR2 — POVs, HMWs & Experiment Prototypes</h3>
              <ul>
                <a
                  href="https://docs.google.com/presentation/d/1wbPoS7rR2Bed9Iitcimq1TYqcIEhBZ9pCC2XE6FtaH8/edit?slide=id.gd1bf8d60a4_0_0#slide=id.gd1bf8d60a4_0_0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link
                </a>
              </ul>
            </article>
            <article className="log-card" style={{ animationDelay: "160ms" }}>
              <h3>GR3 — Project Website</h3>
              <ul>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  Link
                </a>
              </ul>
            </article>
            <article className="log-card" style={{ animationDelay: "240ms" }}>
              <h3>GR4 — Concept Video</h3>
              <ul>
                <a
                  href="https://youtu.be/S2MIHdP-X6g](https://youtu.be/S2MIHdP-X6g)"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Video Link
                </a>
                <a
                  href="https://docs.google.com/presentation/d/1gaej_uOVAdJrvRsjxhEvXjTjkVRdPpfx9r8Ud2b1F6M/edit?slide=id.gd1bf8d60a4_0_0#slide=id.gd1bf8d60a4_0_0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Slideshow Link
                </a>
              </ul>
            </article>
            <article className="log-card" style={{ animationDelay: "320ms" }}>
              <h3>GR5 — Sketching, Low-Fi & User Testing</h3>
              <ul>
                <a
                  href="https://docs.google.com/presentation/d/1tbj_LXBQgGJs8Qx35_h6vt9mAH73oC7VkW2u3V8dRwk/edit?slide=id.gd1bf8d60a4_0_0#slide=id.gd1bf8d60a4_0_0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link
                </a>
              </ul>
            </article>
          </div>
        </section>

        <section className="section split">
          <div className="card">
            <h2>Team Members</h2>
            <ul className="team-list">
              <li>Ayala Wang (bozo #1)</li>
              <li>Anthony Wong (bozo #2)</li>
              <li>Junjie Liu (bozo #3) </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>CS185 • Team 07 • AI Learning Companion</p>
      </footer>
    </div>
  );
}

export default App;
