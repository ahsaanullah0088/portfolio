import { useState, useEffect, useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import hero from '../../assets/profile2.png';
import styles from './Hero.module.css';
import { constants } from '../../utils/constants';
import useIsInViewport from '../../utils/hooks/useIsInViewport';

function Hero() {
  const sectionRef = useRef();
  const isInViewport = useIsInViewport(sectionRef);
  const [activeNav, setActiveNav] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setActiveNav(window.scrollY > 100);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className={
        activeNav ? `${styles.hero} ${styles.heroActive}` : styles.hero
      }
      id="home"
      ref={sectionRef}
    >
      <div className={styles.heroContainer}>
        <div className={styles.heroLeft}>
          <h4
            className={isInViewport ? 'useSlideInLeft' : 'useSlideInLeftEnter'}
          >
            HELLO WORLD!
          </h4>

          <h1>
            Hi, I&#39;m <span>Ahsaan Ullah</span>
          </h1>

          <h2>
            a
            <Typewriter
              words={[
                ' Software Engineer',
                ' Full Stack Engineer',
                ' MERN Stack Developer',
                ' Backend Developer',
                ' Problem Solver',
              ]}
              loop={5}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>

          <h3>
            A passionate developer who loves building modern, fast, and scalable
            web applications. Skilled in MERN Stack with strong expertise in
            React, Node.js, Express, MongoDB, Redux, Tailwind CSS, and more.
            Always exploring new technologies and taking on projects.
          </h3>

          <div className={styles.socialSkills}>
            <div className={`col_1 ${isInViewport ? styles.slideIn : ''}`}>
              <h5>FIND ME HERE</h5>
              <div className={styles.socialContainer}>
                <a
                  title="Github Profile"
                  href={constants.profilesUrls.github}
                  className={styles.socialBtn}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Github Profile"
                >
                  <i className="fa-brands fa-github" />
                </a>
                <a
                  title="LinkedIn Profile"
                  href={constants.profilesUrls.linkedin}
                  className={styles.socialBtn}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Linkedin Profile"
                >
                  <i className="fa-brands fa-linkedin-in" />
                </a>
                <a
                  title="Facebook Profile"
                  href={constants.profilesUrls.facebook}
                  className={styles.socialBtn}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Facebook Profile"
                >
                  <i className="fa-brands fa-facebook-f" />
                </a>
              </div>
            </div>

            <div className={`col_1 ${isInViewport ? styles.slideIn : ''}`}>
              <h5>DOWNLOAD RESUME</h5>
              <a
                href="https://drive.google.com/uc?export=download&id=1OPiaoNlPxxoZ497HpWWV2knDArjwVtyX"
                download="Ahsaan_Ullah_Resume.pdf"
                className={styles.downloadBtn}
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.rightImg}>
            <img
              width="300px"
              height="400px"
              src={hero}
              alt="hero"
              className={styles.img}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
