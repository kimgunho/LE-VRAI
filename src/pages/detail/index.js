import { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import gsap from 'gsap';

import { useParams } from 'react-router-dom';

import AutoCarousel from '../../components/global/autoCarousel';
import BasicInfo from '../../components/detail/basicInfo';
import DetailTop from '../../components/detail/detailTop';
import DetailBottom from '../../components/detail/detailBottom';
import BLEU from './components/bleu';
import ROSE from './components/rose';
import ROUGE from './components/rouge';
import VERT from './components/vert';

import { productArr } from '../../constants';
import { productInfoObj } from './constants';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Detail = () => {
  const wrapperRef = useRef();
  const productContainerRed = useRef();

  const { title } = useParams();
  const productObj = productInfoObj[title];

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
      <div className={cx('flexBox')}>
        <div className={cx('productContainer')} ref={productContainerRed}>
          <BasicInfo dataObj={productObj} />
        </div>
        <article className={cx('detailBody')}>
          {/* <DetailTop currentTitle={title} data={productArr} /> */}
          {title === 'BLEU' && <BLEU />}
          {title === 'VERT' && <VERT />}
          {title === 'ROUGE' && <ROUGE />}
          {title === 'ROSE' && <ROSE />}
        </article>
      </div>
      <div className={cx('autoSliderBox')}>
        <AutoCarousel />
      </div>
      <DetailBottom currentTitle={title} data={productArr} />
    </main>
  );
};

export default Detail;
