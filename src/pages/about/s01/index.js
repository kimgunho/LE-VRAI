import classNames from 'classnames/bind';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const S01 = () => {
  return (
    <section className={cx('wrapper')}>
      <h2 className={cx('title')}>ABOUT US</h2>
    </section>
  );
};

export default S01;
