import { createRoot } from 'react-dom/client';
import { enableMocking } from 'mocks';
import { Setup, App } from 'components';
import './global.css';

(async () => {
  await enableMocking();

  createRoot(document.getElementById('root')).render(
    <Setup>
      <App />
    </Setup>,
  );
})();
