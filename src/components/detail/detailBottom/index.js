import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import LinkButton from '../../global/linkButton';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const DetailBottom = ({ currentTitle, data }) => {
  const [currentProducts, setCurrentProducts] = useState(null);

  useEffect(() => {
    const converterProduct = data.filter((product) => product.title !== currentTitle);
    setCurrentProducts(converterProduct);
  }, [currentTitle]);

  return (
    <ul className={cx('wrapper')}>
      {currentProducts &&
        currentProducts.map((product) => (
          <li key={product.title} className={cx(product.title)}>
            <p className={cx('subDesc')}> RORO MULTI BALM </p>
            <h3 className={cx('title')}>{product.name}</h3>
            <div className={cx('productBackground', product.title)}></div>
            <p className={cx('backgroundText')}>{product.title}</p>
            <LinkButton isWhite={true} link={product.link} title="SHOP NOW" color={product.title} />
          </li>
        ))}
    </ul>
  );
};

export default DetailBottom;
