import { useState, lazy, Suspense, useEffect } from 'react';

import scrollTop from '../../utils/helpers/scrollTop';
import useToggle from '../../utils/hooks/useToggle';
import useScrollInto from '../../utils/hooks/useScrollInto';
import useScrollSpy from '../../utils/hooks/useScrollSpy';

import logo1 from '../../assets/Logo.png';
import styles from './Header.module.css';

import Modal from '../Modal/Modal';
import Loader from '../Loader';

const ModalConfig = lazy(() => import('./ModalConfig'));
const AboutMe = lazy(() => import('../AboutMe/AboutMe'));

const Header = () => {
  const [modal, setModal] = useState(false);

  const { open, handleOpen, handleClose } = useToggle();
  const [mobile, setMobile] = useState(false);
  const [activeNav, setActiveNav] = useState(false);
  const [isReadyForInstall, setIsReadyForInstall] = useState(false);
  const scrollTo = useScrollInto();
  useScrollSpy();

  useEffect(() => {
    function handleScroll() {
      setMobile(false);
      window.scrollY > 100 ? setActiveNav(true) : setActiveNav(false);
    }
    window.addEventListener('scroll', handleScroll);

    function handlePWAInit(event) {
      console.log('👍', 'beforeinstallprompt', event);
      window.deferredPrompt = event;
      setIsReadyForInstall(true);
    }

    window.addEventListener('beforeinstallprompt', handlePWAInit);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeinstallprompt', handlePWAInit);
    };
  }, []);

  const toggleMobileNav = () => {
    setMobile(!mobile);
  };

  const removeMobileNav = () => {
    setMobile(false);
  };

  const handleLink = (section) => {
    removeMobileNav();
    scrollTo(section);
  };

  async function downloadApp() {
    console.log('👍', 'install-button-clicked');
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      console.log('No saved prompt event found');
      return;
    }
    promptEvent.prompt();
    const result = await promptEvent.userChoice;
    console.log('👍', 'userChoice', result);
    window.deferredPrompt = null;
    setIsReadyForInstall(false);
  }

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Modal openModal={modal} fnCloseModal={() => setModal(false)}>
          <AboutMe />
        </Modal>

        <Modal
          openModal={open}
          fnCloseModal={() => handleClose()}
          styleOverlay={styles.modalContentConfigOverlay}
        >
          <ModalConfig />
        </Modal>
      </Suspense>

      <header className={activeNav ? styles.headerActive : styles.header}>
        <nav className={styles.nav}>
          <button type="button" onClick={scrollTop}>
            <img
              width="200px"
              height="50px"
              src={logo1}
              alt="<AntonioAyola/>"
              className={styles.logo}
            />
          </button>

          <ul className={styles.navLinks}>
            <li className="home">
              <a title="home" href="#!" onClick={() => handleLink('home')}>
                home
              </a>
            </li>
            <li className="features">
              <a
                title="skills"
                href="#!"
                onClick={() => handleLink('features')}
              >
                skills
              </a>
            </li>
            <li className="portfolio">
              <a
                title="portfolio"
                href="#!"
                onClick={() => handleLink('portfolio')}
              >
                portfolio
              </a>
            </li>
            <li className="about">
              <a title="about me" href="#!" onClick={() => setModal(true)}>
                ABOUT ME
              </a>
            </li>
            <li className="clients">
              <a
                title="recommendations"
                href="#!"
                onClick={() => handleLink('clients')}
              >
                Recommendations
              </a>
            </li>
            <li className="blog">
              <a title="blog" href="#!" onClick={() => handleLink('blog')}>
                blog
              </a>
            </li>
            <li className="contact">
              <a
                title="contact"
                href="#!"
                onClick={() => handleLink('contact')}
              >
                contact
              </a>
            </li>
            <li>
              <a title="settings" href="#!" onClick={() => handleOpen()}>
                <i className={styles.cogBtn} title="Theme Config" />
              </a>
            </li>

            {isReadyForInstall ? (
              <li>
                <button
                  className={styles.homeBtn}
                  type="button"
                  onClick={() => downloadApp(true)}
                >
                  Install App
                </button>
              </li>
            ) : (
              <li>
                <button
                  className={styles.homeBtn}
                  type="button"
                  onClick={() => setModal(true)}
                >
                  SEE MORE
                </button>
              </li>
            )}
          </ul>

          {true && (
            <ul
              className={`${styles.navMobileLinks} ${
                mobile ? styles.navMobileLinksWidth : ''
              }`}
            >
              <li className="home">
                <a title="home" href="#!" onClick={() => handleLink('home')}>
                  home
                </a>
              </li>
              <li className="features">
                <a
                  title="skills"
                  href="#!"
                  onClick={() => handleLink('features')}
                >
                  skills
                </a>
              </li>
              <li className="portfolio">
                <a
                  title="portfolio"
                  href="#!"
                  onClick={() => handleLink('portfolio')}
                >
                  portfolio
                </a>
              </li>
              <li className="about">
                <a
                  title="about me"
                  href="#!"
                  onClick={() => {
                    setMobile(false);
                    setModal(true);
                  }}
                >
                  about me
                </a>
              </li>
              <li className="recommendations">
                <a
                  title="recommendations"
                  href="#!"
                  onClick={() => handleLink('clients')}
                >
                  Recommendations
                </a>
              </li>
              <li className="blog">
                <a title="blog" href="#!" onClick={() => handleLink('blog')}>
                  blog
                </a>
              </li>
              <li className="contact">
                <a
                  title="contact"
                  href="#!"
                  onClick={() => handleLink('contact')}
                >
                  contact
                </a>
              </li>
              <li>
                <a title="settings" href="#!" onClick={() => handleOpen()}>
                  <i className={styles.cogBtn} title="Theme Config" />
                </a>
              </li>

              {isReadyForInstall ? (
                <li>
                  <button
                    className={styles.homeBtn}
                    type="button"
                    onClick={() => downloadApp(true)}
                  >
                    Install App
                  </button>
                </li>
              ) : (
                <li>
                  <button
                    className={styles.homeBtn}
                    type="button"
                    onClick={() => {
                      setMobile(false);
                      setModal(true);
                    }}
                  >
                    SEE MORE
                  </button>
                </li>
              )}
            </ul>
          )}

          <button
            className={mobile ? styles.closeBtn : styles.openBtn}
            onClick={toggleMobileNav}
            type="button"
            title="Open Side Menu"
            name="Open Side Menu"
          >
            <i
              className={
                mobile ? styles['btn-close-icon'] : styles['btn-open-icon']
              }
            />
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
