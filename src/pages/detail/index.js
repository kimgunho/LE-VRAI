import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';

import BasicInfo from '../../components/detail/basicInfo';

import { productInfoArr } from './data';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Detail = () => {
  const { title } = useParams();
  const productObj = productInfoArr[title];

  return (
    <main>
      <BasicInfo dataObj={productObj} />
      <article>깊은내용</article>
    </main>
  );
};

export default Detail;
