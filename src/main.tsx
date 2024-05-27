import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { Address } from './App';

// this manifest is used temporarily for development purposes
const manifestUrl = '/public/tonconecnt-manifest.json';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <TonConnectUIProvider manifestUrl={manifestUrl} >
    <App />
    <Address />
  </TonConnectUIProvider>,
)
