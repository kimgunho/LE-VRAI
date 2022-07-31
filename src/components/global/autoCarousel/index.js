import classNames from 'classnames/bind';

import styles from './index.module.scss';
const cx = classNames.bind(styles);

const AutoCarousel = ({ isColorBlack = true }) => {
  return (
    <div className={cx('container')}>
      <ul className={cx(['autoSlider', !isColorBlack && 'white'])}>
        <li>
          <ul>
            {Array.from(Array(3).keys()).map((_, index) => (
              <>
                <li key={index}>CLEAN &amp; NATURAL TREATMENT</li>
                <li key={`*_${index}`}>*</li>
              </>
            ))}
          </ul>
        </li>
        <li>
          <ul>
            {Array.from(Array(3).keys()).map((_, index) => (
              <>
                <li key={index}>CLEAN &amp; NATURAL TREATMENT</li>
                <li key={`*_${index}`}>*</li>
              </>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default AutoCarousel;
