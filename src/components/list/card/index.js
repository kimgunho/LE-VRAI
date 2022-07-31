import { useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const ProductCard = ({ dataObj }) => {
  const [isEnter, setIsEnter] = useState(false);

  const handleMouseEnter = () => {
    setIsEnter(true);
  };
  const handleMouseLeave = () => {
    setIsEnter(false);
  };

  return (
    <li className={cx(['card', dataObj.title])} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <p className={cx('desc')}>RORO MULTI BALM</p>
      <h3 className={cx('title')}>{dataObj.name}</h3>
      <img src={isEnter ? dataObj.openImage : dataObj.unOpenImage} alt={dataObj.title} draggable={false} />
      <p className={cx('backgroundTitle')}>{dataObj.title}</p>
      <Link className={cx('link')} to={dataObj.link}>
        SHOP NOW
      </Link>
    </li>
  );
};

export default ProductCard;
