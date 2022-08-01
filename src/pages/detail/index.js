import { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import gsap from 'gsap';

import { useParams } from 'react-router-dom';

import BasicInfo from '../../components/detail/basicInfo';

import { productInfoArr } from './data';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Detail = () => {
  const wrapperRef = useRef();
  const productContainerRed = useRef();

  const { title } = useParams();
  const productObj = productInfoArr[title];

  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        scrub: true,
        pin: productContainerRed.current,
        start: 'top top',
        end: 'bottom bottom',
      },
    });
  }, []);

  return (
    <main className={cx('wrapper')} ref={wrapperRef}>
      <div className={cx('productContainer')} ref={productContainerRed}>
        <BasicInfo dataObj={productObj} />
      </div>
      <article className={cx('detailInfo')}>깊은내용</article>
    </main>
  );
};

export default Detail;
