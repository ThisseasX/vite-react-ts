export const fetchProductsRequest = () =>
  fetch('https://shop.com/products').then((response) => response.json());
