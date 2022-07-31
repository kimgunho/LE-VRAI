import classNames from 'classnames/bind';

import AutoCarousel from '../../../components/global/autoCarousel';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const S07 = () => {
  return (
    <section className={cx('wrapper')}>
      <AutoCarousel isColorBlack={false} />
    </section>
  );
};

export default S07;
