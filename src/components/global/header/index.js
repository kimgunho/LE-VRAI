import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import logo from '../../../asset/images/global/logo.png';

import styles from './index.module.scss';

const cx = classNames.bind(styles);
const Header = () => {
  return (
    <header className={cx('header')}>
      <ul className={cx('gnb')}>
        <li>
          <h1>
            <Link to="/">
              <img src={logo} alt="LE VRAI" />
            </Link>
          </h1>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/product">PRODUCT</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
