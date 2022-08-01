import { useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import gsap from 'gsap';

import ProductCard from '../../../components/home/productCard';

import styles from './index.module.scss';

const cx = classNames.bind(styles);
gsap.defaults({ ease: 'none', duration: 10 });

const productArr = [
  {
    title: 'ROUGE',
    descTitle: '코코 루즈',
    desc: '수분감 가득한 페이스앤립용 비건 컬러 멀티밤',
    link: '/',
    color: 'red',
  },
  {
    title: 'ROSE',
    descTitle: '코코 루즈',
    desc: '수분감 가득한 페이스앤립용 비건 컬러 멀티밤',
    link: '/',
    color: 'pink',
  },
  {
    title: 'VERT',
    descTitle: '로로 베르',
    desc: '보습과 진정에 효과를 보이는 페이스앤바디용 비건 케어 멀티밤',
    link: '/',
    color: 'green',
  },
  {
    title: 'BLEU',
    descTitle: '로로 블루',
    desc: '보습과 진정에 효과를 보이는 페이스앤바디용 비건 케어 멀티밤',
    link: '/',
    color: 'blue',
  },
];

const S04 = () => {
  const wrapperRef = useRef();
  const flexRef = useRef();

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          scrub: true,
          pin: true,
          start: 'top top',
          end: '+=800%',
          pinSpacing: true,
        },
      })
      .to(flexRef.current, { left: '-100%', backgroundColor: '#FF6CA5' })
      .to(flexRef.current, { left: '-200%', backgroundColor: '#05A55B' })
      .to(flexRef.current, { left: '-300%', backgroundColor: '#2851E8' });
  }, []);

  return (
    <section className={cx('wrapper')} ref={wrapperRef}>
      <div className={cx('flex')} ref={flexRef}>
        {productArr.map((card, index) => (
          <article key={index} className={cx('card')}>
            <ProductCard data={card} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default S04;
