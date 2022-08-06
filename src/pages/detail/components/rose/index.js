import classNames from 'classnames/bind';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const ROSE = () => {
  return <div className={cx('wrapper')}>ROSE</div>;
};

export default ROSE;
