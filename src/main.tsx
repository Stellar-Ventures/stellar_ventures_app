import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { TonConnectUIProvider } from '@tonconnect/ui-react';


// this manifest is used temporarily for development purposes
const manifestUrl = 'https://stellar-ventures.github.io/stellar_ventures_app/tonconecnt-manifest.json';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <TonConnectUIProvider manifestUrl={manifestUrl} >
    <App />

  </TonConnectUIProvider>,
)
