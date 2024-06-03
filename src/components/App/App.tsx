import { useEffect } from 'react';
import { connectStore, type ConnectedProps } from 'core';
import { Product } from 'components';
import { fetchProducts, products } from 'models/products';
import styles from './styles.module.css';

type Props = ConnectedProps<typeof connector>;

const App = ({ fetchProducts, products }: Props) => {
  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1 className={styles.heading}>Products</h1>

      <div className={styles.products}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const connector = connectStore((state) => ({ products: products(state) }), {
  fetchProducts,
});

export default connector(App);
