import { useEffect, useState, useCallback } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const DetailTop = ({ currentTitle, data }) => {
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    const currentData = data.filter((product) => product.title === currentTitle);
    setCurrentProduct(currentData[0]);
  }, [currentTitle]);

  const getPrevNextProductInfo = useCallback(() => {
    const currentIndex = data.findIndex((product) => product.title === currentTitle);
    const prevIndex = currentIndex === 0 ? data.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === data.length - 1 ? 0 : currentIndex + 1;

    const prevProduct = data[prevIndex];
    const nextProduct = data[nextIndex];
    return { prevProduct, nextProduct };
  }, [currentTitle]);

  const { prevProduct, nextProduct } = getPrevNextProductInfo();

  return (
    <div className={cx(['wrapper', currentTitle])}>
      {currentProduct && (
        <>
          <div className={cx('imgContainer')}>
            <Link to={prevProduct.link} className={cx('prev')}>
              <BsChevronLeft size={50} />
              {prevProduct.title}
            </Link>
            <img src={currentProduct.unOpenImage} alt={currentProduct.name} />
            <Link to={nextProduct.link} className={cx('next')}>
              {nextProduct.title}
              <BsChevronRight size={50} />
            </Link>
          </div>
          <div className={cx('imgContainer')}>
            <img src={currentProduct.openImage} alt={currentProduct.name} />
          </div>
        </>
      )}
    </div>
  );
};

export default DetailTop;
