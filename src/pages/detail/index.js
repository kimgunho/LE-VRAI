import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';

import AutoCarousel from '../../components/global/autoCarousel';
import BasicInfo from '../../components/detail/basicInfo';
import DetailTop from '../../components/detail/detailTop';
import DetailBottom from '../../components/detail/detailBottom';
import BLEU from './components/bleu';
import ROSE from './components/rose';
import ROUGE from './components/rouge';
import VERT from './components/vert';

import { productArr } from '../../constants';
import { productInfoObj } from './constants';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Detail = () => {
  const { title } = useParams();
  const productObj = productInfoObj[title];

  return (
    <main className={cx('wrapper')}>
      <div className={cx('flexBox')}>
        <div className={cx('productContainer')}>
          <BasicInfo dataObj={productObj} />
        </div>
        <article className={cx(['detailBody', title])}>
          <DetailTop currentTitle={title} data={productArr} />
          {title === 'BLEU' && <BLEU />}
          {title === 'VERT' && <VERT />}
          {title === 'ROUGE' && <ROUGE />}
          {title === 'ROSE' && <ROSE />}
        </article>
      </div>

      <div className={cx('bottomBox')}>
        <div className={cx('autoSliderBox')}>
          <AutoCarousel />
        </div>
        <DetailBottom currentTitle={title} data={productArr} />
      </div>
    </main>
  );
};

export default Detail;
