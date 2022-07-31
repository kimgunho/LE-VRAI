import classNames from 'classnames/bind';

import logo from '../../asset/images/global/logo_white.png';

import styles from './index.module.scss';
const cx = classNames.bind(styles);

const Intro = () => {
  const colors = ['pink', 'blue', 'green', 'red'];
  const randomIndex = Math.floor(Math.random() * (colors.length - 0) + 0);

  return (
    <main className={cx('wrapper', `${colors[randomIndex]}`)}>
      <h1 className={cx('logo')}>
        <img src={logo} alt="LE VRAI" draggable={false} />
      </h1>
      <div className={cx('cover', `${colors[randomIndex]}`)} />
    </main>
  );
};

export default Intro;
