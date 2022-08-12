import { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { BsList } from 'react-icons/bs';

import logoWhiteSrc from '../../../asset/images/global/logo_white.png';
import logoBlackSrc from '../../../asset/images/global/logo_black.png';
import MobileGnbComponent from '../mobileGnb';

import { getPageH1Title } from './util';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [isScrollUp, setIsScrollUp] = useState(false);
  const [isMobileGnb, setIsMobileGnb] = useState(false);
  const { pathname } = useLocation();

  const ITEM_PAGE_ARR = ['/product/detail/BLEU', '/product/detail/VERT', '/product/detail/ROUGE', '/product/detail/ROSE'];

  const handleNavigation = useCallback(
    (event) => {
      const window = event.currentTarget;
      if (scrollY > window.scrollY) {
        setIsScrollUp(true);
      } else if (scrollY < window.scrollY) {
        setIsScrollUp(false);
      }
      setScrollY(window.scrollY);
    },
    [scrollY],
  );

  useEffect(() => {
    window.addEventListener('scroll', handleNavigation);

    return () => {
      window.removeEventListener('scroll', handleNavigation);
    };
  }, [handleNavigation]);

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  const logoSrcCreator = () => {
    for (const page of ITEM_PAGE_ARR) {
      if (page === pathname) {
        return logoBlackSrc;
      }
    }

    if (isScrollUp) {
      return logoBlackSrc;
    } else {
      return logoWhiteSrc;
    }
  };

  const setIsBlackColor = () => {
    for (const page of ITEM_PAGE_ARR) {
      if (page === pathname) {
        return 'black';
      }
    }
    return 'white';
  };

  const handleShowMobileGnb = () => {
    setIsMobileGnb(true);
  };
  return (
    <>
      <header className={cx(['header', isScrollUp && 'active'])}>
        <ul className={cx('gnb')}>
          <li className={cx([setIsBlackColor(), 'logo'])}>
            <h1 onClick={scrollTop}>
              <Link to="/">
                <img src={logoSrcCreator()} alt={getPageH1Title(pathname)} />
              </Link>
            </h1>
          </li>
          <li className={cx(setIsBlackColor())}>
            <Link to="/about">ABOUT</Link>
          </li>
          <li className={cx(setIsBlackColor())}>
            <Link to="/product">PRODUCT</Link>
          </li>
          <li className={cx(setIsBlackColor())}>
            <Link to="/about#contact">CONTACT</Link>
          </li>
          <li className={cx([setIsBlackColor(), 'mobileButton'])}>
            <button type="button" onClick={handleShowMobileGnb}>
              <BsList />
            </button>
          </li>
        </ul>
      </header>
      {isMobileGnb && <MobileGnbComponent setIsMobileGnb={setIsMobileGnb} />}
    </>
  );
};

export default Header;
