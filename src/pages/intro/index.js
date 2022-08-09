import classNames from 'classnames/bind';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const COLORS = ['pink', 'blue', 'green', 'red'];

const Intro = () => {
  const randomIndex = Math.floor(Math.random() * COLORS.length);

  return (
    <main className={cx('wrapper', `${COLORS[randomIndex]}`)}>
      <h1 className={cx('logo')}>
        <img src={require('../../asset/images/global/logo_white.png')} alt="LE VRAI" draggable={false} />
      </h1>
      <div className={cx('cover', `${COLORS[randomIndex]}`)} />
    </main>
  );
};

export default Intro;
