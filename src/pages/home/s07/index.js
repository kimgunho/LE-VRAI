import { useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import gsap from 'gsap';

import LinkButton from '../../../components/global/linkButton';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const S07 = () => {
  const wrapperRef = useRef();
  const descBoxRef = useRef();
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
      .fromTo(descBoxRef.current, { opacity: 0 }, { opacity: 1 });
  }, []);
  return (
    <section className={cx('wrapper')} ref={wrapperRef}>
      <div className={cx('flex')}>
        <h2 className={cx('title')}>
          Premium
          <br />
          Kids Cosmetics
        </h2>
        <div ref={descBoxRef} className={cx('descBox')}>
          <p className={cx('desc')}>
            연약하고 예민한 아이피부는 언제 어디서나 촉촉하고 생기있게 지켜줘야 합니다.
            <br />
            수시로 건조해지고 진정이 필요한 아이들의 피부를 위하여 간편하게 케어할 수 있어야 합니다.
            <br />
            엄마와 아이가 함께, 언제 어디서나 쉽고 빠르게, 르브레 멀티밤과 함께해주세요.
          </p>
          <LinkButton link={'/'} title="SHOP NOW" />
        </div>
      </div>
      <div className={cx('cover')} ref={coverRef} />
    </section>
  );
};

export default S07;
