import './App.css';
import { TonConnectButton } from '@tonconnect/ui-react';
import '@twa-dev/sdk'
import { Settings } from './pend'

function App() {
  return (
    <div>
      <TonConnectButton />
      <Settings />
    </div>
  );
}

export default App
