import classNames from 'classnames/bind';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const S01 = () => {
  return (
    <section className={cx('container')}>
      <h1 className={cx('title')}>LE VRAI</h1>
      <p className={cx('desc')}>
        Premium Vegan Cosmetics for Kids
        <br />
        that fills the happy moments of mothers and children
      </p>
    </section>
  );
};

export default S01;
