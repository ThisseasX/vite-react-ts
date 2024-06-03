import { http, HttpResponse } from 'msw';

export default [
  http.get('https://shop.com/products', () =>
    HttpResponse.json([
      {
        id: 1,
        name: 'Product 1',
        price: 10.99,
      },
      {
        id: 2,
        name: 'Product 2',
        price: 19.99,
      },
      {
        id: 3,
        name: 'Product 3',
        price: 14.99,
      },
      {
        id: 4,
        name: 'Product 4',
        price: 8.99,
      },
      {
        id: 5,
        name: 'Product 5',
        price: 12.99,
      },
      {
        id: 6,
        name: 'Product 6',
        price: 9.99,
      },
      {
        id: 7,
        name: 'Product 7',
        price: 16.99,
      },
      {
        id: 8,
        name: 'Product 8',
        price: 11.99,
      },
      {
        id: 9,
        name: 'Product 9',
        price: 7.99,
      },
      {
        id: 10,
        name: 'Product 10',
        price: 13.99,
      },
      {
        id: 11,
        name: 'Product 11',
        price: 18.99,
      },
      {
        id: 12,
        name: 'Product 12',
        price: 15.99,
      },
      {
        id: 13,
        name: 'Product 13',
        price: 6.99,
      },
      {
        id: 14,
        name: 'Product 14',
        price: 11.49,
      },
      {
        id: 15,
        name: 'Product 15',
        price: 9.49,
      },
    ]),
  ),
];
