import classNames from 'classnames/bind';

import LinkButton from '../linkButton';

import logo from '../../../asset/images/global/logo.png';

import styles from './index.module.scss';

const cx = classNames.bind(styles);
const Footer = () => {
  return (
    <footer className={cx('footer')}>
      <h2 className={cx('title')}>AVEC LE VRAI</h2>
      <div className={cx('flex')}>
        <ul className={cx('info')}>
          <li>
            <a href="tel:07087582022">070-8758-2022</a>
          </li>
          <li>
            <a href="mailto:THEJINLI.OFFICIAL@gmail.com">THEJINLI.OFFICIAL@GMAIL.COM</a>
          </li>
          <li>
            <a href="WWW.LEVRAIOFFICIAL.COM" target={'_blank'}>
              WWW.LEVRAIOFFICIAL.COM
            </a>
          </li>
        </ul>

        <LinkButton title={'CONTACT US'} link="/" />
      </div>
      <p className={cx('copyright')}>
        <img src={logo} alt="LE VRAI" />© 2022
      </p>
    </footer>
  );
};

export default Footer;
