import classNames from 'classnames/bind';

import logoWhiteSrc from '../../../asset/images/global/logo_white.png';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const S04 = () => {
  return (
    <section className={cx('wrapper')}>
      <div className={cx('background')}>
        <h3 className={cx('title')}>ENSEMBLE</h3>
      </div>
      <article className={cx('container')}>
        <p className={cx('subTitle')}>두 번째 약속! 함께하는 즐거움</p>
        <h4 className={cx('title')}>ENSEMBLE</h4>
        <p className={cx('desc')}>
          르브레는 아이들 뿐만 아니라 아빠, 엄마의 행복도 함께 생각합니다.
          <br />
          모두가 같이 즐겁게 사용하며 행복함을 공유할 수 있는 코스메틱을 추구합니다.{' '}
        </p>

        <img className={cx('logo')} src={logoWhiteSrc} alt="" />

        <p className={cx('note')}>스킨케어와 메이크업, 놀이 속 교집합의 영역을 르브레가 항상 함께하겠다는 의미로 탄생하였습니다.</p>
      </article>
    </section>
  );
};

export default S04;
