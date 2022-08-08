import classNames from 'classnames/bind';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const S05 = () => {
  return (
    <section className={cx('wrapper')}>
      <div className={cx('background')}>
        <h3 className={cx('title')}>SIMPLE</h3>
      </div>
      <article className={cx('container')}>
        <p className={cx('subTitle')}>세 번째 약속! 언제 어디서나 간편한 케어</p>
        <h4 className={cx('title')}>SIMPLE</h4>
        <p className={cx('desc')}>
          진짜 필요한 제품을 미니멀하고 유저블하게 만들었습니다.
          <br />
          쉽고 간편하게 즐거운 케어를 약속합니다
        </p>
        <ul className={cx('simpleList')}>
          <li>
            <h5>SIMPLE 1</h5>
            <span />
            <p>가방에 쏘옥 들어가 언제든 꺼내쓸 수 있는 간편함</p>
          </li>
          <li>
            <h5>SIMPLE 2</h5>
            <span />
            <p>아이들의 작은 손에도 꼬옥 잡히는 유저블한 그립감</p>
          </li>
        </ul>
        <p className={cx('note')}>우리 가족을 위한 프리미엄 라이프스타일, Avec LEVRAI</p>
      </article>
    </section>
  );
};

export default S05;
