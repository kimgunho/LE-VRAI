import classNames from 'classnames/bind';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const S06 = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('POST');
  };

  return (
    <section className={cx('wrapper')}>
      <h3 className={cx('title')}>GET IN TOUCH!</h3>
      <article className={cx('container')}>
        <div className={cx('contactBox')}>
          <h4 className={cx('title')}>CONTACT US</h4>
          <ul className={cx('info')}>
            <li>
              <a href="tel:07087582022">070-8758-2022</a>
            </li>
            <li>
              <a href="https://naver.com">INSTAGRAM</a>
            </li>
            <li>
              <a href="mailto:THEJINLI.OFFICIAL@gmail.com">THEJINLI.OFFICIAL@GMAIL.COM</a>
            </li>
          </ul>
        </div>
        <div className={cx('formBox')}>
          <form onSubmit={onSubmit}>
            <ul className={cx('formList')}>
              <li>
                <label htmlFor="name">
                  <p>NAME</p>
                  <input type="text" id="name" required />
                </label>
              </li>
              <li>
                <label htmlFor="email">
                  <p>E-MAIL</p>
                  <input type="email" id="email" required />
                </label>
              </li>
              <li>
                <label htmlFor="msg">
                  <p>MESSAGE</p>
                  <input type="text" id="msg" required />
                </label>
              </li>
            </ul>
            <button className={cx('button')} type="submit">
              SEND
            </button>
          </form>
        </div>
      </article>
    </section>
  );
};

export default S06;
