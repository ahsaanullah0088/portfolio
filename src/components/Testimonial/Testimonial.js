import { useState, useEffect, useRef } from 'react';
import Slide from './Slide';
import styles from './Testimonial.module.css';
import testimonialData from './TestimonialData';
import useIsInViewportOnce from '../../utils/hooks/useIsInViewportOnce';

const Testimonial = () => {
  const sectionRef = useRef();
  const isInViewportOnce = useIsInViewportOnce(sectionRef);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = testimonialData.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 6000);

    return () => clearInterval(slider);
  }, [index]);

  return (
    <section id="clients" className={styles.testimonial} ref={sectionRef}>
      <div className="container">
        <div
          className={`${styles.heading} ${
            isInViewportOnce ? 'useSlideInLeft' : 'useSlideInLeftEnter'
          }`}
        >
          <h4>WHAT THEY SAY ABOUT MY WORK</h4>
          <h1>Testimonials</h1>
        </div>

        <div className={styles.pagination}>
          {testimonialData.map((item) => (
            <span
              key={item.id}
              className={`${styles['pagination-dot']} ${
                item.id === index ? styles['pagination-dot--active'] : ''
              }`}
            />
          ))}
        </div>

        <div className={styles.slider}>
          {testimonialData.map((data) => (
            <Slide
              data={data}
              valueIndex={data.id}
              key={data.id}
              index={index}
              dataLength={testimonialData.length}
            />
          ))}

          <div className={styles.slideButtons}>
            <button
              title="previous slide"
              name="previous slide"
              className={styles.sliderBtn}
              type="button"
              onClick={() => setIndex(index - 1)}
            >
              <i className="fas fa-arrow-left" />
            </button>
            <button
              title="next slide"
              name="next slide"
              className={styles.sliderBtn}
              type="button"
              onClick={() => setIndex(index + 1)}
            >
              <i className="fas fa-arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
