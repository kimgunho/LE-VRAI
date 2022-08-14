import { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import gsap from 'gsap';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const S02 = () => {
  const containerRef = useRef();
  const descRef = useRef();

  useEffect(() => {
    gsap.from(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: '-10% top',
        end: '+=100%',
        toggleClass: {
          targets: descRef.current,
          className: cx('enable'),
        },
      },
    });
  }, []);

  return (
    <section ref={containerRef} className={cx('container')}>
      <p ref={descRef} className={cx('desc')}>
        르브레는 화장품 연구원, 마케터, 디자이너인 엄마아빠가 모여
        <br />
        아이들을 위해 진심을 담아 만든 프리미엄 키즈 비건 코스메틱 브랜드입니다.
      </p>
    </section>
  );
};

export default S02;
