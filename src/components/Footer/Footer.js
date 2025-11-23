import { useState, lazy, Suspense } from 'react';
import line from '../../assets/llline.svg';
import styles from './Footer.module.css';
import scrollTop from '../../utils/helpers/scrollTop';
import logo from '../../assets/Logo.png';

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
          <div className="img">
            <img
              width="300px"
              height="300px"
              src={logo}
              className={styles.logoImg}
              alt=""
            />
          </div>
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
        <p className={styles.visitas}>
          Num Visitors
          <img
            width="20px"
            height="10px"
            src="https://counter1.stat.ovh/private/contadorvisitasgratis.php?c=1am2er4yl9uq6du4qfz5hdqc3enw75xt"
            border="0"
            title="contador de visitas"
            alt="contador de visitas"
          />
        </p>
      </footer>
    </>
  );
};

export default Footer;
