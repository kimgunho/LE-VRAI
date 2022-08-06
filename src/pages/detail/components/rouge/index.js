import classNames from 'classnames/bind';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const ROUGE = () => {
  return <div className={cx('wrapper')}>ROUGE</div>;
};

export default ROUGE;
