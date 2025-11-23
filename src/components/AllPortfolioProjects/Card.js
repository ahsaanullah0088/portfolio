import { useState, memo, lazy, Suspense } from 'react';
import Modal from '../Modal/Modal';
import Loader from '../Loader';

import styles from './Card.module.css';

// Lazy load the ModalCard component for performance optimization
const ModalCard = lazy(() => import('../Portfolio/ModalCard'));

const Card = ({ project }) => {
  const { id, category, date, title, image } = project;
  const [modalOpen, setModalOpen] = useState(false);

  // Dynamically import the project image
  // eslint-disable-next-line import/no-dynamic-require
  const img = require(`../../assets/portfolio/${image}`);

  return (
    <>
      {/* Modal for displaying project details */}
      <Modal openModal={modalOpen} fnCloseModal={() => setModalOpen(false)}>
        <Suspense fallback={<Loader />}>
          <ModalCard project={project} />
        </Suspense>
      </Modal>

      {/* Card preview for the project */}
      <article
        className={styles.card}
        onClick={() => setModalOpen(true)}
        onKeyPress={() => setModalOpen(true)}
        role="presentation"
      >
        {/* Project category */}
        <div className={styles.category}>
          <span>{category}</span>
        </div>

        {/* Project image */}
        <div className={styles.img}>
          <img width="300px" height="300px" src={img} alt={title} />
        </div>

        {/* Project date */}
        <span className={styles.date}>
          <i className="fas fa-calendar-alt" /> • {date}
        </span>

        {/* Project title and arrow icon */}
        <div>
          <h2>{title}</h2>
          <span className={styles.arrow}>
            <i className="fas fa-arrow-right" />
          </span>
        </div>
      </article>
    </>
  );
};

export default memo(Card);
