import { TonConnectButton } from '@tonconnect/ui-react'
import '@twa-dev/sdk'
import { useState } from 'react'
import './App.css'
import { Settings } from './pend'

function App() {
	const [clicks, setClicks] = useState(0)
	const [multiplier, setMultiplier] = useState(1)

	// Функция для увеличения количества кликов
	const handleClick = () => {
		setClicks(clicks + multiplier)
	}

	// Функция для улучшения (увеличивает множитель кликов)
	const upgradeClickPower = () => {
		if (clicks >= 10) {
			// Требует 10 кликов для прокачки
			setClicks(clicks - 10)
			setMultiplier(multiplier + 1)
		}
	}

	return (
		<div className='App'>
			<TonConnectButton />
			<Settings />

			{/* Круглая кнопка */}
			<div
				className='clicker-circle'
				onClick={handleClick}
				style={{
					width: '150px',
					height: '150px',
					borderRadius: '50%',
					backgroundColor: '#4CAF50',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					fontSize: '24px',
					color: '#fff',
					margin: '20px auto',
					cursor: 'pointer',
				}}
			>
				{clicks} кликов
			</div>

			{/* Кнопка для прокачки */}
			<button
				onClick={upgradeClickPower}
				disabled={clicks < 10}
				style={{
					padding: '10px 20px',
					fontSize: '18px',
					marginTop: '20px',
					cursor: clicks >= 10 ? 'pointer' : 'not-allowed',
				}}
			>
				Прокачать (10 кликов)
			</button>

			{/* Отображаем текущий множитель */}
			<div style={{ marginTop: '10px', fontSize: '18px' }}>
				Текущая мощность клика: {multiplier}
			</div>
		</div>
	)
}

export default App
