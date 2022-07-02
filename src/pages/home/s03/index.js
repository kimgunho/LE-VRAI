import { useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import gsap from 'gsap';

import AutoCarousel from '../../../components/global/autoCarousel';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const S03 = () => {
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

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          scrub: true,
          start: 'center-=30% center',
          end: 'center center',
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
      .to(line12Ref.current, { opacity: 1 });
  }, []);
  return (
    <>
      <section className={cx('wrapper')} ref={wrapperRef}>
        <div className={cx('info')}>
          <p className={cx('desc')}>
            <span ref={line01Ref}>아이들을 </span>
            <span ref={line02Ref}>위한 </span>
            <span ref={line03Ref}>르브레의 </span>
            <span ref={line04Ref}>첫 </span>
            <span ref={line05Ref}>번째 </span>
            <span ref={line06Ref}>프로젝트 </span>
            <br />
            <span ref={line07Ref}>프리미엄 </span>
            <span ref={line08Ref}>비건 </span>
            <span ref={line09Ref}>키즈 </span>
            <span ref={line10Ref}>코스메틱 </span>
            <span ref={line11Ref}>로로&amp;코코 </span>
            <span ref={line12Ref}>멀티밤 </span>
          </p>
          <p className={cx('subDesc')}> RORO &amp; COCO MULTI BALM </p>
        </div>
      </section>
      <AutoCarousel />
    </>
  );
};

export default S03;
