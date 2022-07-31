import { useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import gsap from 'gsap';

import logoWhiteSrc from '../../../asset/images/global/logo_white.png';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const S02 = () => {
  const wrapperRef = useRef();
  const listRef = useRef();

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          scrub: true,
          start: 'center center',
          end: 'bottom center',
        },
      })
      .fromTo(listRef.current, { opacity: 0 }, { opacity: 1 });
  }, []);

  return (
    <section className={cx('wrapper')} ref={wrapperRef}>
      <h3 className={cx('title')}>
        <img src={logoWhiteSrc} alt="" />
      </h3>
      <p className={cx('desc')}>
        르브레<span>LEVRAI</span>는 프랑스어로 진실,진리을 의미합니다.
        <br />
        르브레 프로젝트는 코스메틱을 누구보다 잘 아는 아빠, 엄마의 진심을 모아 시작되었습니다. <br />
        화장품 연구원, 마케터, 디자이너인 엄마, 아빠가 아이들에게 꼭 필요한 조각들을 <br />
        \하나씩 채워나가기로 약속한 프로젝트입니다.
      </p>
      <ul className={cx('list')} ref={listRef}>
        <li>SAFE</li>
        <li>ENSEMBLE</li>
        <li>SIMPLE</li>
      </ul>
    </section>
  );
};

export default S02;
