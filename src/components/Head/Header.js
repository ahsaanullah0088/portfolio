import { useState, lazy, Suspense, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import scrollTop from '../../utils/helpers/scrollTop';
import useToggle from '../../utils/hooks/useToggle';
import useScrollInto from '../../utils/hooks/useScrollInto';
import useScrollSpy from '../../utils/hooks/useScrollSpy';

import logo1 from '../../assets/Logo.png';
import styles from './Header.module.css';
import Loader from '../Loader';
import Modal from '../Modal/Modal';
// eslint-disable-next-line import/newline-after-import
import { constants } from '../../utils/constants';
const ModalConfig = lazy(() => import('./ModalConfig'));

const socialIcons = {
  linkedin: FaLinkedin,
  github: FaGithub,
  whatsapp: FaWhatsapp,
};

const socialLinks = ['linkedin', 'github', 'whatsapp'];

const Header = () => {
  const { open, handleOpen, handleClose } = useToggle();
  const [mobile, setMobile] = useState(false);
  const [activeNav, setActiveNav] = useState(false);
  const [isReadyForInstall, setIsReadyForInstall] = useState(false);
  const scrollTo = useScrollInto();
  useScrollSpy();

  useEffect(() => {
    const handleScroll = () => {
      setMobile(false);
      setActiveNav(window.scrollY > 100);
    };

    const handlePWAInit = (event) => {
      window.deferredPrompt = event;
      setIsReadyForInstall(true);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('beforeinstallprompt', handlePWAInit);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeinstallprompt', handlePWAInit);
    };
  }, []);

  const toggleMobileNav = () => setMobile(!mobile);
  const removeMobileNav = () => setMobile(false);
  const handleLink = (section) => {
    removeMobileNav();
    scrollTo(section);
  };

  const downloadApp = async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) return;
    promptEvent.prompt();
    const result = await promptEvent.userChoice;
    window.deferredPrompt = null;
    setIsReadyForInstall(false);
    console.log('Install result:', result);
  };

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Modal
          openModal={open}
          fnCloseModal={handleClose}
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
              alt="<Ahsaan Ullah/>"
              className={styles.logo}
            />
          </button>

          {/* Desktop nav */}
          <ul className={styles.navLinks}>
            <li className="about">
              <a title="about me" href="#!" onClick={() => handleLink('about')}>
                about me
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
            <li className="clients">
              <a
                title="recommendations"
                href="#!"
                onClick={() => handleLink('clients')}
              >
                recommendations
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

            {/* Modal Settings */}
            <li>
              <a title="settings" href="#!" onClick={handleOpen}>
                <i className={styles.cogBtn} title="Theme Config" />
              </a>
            </li>

            {/* Resume button */}
            <li>
              <a
                className={styles.homeBtn}
                href={constants.profilesUrls.cv}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>

            {/* Social icons */}
            {socialLinks.map((key) => {
              const Icon = socialIcons[key];
              return (
                <li key={key}>
                  <a
                    href={constants.profilesUrls[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={key}
                  >
                    <Icon size={24} />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile nav */}
          <ul
            className={`${styles.navMobileLinks} ${
              mobile ? styles.navMobileLinksWidth : ''
            }`}
          >
            <li className="about">
              <a title="about me" href="#!" onClick={() => handleLink('about')}>
                about me
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
            <li className="clients">
              <a
                title="recommendations"
                href="#!"
                onClick={() => handleLink('clients')}
              >
                recommendations
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

            {/* Modal Settings */}
            <li>
              <a title="settings" href="#!" onClick={handleOpen}>
                <i className={styles.cogBtn} title="Theme Config" />
              </a>
            </li>

            {/* Resume */}
            <li>
              <a
                className={styles.homeBtn}
                href={constants.profilesUrls.cv}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>

            {/* Social icons */}
            {socialLinks.map((key) => {
              const Icon = socialIcons[key];
              return (
                <li key={key}>
                  <a
                    href={constants.profilesUrls[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={key}
                  >
                    <Icon size={24} />
                  </a>
                </li>
              );
            })}

            {/* PWA install */}
            {isReadyForInstall && (
              <li>
                <button
                  className={styles.homeBtn}
                  type="button"
                  onClick={downloadApp}
                >
                  Install App
                </button>
              </li>
            )}
          </ul>

          {/* Mobile toggle button */}
          <button
            className={mobile ? styles.closeBtn : styles.openBtn}
            onClick={toggleMobileNav}
            type="button"
            title="Open Side Menu"
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
