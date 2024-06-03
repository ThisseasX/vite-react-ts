import type { Product as ProductType } from 'models/products';
import styles from './styles.module.css';

type Props = {
  product: ProductType;
};

const Product = ({ product }: Props) => (
  <div key={product.id} className={styles.product}>
    <p className={styles.name}>{product.name}</p>
    <p className={styles.price}>{product.price}</p>
  </div>
);

export default Product;
