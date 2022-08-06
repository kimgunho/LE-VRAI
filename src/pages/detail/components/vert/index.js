import classNames from 'classnames/bind';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const VERT = () => {
  return <div className={cx('wrapper')}>VERT</div>;
};

export default VERT;
