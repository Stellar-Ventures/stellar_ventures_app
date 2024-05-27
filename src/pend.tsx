import { useTonConnectUI } from '@tonconnect/ui-react';

const transaction = {
    messages: [
        {
            address: "0QCAttGbzwoLkW5Db3paKixtx1ydHqtsd-hp-NupRwOn54SB",
            amount: "20000000"
        }
    ],
    validUntil: Math.floor(Date.now() / 1000) + 3600
};

export const Settings = () => {
    const [tonConnectUI] = useTonConnectUI();
    console.log(transaction)
    return (
        <div>
            <button onClick={() => tonConnectUI.sendTransaction(transaction)}>
                Send transaction
            </button>
        </div>
    );
};
