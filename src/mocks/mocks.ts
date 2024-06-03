import { setupWorker } from 'msw/browser';
import productHandlers from './products';

export const worker = setupWorker(...productHandlers);
