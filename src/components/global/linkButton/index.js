import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const LinkButton = ({ title, link, isWhite = true }) => {
  return (
    <Link to={link} className={cx('button', `${isWhite}`)}>
      {title}
    </Link>
  );
};

export default LinkButton;
