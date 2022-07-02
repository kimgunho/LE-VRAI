import { useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import gsap from 'gsap';

import logo from '../../../asset/images/global/logo.png';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const S05 = () => {
  const wrapperRef = useRef();
  const line01Ref = useRef();
  const line02Ref = useRef();
  const line03Ref = useRef();
  const line04Ref = useRef();
  const line05Ref = useRef();
  const line06Ref = useRef();
  const line07Ref = useRef();
  const line08Ref = useRef();
  const line09Ref = useRef();
  const line10Ref = useRef();
  const line11Ref = useRef();
  const line12Ref = useRef();
  const line13Ref = useRef();
  const line14Ref = useRef();

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          scrub: true,
          start: 'top center',
          end: 'center+=30% center',
          markers: true,
        },
      })
      .to(line01Ref.current, { opacity: 1 })
      .to(line02Ref.current, { opacity: 1 })
      .to(line03Ref.current, { opacity: 1 })
      .to(line04Ref.current, { opacity: 1 })
      .to(line05Ref.current, { opacity: 1 })
      .to(line06Ref.current, { opacity: 1 })
      .to(line07Ref.current, { opacity: 1 })
      .to(line08Ref.current, { opacity: 1 })
      .to(line09Ref.current, { opacity: 1 })
      .to(line10Ref.current, { opacity: 1 })
      .to(line11Ref.current, { opacity: 1 })
      .to(line12Ref.current, { opacity: 1 })
      .to(line13Ref.current, { opacity: 1 })
      .to(line14Ref.current, { opacity: 1 });
  }, []);
  return (
    <>
      <section className={cx('wrapper')} ref={wrapperRef}>
        <div className={cx('info')}>
          <p className={cx('desc')}>
            <span ref={line01Ref}>Premium </span>
            <span ref={line02Ref}>Vegan </span>
            <span ref={line03Ref}>Cosmetics </span>
            <span ref={line04Ref}>for </span>
            <span ref={line05Ref}>Kids </span>
            <br />
            <span ref={line06Ref}>that </span>
            <span ref={line07Ref}>fills </span>
            <span ref={line08Ref}>the </span>
            <span ref={line09Ref}>happy </span>
            <span ref={line10Ref}>moments </span>
            <span ref={line11Ref}>of </span>
            <span ref={line12Ref}>mothers </span>
            <span ref={line13Ref}>and </span>
            <span ref={line14Ref}>children</span>
          </p>
          <img className={cx('logo')} src={logo} alt="" />
        </div>
      </section>
    </>
  );
};

export default S05;
