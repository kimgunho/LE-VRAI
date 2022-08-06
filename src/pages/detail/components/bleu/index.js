import classNames from 'classnames/bind';
import { BsCheck2Circle } from 'react-icons/bs';
import { point1Arr } from './constants';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

const BLEU = () => {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('mainDesc')}>
        엄마와 아이의 행복한 시간을 채워주는
        <br />
        <span>프리미엄 비건 키즈 코스메틱 르브레</span>
      </p>

      <ul className={cx('list')}>
        <li>
          <p className={cx('count')}>1</p>
          <p className={cx('title')}>
            SAFE
            <br />
            CARE
          </p>
          <p className={cx('desc')}>안심하고 케어해주세요!</p>
        </li>
        <li>
          <p className={cx('count')}>2</p>
          <p className={cx('title')}>
            SIMPLE
            <br />
            &amp; COLORFUL
          </p>
          <p className={cx('desc')}>쉽고 재밌게 르브레와 함께해주세요.</p>
        </li>
      </ul>

      <p className={cx('point')}>POINT 01</p>
      <p className={cx('title')}>
        CLEAN &amp;
        <br />
        NATURAL TREATMENT
      </p>
      <p className={cx('desc')}>
        깨끗한 자연에서 온 식물성 원료(장미꽃수, 시어버터, 스위트아몬드 <br />
        오일 등)의 유효성분이 보다 풍부한 보습 케어에 도움을 줍니다.
      </p>

      <ul className={cx('pointArr')}>
        {point1Arr.map((item) => (
          <li key={item.title}>
            <img className={cx('image')} src={item.image} alt={item.title} />
            <div className={cx('info')}>
              <p className={cx('title')}>{item.title}</p>
              <p className={cx('desc')}>{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
      <p>
        <BsCheck2Circle />
      </p>
    </div>
  );
};

export default BLEU;
