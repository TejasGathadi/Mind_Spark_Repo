import "../css/Careers.css";

export default function Careers() {
  // ✅ Make sure this email is correct (change if needed)
  const email = "outreachmindsparkedutech@gmail.com";
  const mailtoLink = (role) =>
    `mailto:${email}?subject=Application%20for%20${encodeURIComponent(role)}`;

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <div className="careers-hero">
        <div className="hero-inner">
          <h1>Join Mindspark EduTech</h1>
          <p className="lead">
            Be part of our mission to inspire young minds through robotics and
            STEM education. We're looking for enthusiastic interns who are
            passionate about teaching, technology, and innovation. Gain hands-on
            experience, mentorship from experienced educators, and opportunities
            to build engaging learning activities.
          </p>
          <div className="hero-cta">
            <a href="#roles" className="btn-learn">
              See Open Positions
            </a>
          </div>
        </div>
      </div>

      {/* Internship Roles */}
      <section id="roles" className="roles-section">
        <h2>Open Internship Positions</h2>
        <div className="roles-grid">
          {/* Training & Software Development Intern */}
          <article className="role-card">
            <div className="role-header">
              <h3>Intern — Training & Software Development</h3>
              <span className="badge">Hands-on • STEM • Classroom</span>
            </div>
            <p className="role-desc">
              Assist in delivering interactive robotics lessons, help students
              build and program robots, and design playful projects that make
              STEM fun and accessible.
            </p>
            <ul className="role-list">
              <li>Help run workshops and lab sessions (online/offline)</li>
              <li>
                Assist students with hardware & programming (Blockly / Scratch /
                Arduino)
              </li>
              <li>Prepare hands-on lesson materials and activity guides</li>
              <li>Support mentor-led assessment and progress tracking</li>
            </ul>
            <div className="role-meta">
              <div className="meta-left">
                <strong>Duration:</strong> 6/12 months
              </div>
              <div className="meta-right">
                <strong>Location:</strong> Pune (On-Site)
              </div>
            </div>
            <div className="role-actions">
              <a
                href={mailtoLink("Robotics & Teaching Internship")}
                className="btn-apply"
                target="_blank"
                rel="noreferrer"
              >
                Apply — Training & SD
              </a>
            </div>
          </article>

          {/* Marketing & Outreach Intern */}
          <article className="role-card">
            <div className="role-header">
              <h3>Intern — Marketing & Outreach</h3>
              <span className="badge">Communications • Growth • Social</span>
            </div>
            <p className="role-desc">
              Help us spread the word about Mindspark — plan campaigns, create
              social content, reach out to schools and communities, and measure
              engagement.
            </p>
            <ul className="role-list">
              <li>Support digital campaigns and content creation</li>
              <li>Community outreach to schools and parent groups</li>
              <li>Collect feedback and help refine program messaging</li>
              <li>Assist in event coordination and student sign-ups</li>
            </ul>
            <div className="role-meta">
              <div className="meta-left">
                <strong>Duration:</strong> 6/12 months
              </div>
              <div className="meta-right">
                <strong>Location:</strong> Pune (On-Site)
              </div>
            </div>
            <div className="role-actions">
              <a
                href={mailtoLink("Marketing & Outreach Internship")}
                className="btn-apply"
                target="_blank"
                rel="noreferrer"
              >
                Apply — Marketing
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* Job Positions */}
      <section className="roles-section">
        <h2>Open Job Positions</h2>
        <div className="roles-grid">
          {/* Business Development Executive */}
          <article className="role-card">
            <div className="role-header">
              <h3>Marketing & Business Development Executive (BDE)</h3>
              <span className="badge">Sales • Partnerships • Growth</span>
            </div>
            <p className="role-desc">
              Drive business growth by building relationships, identifying new
              opportunities, and expanding Mindspark EduTech’s reach into
              schools, communities, and educational institutions.
            </p>
            <ul className="role-list">
              <li>
                Identify and connect with potential partner schools and
                organizations
              </li>
              <li>
                Pitch Mindspark’s STEM and robotics programs to decision makers
              </li>
              <li>Maintain and grow strong client relationships</li>
              <li>Collaborate with the marketing team to support campaigns</li>
              <li>Achieve monthly and quarterly sales targets</li>
            </ul>
            <div className="role-meta">
              <div className="meta-left">
                <strong>Experience:</strong> 0–1 years (Freshers welcome)
              </div>
              <div className="meta-right">
                <strong>Location:</strong> Pune (On-Site)
              </div>
            </div>
            <div className="role-actions">
              <a
                href={mailtoLink("Business Development Executive")}
                className="btn-apply"
                target="_blank"
                rel="noreferrer"
              >
                Apply — BDE
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="careers-footer">
        <p>
          To apply, please send your CV and a short note about why you'd like to
          join us to{" "}
          <a
            href={`mailto:${email}`}
            className="email-link"
            target="_blank"
            rel="noreferrer"
          >
            {email}
          </a>
          .
        </p>
        <p className="small">
          Mindspark EduTech welcomes applicants from diverse backgrounds.
        </p>
      </footer>
    </div>
  );
}
