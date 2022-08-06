import classNames from 'classnames/bind';
import { FiArrowUpRight } from 'react-icons/fi';

import LinkButton from '../../global/linkButton';

import { getProductDesc } from './util';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

const BasicInfo = ({ dataObj }) => {
  return (
    <section className={cx(['wrapper', dataObj.mainColor])}>
      <div className={cx('paddingBox')}>
        <p className={cx(['subDesc', 'colorPoint'])}>LE VRAI COCO MULTIBALM </p>
        <h2 className={cx(['colorPoint', 'title'])}>
          {dataObj.name} <span>{dataObj.kg}</span>
        </h2>
        {getProductDesc(dataObj.name)}
        <ul className={cx('list')}>
          {dataObj.points.map((point, index) => (
            <li key={point.descKr}>
              <p className={cx('desc')}>
                <strong>POINT {index + 1}. </strong>
                <span className={cx('colorPoint')}>{point.descKr}</span>
                {point.descEn}
              </p>
            </li>
          ))}
        </ul>
        <div className={cx('flexBox')}>
          <LinkButton title={'SHOP NOW'} link={dataObj.link} />
          <button type="button" className={cx(['FAQButton', 'colorPoint'])}>
            FAQS <FiArrowUpRight />
          </button>
        </div>
      </div>

      <div className={cx('bottom')}>
        <div className={cx(['listBox', 'softColorPoint'])}>
          <ul>
            <li>
              <span className={cx('deepColorPoint')}>01</span>FRANCE EVE VEGAN
            </li>
            <li>
              <span className={cx('deepColorPoint')}>02</span>DERMATOLOGICALLY TESTED
            </li>
          </ul>
        </div>
        <p className={cx('note')}>르브레 스틱밤은 프랑스 비건 인증 제품으로 식물성 원료를 넣어 안심하고 사용할 수 있습니다.</p>
      </div>
    </section>
  );
};

export default BasicInfo;
