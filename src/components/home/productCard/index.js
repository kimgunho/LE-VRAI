import classNames from 'classnames/bind';

import LinkButton from '../../global/linkButton';

import redBalm_left from '../../../asset/images/home/redCard_item_left.png';
import redBalm_right from '../../../asset/images/home/redCard_item_right.png';
import pinkBalm_left from '../../../asset/images/home/pinkCard_item_left.png';
import pinkBalm_right from '../../../asset/images/home/pinkCard_item_right.png';
import greenBalm_left from '../../../asset/images/home/greenCard_item_left.png';
import greenBalm_right from '../../../asset/images/home/greenCard_item_right.png';
import blueBalm_left from '../../../asset/images/home/blueCard_item_left.png';
import blueBalm_right from '../../../asset/images/home/blueCard_item_right.png';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const ProductCard = ({ data }) => {
  const getCurrentColorImage = (location) => {
    if (location === 'left') {
      switch (data.color) {
        case 'red':
          return redBalm_left;
        case 'pink':
          return pinkBalm_left;
        case 'green':
          return greenBalm_left;
        case 'blue':
          return blueBalm_left;
        default:
          break;
      }
    }

    if (location === 'right') {
      switch (data.color) {
        case 'red':
          return redBalm_right;
        case 'pink':
          return pinkBalm_right;
        case 'green':
          return greenBalm_right;
        case 'blue':
          return blueBalm_right;
        default:
          break;
      }
    }
  };

  return (
    <div className={cx('container')}>
      <p className={cx('desc', `${data.color}`)}>Coco Multi Balm</p>
      <div className={cx('titleBox')}>
        <img className={cx('balm', 'left', `${data.color}`)} src={getCurrentColorImage('left')} alt="" draggable={false} />
        <h3 className={cx('title', `${data.color}`)}>{data.title}</h3>
        <img className={cx('balm', 'right', `${data.color}`)} src={getCurrentColorImage('right')} alt="" draggable={false} />
      </div>
      <p className={cx('subDesc')}>
        <span className={cx('subTitle')}>{data.descTitle}</span>
        {data.desc}
      </p>
      <LinkButton title={'SHOP NOW'} link={data.link} isWhite={true} color={data.title} />
    </div>
  );
};

export default ProductCard;
