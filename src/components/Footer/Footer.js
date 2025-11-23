import { useState, lazy, Suspense } from 'react';
import logo1 from '../../assets/logo_fondo_blanco_1.webp';
import line from '../../assets/llline.svg';

import styles from './Footer.module.css';
import scrollTop from '../../utils/helpers/scrollTop';

import Modal from '../Modal/Modal';
import Loader from '../Loader';

const AboutMe = lazy(() => import('../AboutMe/AboutMe'));

const Footer = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Modal
        openModal={modal}
        fnCloseModal={() => setModal(false)}
        styleContent={styles.modalContent}
      >
        <Suspense fallback={<Loader />}>
          <AboutMe />
        </Suspense>
      </Modal>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <p>
            {' '}
            💻{' '}
            <button
              type="button"
              onClick={() => setModal(true)}
              className={styles.userBtn}
            >
              @Ahsaan Ullah{' '}
            </button>{' '}
            en 2025 &#x1F1F2;&#x1F1FD;
          </p>
          <img src={line} alt="" className={styles.svg} />
          <img src={line} alt="" className={styles.svg} />
          <img src={line} alt="" className={styles.svg} />
          <img src={line} alt="" className={styles.svg} />

          <button
            title="Regresar arriba"
            name="Regresar arriba"
            type="button"
            className={styles.floatBtn}
            onClick={scrollTop}
          >
            <i className="fas fa-angle-double-up" />
          </button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
