/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import hero from '../../assets/profile.png';
import styles from './AboutMe.module.css';
import { constants } from '../../utils/constants';

function About() {
  return (
    <div className={styles.me}>
      <h2>Who I am & more about me</h2>
      <p>
        I’m a Software Engineer who focuses on building scalable, reliable, and
        human-centered digital systems. Over the past two years, I’ve worked
        across real estate platforms, e-commerce systems, AI-powered tools,
        healthcare apps, and community tech initiatives—turning ideas into
        production-ready solutions using modern engineering practices and clean
        architectures.
        <br />
        <br />
        I’ve engineered products like the Beach Resort App with a smooth booking
        experience, PeakPoint Properties for real estate workflows, and multiple
        e-commerce platforms with secure authentication, optimized dashboards,
        and fast, responsive interfaces. I’ve also delivered end-to-end payment
        integrations for businesses, helping them deploy Stripe, Shopify
        gateways, and custom payment flows.
        <br />
        <br />
        One of my most impactful builds is <strong>Eshop</strong>, a multivendor
        Ecommerce platform featuring real-time communication, socket-based chat,
        and a Redis-powered low-latency infrastructure that keeps doctors and
        users connected with instant updates. I’m also working on an AI Image
        Generator App built with modern web technologies, scalable APIs, and
        Cloudinary-based media pipelines.
        <br />
        <br />
        To strengthen my problem-solving mindset, I’ve completed
        <strong> 150+ LeetCode problems in C++ </strong>, focusing on
        algorithms, data structures, optimization patterns, and system-level
        thinking.
        <br />
        <br />
        Beyond engineering, I actively contribute to the tech community as an
        MLSA Beta Ambassador, UEIT Society Marketing Lead, Dev Weekends Core
        Member, and mentor in web development and DSA. I’ve helped organize
        conferences, hackathons, and bootcamps with MLSA-UE, GDSC-UE, and UEIT
        Society— empowering students to learn, collaborate, and innovate.
        <br />
        <br />
        Across everything I build, my goal remains simple: to engineer systems
        that are scalable, seamless, and built with purpose—transforming complex
        requirements into intuitive experiences for real users.
      </p>
    </div>
  );
}

function Education() {
  return (
    <div className={styles.educationSection}>
      <h2>Software Engineering (2015-2019) (Degree Obtained)</h2>
      <h4>Polytechnic University of Pachuca</h4>
      <span>
        Polytechnic University of Pachuca - Pachuca – Ciudad Sahagún Highway
        Km.20, Ex-Hacienda de Santa Bárbara, 43830
      </span>
      <p>
        Studied the Software Engineering career, learning various programming
      </p>
    </div>
  );
}

function Studies() {
  return (
    <>
      <h2>Certificates & Courses</h2>
      <ul className={styles.studiesContainer}>
        <li>
          <a
            title="English Certificate"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.inglesB1}
          >
            • English B1 CEFR - CENLEX IPN - January 11, 2022
          </a>
        </li>
        <li>
          <a
            title="Software Engineering Degree"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.ingSoftware}
          >
            • Software Engineering Degree - UPP - January 17, 2020
          </a>
        </li>
        <li>
          <a
            title="Platzi Profile"
            target="_blank"
            rel="noreferrer noopener"
            href="https://platzi.com/p/AntonioAyola/"
          >
            • Platzi Profile
          </a>
        </li>
        <li>
          <a
            title="English C1 Certificate"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.inglesC1}
          >
            • EF SET English Certificate 70/100 (C1 Advanced) - EF SET 2022
          </a>
        </li>
        <li>
          <a
            title="Scrum Certificate"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.scrumStudy}
          >
            • Scrum Fundamentals Certified - SCRUMstudy - January 29, 2023
          </a>
        </li>
        <li>
          <a
            title="NoCountry Certificate"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.noCountry}
          >
            • No Country - Seleccionado7 - May 1, 2023
          </a>
        </li>
        <li>
          <a
            title="Frontend Certificate"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.frontendDeveloper}
          >
            • Frontend Developer Course - Platzi
          </a>
        </li>
        <li>
          <a
            title="Scrum Certificate"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.scrum}
          >
            • Scrum Course - LinkedIn
          </a>
        </li>
        <li>
          <a
            title="Software Engineering Fundamentals"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.ingDeSoftware}
          >
            • Software Engineering Fundamentals - Platzi
          </a>
        </li>
        <li>
          <a
            title="Algorithms Course"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.algoritmosPensamientoLogico}
          >
            • Algorithms & Logical Thinking - Platzi
          </a>
        </li>
        <li>
          <a
            title="Basic Computing"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.computacionBasica}
          >
            • Basic Computing Course - Platzi
          </a>
        </li>
        <li>
          <a
            title="API REST Course"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.introduccionAPIRest}
          >
            • Intro to API REST - EDTeam
          </a>
        </li>
        <li>
          <a
            title="GIT Certificate"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.git}
          >
            • GIT Course - Udemy
          </a>
        </li>
      </ul>
    </>
  );
}

function CV() {
  return (
    <>
      <h2>Private CV</h2>
      <p>Go to the contact section.</p>
      <button type="button" className="boxShadow" disabled>
        DOWNLOAD CV
      </button>
    </>
  );
}

function Experience() {
  return (
    <>
      <h2>Private</h2>
      <p>Go to the contact section.</p>
      <button type="button" className="boxShadow" disabled>
        Timeline...
      </button>
    </>
  );
}

function AboutMe() {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <section className={styles.aboutMe} id="about">
      <h1 className={styles.title}>About Me</h1>

      <div className={styles.aboutContainer}>
        <div className={styles.AboutRight}>
          <div>
            <ul className={styles.tabs}>
              <li className={activeSection === 0 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(0)}
                  className={styles.tabBtn}
                  aria-label="about"
                >
                  about
                </button>
              </li>

              <li className={activeSection === 2 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(2)}
                  className={styles.tabBtn}
                  aria-label="education"
                >
                  education
                </button>
              </li>

              <li className={activeSection === 3 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(3)}
                  className={styles.tabBtn}
                  aria-label="certificates"
                >
                  certificates
                </button>
              </li>

              <li className={activeSection === 4 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(4)}
                  className={styles.tabBtn}
                  aria-label="experience"
                >
                  experience
                </button>
              </li>

              <li className={activeSection === 5 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(5)}
                  className={styles.tabBtn}
                  aria-label="cv"
                >
                  CV
                </button>
              </li>
            </ul>
            <hr />
          </div>

          <div className={styles.tabContent}>
            {activeSection === 0 && <About />}
            {activeSection === 2 && <Education />}
            {activeSection === 3 && <Studies />}
            {activeSection === 4 && <Experience />}
            {activeSection === 5 && <CV />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
