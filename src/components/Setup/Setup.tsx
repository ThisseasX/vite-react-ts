import { Provider } from 'react-redux';
import store from 'store';

type Props = {
  // eslint-disable-next-line no-undef
  children: React.ReactNode;
};

const Setup = ({ children }: Props) => (
  <Provider store={store}>{children}</Provider>
);

export default Setup;
