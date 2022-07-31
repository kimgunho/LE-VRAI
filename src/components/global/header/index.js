import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import logoWhiteSrc from '../../../asset/images/global/logo_white.png';
import logoBlackSrc from '../../../asset/images/global/logo_black.png';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);

  const changeIsScroll = () => {
    window.scrollY !== 0 ? setIsScroll(true) : setIsScroll(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeIsScroll);

    return () => {
      window.removeEventListener('scroll', changeIsScroll);
    };
  }, []);

  return (
    <header className={cx(['header', isScroll && 'active'])}>
      <ul className={cx('gnb')}>
        <li>
          <h1>
            <Link to="/">
              <img src={isScroll ? logoBlackSrc : logoWhiteSrc} alt="LE VRAI" />
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
