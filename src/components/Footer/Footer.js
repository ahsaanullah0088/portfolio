import { useState, lazy, Suspense } from 'react';
import logo from '../../assets/logo_fondo_blanco_1.webp';
import line from '../../assets/llline.svg';

import styles from './Footer.module.css';
import scrollTop from '../../utils/helpers/scrollTop';

import Modal from '../Modal/Modal';
import Loader from '../Loader';

// Lazy load the AboutMe component for performance
const AboutMe = lazy(() => import('../AboutMe/AboutMe'));

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* About Me Modal */}
      <Modal
        openModal={isModalOpen}
        fnCloseModal={() => setIsModalOpen(false)}
        styleContent={styles.modalContent}
      >
        <Suspense fallback={<Loader />}>
          <AboutMe />
        </Suspense>
      </Modal>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          {/* Logo */}
          <div className={styles.logoWrapper}>
            <img
              src={logo}
              alt="Logo"
              width="300"
              height="300"
              className={styles.logoImg}
            />
          </div>

          {/* Author Info */}
          <p className={styles.author}>
            💻 Built by{' '}
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className={styles.userBtn}
            >
              @AntonioAyola
            </button>{' '}
            with 🖤 in 2022 🇵🇰
          </p>

          {/* Decorative lines */}
          <div className={styles.lines}>
            {[...Array(4)].map((_, index) => (
              <img
                key={index}
                src={line}
                alt="decorative line"
                className={styles.svg}
              />
            ))}
          </div>

          {/* Scroll to Top Button */}
          <button
            title="Back to Top"
            type="button"
            className={styles.floatBtn}
            onClick={scrollTop}
          >
            <i className="fas fa-angle-double-up" />
          </button>
        </div>

        {/* Visitor Counter */}
        <p className={styles.visits}>
          Visits:{' '}
          <img
            src="https://counter1.stat.ovh/private/contadorvisitasgratis.php?c=1am2er4yl9uq6du4qfz5hdqc3enw75xt"
            alt="Visitor counter"
            width="20"
            height="10"
            title="Visitor counter"
          />
        </p>
      </footer>
    </>
  );
};

export default Footer;
