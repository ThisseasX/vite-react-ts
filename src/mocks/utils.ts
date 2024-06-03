export const enableMocking = async () => {
  if (process.env.NODE_ENV !== 'development') return undefined;

  const { worker } = await import('./mocks');

  return worker.start();
};
