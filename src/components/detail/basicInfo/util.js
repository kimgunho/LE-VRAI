import classNames from 'classnames/bind';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

export const getProductDesc = (name) => {
  if (name === 'BLEU') {
    return (
      <p className={cx('desc')}>
        프랑스어 물(L&apos;EAU) 이라는 단어에서 탄생한 <span>로로밤 블루</span>는<br /> 건조한 피부에 부드럽게 녹아들어 깊은 보습감을
        선사해주는 <span>보습 스틱밤</span>입니다.
      </p>
    );
  }
  if (name === 'VERT') {
    return (
      <p className={cx('desc')}>
        프랑스어 물(L&apos;EAU) 이라는 단어에서 탄생한 <span>로로밤 베르</span>는<br />
        자극받은 피부를 편안하게 케어해주는 매트한 마무리감의 <span>진정 스틱밤</span>입니다.
      </p>
    );
  }
  if (name === 'ROUGE') {
    return (
      <p className={cx('desc')}>
        프랑스어 칼라(COULEUR)를 뜻하는 단어에서 탄생한 <span>코코밤 루즈</span>는<br />
        촉촉하게 은은한 컬러감으로 생기를 불어넣어주는 <span>립&amp;치크용 스틱밤</span>입니다.
      </p>
    );
  }
  if (name === 'ROSE') {
    return (
      <p className={cx('desc')}>
        프랑스어 칼라(COULEUR)를 뜻하는 단어에서 탄생한 <span>코코밤 로즈</span>는<br />
        촉촉하게 은은한 컬러감으로 생기를 불어넣어주는 <span>립&amp;치크용 스틱밤</span>입니다.
      </p>
    );
  }
  return null;
};
