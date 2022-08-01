import classNames from 'classnames/bind';
import { FiArrowUpRight } from 'react-icons/fi';

import LinkButton from '../../global/linkButton';

import { getProductDesc } from './util';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

const BasicInfo = ({ dataObj }) => {
  return (
    <section className={cx(['wrapper', dataObj.mainColor])}>
      <p className={cx('subDesc')}>LE VRAI COCO MULTIBALM </p>
      <h2>
        {dataObj.name} <span>{dataObj.kg}</span>
      </h2>
      {getProductDesc(dataObj.name)}
      <ul>
        {dataObj.points.map((point) => (
          <li key={point.descKr}>
            <p>
              {point.descKr} <span>{point.descEn}</span>
            </p>
          </li>
        ))}
      </ul>
      <div>
        <LinkButton title={'SHOP NOW'} link={dataObj.link} />
        <button type="button">
          FAQS <FiArrowUpRight />
        </button>
      </div>
      <div>
        <ul>
          <li>
            <span>01</span>FRANCE EVE VEGAN
          </li>
          <li>
            <span>02</span>DERMATOLOGICALLY TESTED
          </li>
        </ul>
      </div>
      <p>르브레 스틱밤은 프랑스 비건 인증 제품으로 식물성 원료를 넣어 안심하고 사용할 수 있습니다.</p>
    </section>
  );
};

export default BasicInfo;
