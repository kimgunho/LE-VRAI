import { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import gsap from 'gsap';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const S02 = () => {
  const wrapperRef = useRef();
  const descRef = useRef();

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          scrub: true,
          start: 'center-=20% center',
          end: 'center+=20% center',
        },
      })
      .fromTo(descRef.current, { opacity: 0 }, { opacity: 1 });
  }, []);

  return (
    <section className={cx('wrapper')} ref={wrapperRef}>
      <p className={cx('desc')} ref={descRef}>
        르브레는 화장품 연구원, 마케터, 디자이너인 엄마아빠가 모여 아이들을 위해
        <br />
        진심을 담아 만든 건강하고 깨끗한 프리미엄 키즈 비건 코스메틱 브랜드입니다.
      </p>
    </section>
  );
};

export default S02;
