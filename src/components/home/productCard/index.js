import { Link } from 'react-router-dom';

const ProductCard = ({ data }) => {
  return (
    <div>
      <p>Coco Multi Balm</p>
      <h3>{data.title}</h3>
      <p>
        <span>{data.descTitle}</span>
        {data.desc}
      </p>
      <Link to={data.link}>Shop now</Link>
    </div>
  );
};

export default ProductCard;
