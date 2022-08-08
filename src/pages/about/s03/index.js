import classNames from 'classnames/bind';

import styles from './index.module.scss';

import safe_list_img01 from '../../../asset/images/about/s03_safe_img01.png';
import safe_list_img02 from '../../../asset/images/about/s03_safe_img02.png';
import safe_list_img03 from '../../../asset/images/about/s03_safe_img03.png';
import safe_vegan_logo from '../../../asset/images/about/s03_safe_vegan_logo.png';

const cx = classNames.bind(styles);

const S03 = () => {
  return (
    <section className={cx('wrapper')}>
      <div className={cx('background')}>
        <h3 className={cx('title')}>SAFE</h3>
      </div>
      <article className={cx('container')}>
        <p className={cx('subTitle')}>첫 번째 약속! 걱정없는 안심 성분</p>
        <h4 className={cx('title')}>SAFE</h4>
        <p className={cx('desc')}>우리 아이들의 보드라운 얼굴과 몸에 발라야 하기에 깨끗한 것들을 르브레 안에 모았습니다.</p>

        <div className={cx('flexContainer')}>
          <ul className={cx('flexBox')}>
            <li>
              <img src={safe_list_img01} alt="" />
            </li>
            <li>
              <img src={safe_list_img02} alt="" />
            </li>
            <li>
              <img src={safe_list_img03} alt="" />
            </li>
          </ul>
          <div className={cx('info')}>
            <h5>CLEAN &amp; NATURAL TREATMETN</h5>
            <p>
              깨끗한 식물성 안심처방으로
              <br />
              가족 모두 편안하게 사용할 수 있습니다.
            </p>
          </div>
        </div>
        <div className={cx('flexContainer')}>
          <div className={cx('veganLogo')}>
            <img src={safe_vegan_logo} alt="eve VEGAN" />
          </div>
          <div className={cx('info')}>
            <h5>REAL VEGAN PRODUCT</h5>
            <p>
              자연의 색 그대로 식물성 원료를 담아 만든
              <br />
              진짜 비건 제품입니다.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default S03;
