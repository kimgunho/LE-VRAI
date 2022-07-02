import classNames from 'classnames/bind';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const S01 = () => {
  return (
    <section className={cx('wrapper')}>
      <div className={cx('info')}>
        <h2 className={cx('title')}>LE VRAI</h2>
        <p className={cx('desc')}>
          Premium Vegan Cosmetics for Kids
          <br />
          that fills the happy moments of mothers and children
        </p>
      </div>
    </section>
  );
};

export default S01;
