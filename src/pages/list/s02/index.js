import classNames from 'classnames/bind';

import ProductCard from '../../../components/list/card';

import { productArr } from './constants';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

const S02 = () => {
  return (
    <section className={cx('wrapper')}>
      <ul className={cx('container')}>
        {productArr.map((product) => (
          <ProductCard key={product.title} dataObj={product} />
        ))}
      </ul>
    </section>
  );
};

export default S02;
