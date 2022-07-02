import { useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import gsap from 'gsap';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const S06 = () => {
  const wrapperRef = useRef();
  const descRef = useRef();
  const coverRef = useRef();

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          scrub: true,
          pin: true,
          start: 'top top',
          end: 'bottom top',
        },
      })
      .to(coverRef.current, { top: 0 })
      .fromTo(descRef.current, { opacity: 0 }, { opacity: 1 });
  }, []);
  return (
    <section className={cx('wrapper')} ref={wrapperRef}>
      <div className={cx('flex')}>
        <h2 className={cx('title')}>
          Real Vegan
          <br />
          Product
        </h2>
        <p className={cx('desc')} ref={descRef}>
          자연에서 유래된 안심할 수 있는 성분들로 만들었습니다.
          <br />
          전 제품 프랑스 EVE 비건 인증 100%로 고품질의 식물성 원료를 가득 담은 키즈 코스메틱입니다.
          <br />
          믿을 수 있는 제조사와 임상기관의 피부 테스트를 거쳐,
          <br />
          안심하고 마음껏 바를 수 있도록 모든 과정을 꼼꼼하게 관리합니다.
        </p>
      </div>
      <div className={cx('cover')} ref={coverRef} />
    </section>
  );
};

export default S06;
