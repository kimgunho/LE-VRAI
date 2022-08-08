import classNames from 'classnames/bind';
import { BsX } from 'react-icons/bs';

import { FAQArr } from './constants';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Modal = ({ setIsShowModal }) => {
  const handleHideModal = () => {
    setIsShowModal(false);
  };

  return (
    <button type="button" className={cx('dimmed')} onClick={handleHideModal}>
      <div className={cx('modal')}>
        <div className={cx('header')}>
          <div className={cx('borderBottom')}>
            <h3 className={cx('title')}>FAQS</h3>
            <button type="button" className={cx('closeButton')}>
              <BsX />
            </button>
          </div>
        </div>
        <ul className={cx('body')}>
          {FAQArr.map((FAQ) => (
            <li key={FAQ.question}>
              <h4 className={cx('question')}>{FAQ.question}</h4>
              <p className={cx('answer')}>{FAQ.answer}</p>
              {FAQ.warning && <p className={cx('warning')}>사용시 주의사항 : {FAQ.warning}</p>}
            </li>
          ))}
        </ul>
      </div>
    </button>
  );
};

export default Modal;
