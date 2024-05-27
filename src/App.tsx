import './App.css';
import { TonConnectButton } from '@tonconnect/ui-react';
import '@twa-dev/sdk'

import { Settings } from './pend'
import { useState } from 'react'
import WebApp from '@twa-dev/sdk'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <TonConnectButton />
      <Settings />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className="card">
        <button onClick={() => WebApp.showAlert(`Hello World! Current count is ${count}`)}>
            Show Alert
        </button>
      </div>
    </div>
    
  );
}

export default App


