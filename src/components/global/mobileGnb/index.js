import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { BsX } from 'react-icons/bs';

import logoWhiteSrc from '../../../asset/images/global/logo_white.png';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const MobileGnbComponent = ({ setIsMobileGnb }) => {
  const handleHideMobileGnb = () => {
    setIsMobileGnb(false);
  };

  return (
    <ul className={cx('gnb')}>
      <li>
        <img src={logoWhiteSrc} alt="" />
      </li>
      <li onClick={handleHideMobileGnb}>
        <Link to="/">HOME</Link>
      </li>
      <li onClick={handleHideMobileGnb}>
        <Link to="/about">ABOUT</Link>
      </li>
      <li onClick={handleHideMobileGnb}>
        <Link to="/product">PRODUCT</Link>
      </li>
      <li onClick={handleHideMobileGnb}>
        <Link to="/about#contact">CONTACT</Link>
      </li>
      <li>
        <button type="button" onClick={handleHideMobileGnb}>
          <BsX />
        </button>
      </li>
    </ul>
  );
};

export default MobileGnbComponent;
