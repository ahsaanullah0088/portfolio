import { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import styles from './styles.module.css';
import Card from './Card';

import PortfolioData from '../Portfolio/PortfolioData';

// Define portfolio categories
const categories = [
  'ALL',
  'FRONTEND',
  'WEB DESIGN',
  'APPLICATION',
  'COLLABORATION',
];

function Index() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [projectsList, setProjectsList] = useState(PortfolioData);

  // Filter projects based on category
  function filterProjects(category) {
    if (category !== 'ALL') {
      const filteredList = PortfolioData.filter(
        (project) => project.category === category,
      );
      setProjectsList(filteredList);
    } else {
      setProjectsList(PortfolioData);
    }
  }

  return (
    <section className={styles.allPortfolio}>
      <div className="container">
        {/* Section heading */}
        <div className={styles.heading}>
          <h4>CHECK OUT THE PROJECTS IN MY PORTFOLIO</h4>
          <h1>Portfolio</h1>
        </div>

        {/* Category filter tabs */}
        <div className={styles.tagsContainer}>
          <p>Filter by Category-&gt;</p>
          <ul className={styles.tabs}>
            {categories.map((category, index) => (
              <li
                key={index}
                className={activeCategoryIndex === index ? styles.active : null}
              >
                <button
                  type="button"
                  onClick={() => {
                    setActiveCategoryIndex(index);
                    filterProjects(category);
                  }}
                  className={styles.tabBtn}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Projects grid with transition effects */}
        <TransitionGroup className={styles.contentGrid}>
          {projectsList.map((project) => (
            <CSSTransition
              key={project.id}
              timeout={500}
              classNames="transition"
            >
              <Card key={project.id} project={project} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </section>
  );
}

export default Index;
