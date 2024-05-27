import './App.css';
import { TonConnectButton } from '@tonconnect/ui-react';
import { useTonAddress } from '@tonconnect/ui-react';
import'@twa-dev/sdk'

function App() {
  return (
    
    <div>
      <TonConnectButton />
    </div>
    
  );
}

export default App

export const Address = () => {
  const userFriendlyAddress = useTonAddress();
  const rawAddress = useTonAddress(false);

  return (
      userFriendlyAddress && (
          <div>
              <span>User-friendly address: {userFriendlyAddress}</span>
              <span>Raw address: {rawAddress}</span>
          </div>
      )
  );
};