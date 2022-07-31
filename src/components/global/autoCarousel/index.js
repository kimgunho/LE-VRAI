import { Fragment } from 'react';
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
              <Fragment key={`firstLine${index}`}>
                <li>CLEAN &amp; NATURAL TREATMENT</li>
                <li>*</li>
              </Fragment>
            ))}
          </ul>
        </li>
        <li>
          <ul>
            {Array.from(Array(3).keys()).map((_, index) => (
              <Fragment key={`secondLine${index}`}>
                <li>CLEAN &amp; NATURAL TREATMENT</li>
                <li>*</li>
              </Fragment>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default AutoCarousel;
