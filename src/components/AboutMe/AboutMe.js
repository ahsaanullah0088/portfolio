/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
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
        I’ve also delivered end-to-end payment integrations for businesses,
        helping them deploy Stripe, Shopify gateways, and custom payment flows.
        <br />
        One of my most impactful builds is <strong>Eshop</strong>, a multivendor
        Ecommerce platform featuring real-time communication, socket-based chat,
        and a Redis-powered low-latency infrastructure that keeps doctors and
        users connected with instant updates. I’m also working on an AI Image
        Generator App built with modern web technologies, scalable APIs, and
        Cloudinary-based media pipelines.
        <br />
        To strengthen my problem-solving mindset, I’ve completed
        <strong> 150+ LeetCode problems in C++ </strong>, focusing on
        algorithms, data structures, optimization patterns, and system-level
        thinking.
        <br />
        Beyond engineering, I actively contribute to the tech community as an
        MLSA Beta Ambassador, UEIT Society Marketing Lead, Dev Weekends Core
        Member, and mentor in web development and DSA. I’ve helped organize
        conferences, hackathons, and bootcamps with MLSA-UE, GDSC-UE, and UEIT
        Society— empowering students to learn, collaborate, and innovate.
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
      <h2>BSIT (2022-2026) (Continue)</h2>
      <h4>University of Education</h4>
      <span>University of Education - Township,Lahore,Pakistan</span>
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
            title="Silver Certificate"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.DevWeekends}
          >
            • Full Stack Development - DevWeekends - September 17, 2025
          </a>
        </li>
      </ul>
    </>
  );
}
function Experience() {
  return (
    <section className="experienceSection">
      <h2 className="title">Experience</h2>

      <div className="aboutContainer">
        <div className="AboutRight">
          <h3>Associate Software Engineer (MERN)</h3>
          <p>
            <strong>Infini Studio</strong> | Jun '25 — Sep '25 | Lahore,
            Pakistan (Remote)
          </p>
          <ul>
            <li>
              I was responsible for transforming UI/UX designs into fully
              functional, responsive web applications using Tailwind CSS and
              Material UI. I ensured seamless dynamic data flow by building
              reusable data-fetching logic, normalizing API responses, managing
              global and local state with React hooks, and optimizing re-renders
              using useMemo and dependency-based updates.
            </li>
            <li>
              My role included implementing secure payment gateways such as
              Stripe, FasyPay, and Google Pay, optimizing RESTful APIs, and
              managing application state using useReducer and useState for a
              seamless user experience. I also contributed to building and
              debugging features, and deploying production-ready applications on
              Vercel, AWS, Netlify, and Render.
            </li>
            <li>
              Implemented secure payment gateways (Stripe, PayPal), advanced
              form validations, cart systems, and admin features.
            </li>
            <li>
              Worked with APIs including Cloudinary (image upload), Nodemailer
              (email), and Google Maps (location).
            </li>
          </ul>
        </div>
      </div>
    </section>
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
                  Education
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
            </ul>
            <hr />
          </div>

          <div className={styles.tabContent}>
            {activeSection === 0 && <About />}
            {activeSection === 2 && <Education />}
            {activeSection === 3 && <Studies />}
            {activeSection === 4 && <Experience />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
