import { useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import gsap from 'gsap';

import ProductCard from '../../../components/home/productCard';

import { productArr } from './constant';
import styles from './index.module.scss';

const cx = classNames.bind(styles);
gsap.defaults({ ease: 'none', duration: 10 });

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
