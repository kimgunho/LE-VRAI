import { useState } from 'react';
import classNames from 'classnames/bind';

import LinkButton from '../../global/linkButton';

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
      <LinkButton link={dataObj.link} title={'SHOP NOW'} color={dataObj.title} />
    </li>
  );
};

export default ProductCard;
