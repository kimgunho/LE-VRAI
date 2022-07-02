import classNames from 'classnames/bind';

import styles from './index.module.scss';
const cx = classNames.bind(styles);

const AutoCarousel = () => {
  return (
    <ul className={cx('container')}>
      <li>COLORFUL HIGH FUNCTION * </li>
      <li>FRANCE BOTANICAL TREATMENT * </li>
      <li>REAL VEGAN PRODUCT * </li>
      <li>COLORFUL HIGH FUNCTION * </li>
      <li>FRANCE BOTANICAL TREATMENT * </li>
      <li>REAL VEGAN PRODUCT * </li>
      <li>COLORFUL HIGH FUNCTION * </li>
      <li>FRANCE BOTANICAL TREATMENT * </li>
    </ul>
  );
};

export default AutoCarousel;
