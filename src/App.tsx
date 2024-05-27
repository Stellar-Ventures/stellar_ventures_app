import './App.css';
import { TonConnectButton } from '@tonconnect/ui-react';
import '@twa-dev/sdk'
import WebApp from '@twa-dev/sdk'
import { Settings } from './pend'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <TonConnectButton />
      <Settings />
    </div>
    
  );
}

export default App


