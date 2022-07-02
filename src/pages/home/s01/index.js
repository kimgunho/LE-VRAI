import { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import gsap from 'gsap';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const S01 = () => {
  const wrapperRef = useRef();
  const descRef = useRef();

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          scrub: true,
          start: 'top top',
          end: 'top+=20% top',
        },
      })
      .fromTo(descRef.current, { opacity: 0 }, { opacity: 1 });
  }, []);

  return (
    <section className={cx('wrapper')} ref={wrapperRef}>
      <div className={cx('info')}>
        <h2 className={cx('title')}>LE VRAI</h2>
        <p className={cx('desc')} ref={descRef}>
          Premium Vegan Cosmetics for Kids
          <br />
          that fills the happy moments of mothers and children
        </p>
      </div>
    </section>
  );
};

export default S01;
