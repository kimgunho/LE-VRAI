import classNames from 'classnames/bind';

import styles from './index.module.scss';
const cx = classNames.bind(styles);

const AutoCarousel = () => {
  return (
    <div className={cx('container')}>
      <ul className={cx('autoSlider')}>
        <li>
          <ul>
            <li>COLORFUL HIGH FUNCTION </li>
            <li>*</li>
            <li>FRANCE BOTANICAL TREATMENT </li>
            <li>*</li>
            <li>REAL VEGAN PRODUCT </li>
            <li>*</li>
          </ul>
        </li>
        <li>
          <ul>
            <li>COLORFUL HIGH FUNCTION </li>
            <li>*</li>
            <li>FRANCE BOTANICAL TREATMENT </li>
            <li>*</li>
            <li>REAL VEGAN PRODUCT </li>
            <li>*</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default AutoCarousel;
