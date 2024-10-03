import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const manifestUrl = import.meta.env.VITE_MANIFEST_URL
console.log(manifestUrl)
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	// <TonConnectUIProvider manifestUrl={manifestUrl} >
	// </TonConnectUIProvider>,
	<App />
)
