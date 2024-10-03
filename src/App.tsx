import '@twa-dev/sdk'
import { useState } from 'react'
import ClickIcon from '../public/click-icon.png' // Подключаем PNG изображение
import './App.css'

function App() {
	const [clicks, setClicks] = useState(0)
	const [multiplier, setMultiplier] = useState(1)
	const [upgradeCost, setUpgradeCost] = useState(10) // Начальная стоимость улучшения

	// Функция для увеличения количества кликов
	const handleClick = () => {
		setClicks(clicks + multiplier)
	}

	// Функция для улучшения (увеличивает множитель кликов и стоимость улучшений)
	const upgradeClickPower = () => {
		if (clicks >= upgradeCost) {
			setClicks(clicks - upgradeCost) // Снимаем клики на покупку улучшения
			setMultiplier(multiplier + 1) // Увеличиваем мощность клика

			// Увеличиваем стоимость улучшения на 30% каждый раз
			setUpgradeCost(Math.floor(upgradeCost * 1.3)) // Плавное увеличение цены на 30%
		}
	}

	return (
		<div className='App'>
			{/* <TonConnectButton />
			<Settings /> */}

			{/* Круглая кнопка с картинкой */}
			<div
				className='clicker-circle'
				onClick={handleClick}
				style={{
					width: '150px',
					height: '150px',
					borderRadius: '50%',
					background: 'linear-gradient(135deg, #cccccc, #666666)', // Серый градиент
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					position: 'relative',
					cursor: 'pointer',
					margin: '20px auto',
				}}
			>
				{/* Внутреннее изображение PNG */}
				<img
					src={ClickIcon}
					alt='Click icon'
					style={{
						width: '80px',
						height: '80px',
						position: 'absolute',
					}}
				/>
				<span
					style={{
						position: 'absolute',
						bottom: '-30px',
						fontSize: '18px',
						color: '#fff',
					}}
				>
					{clicks} кликов
				</span>
			</div>

			{/* Кнопка для прокачки */}
			<button
				onClick={upgradeClickPower}
				disabled={clicks < upgradeCost}
				style={{
					padding: '10px 20px',
					fontSize: '18px',
					marginTop: '20px',
					cursor: clicks >= upgradeCost ? 'pointer' : 'not-allowed',
				}}
			>
				Прокачать ({upgradeCost} кликов)
			</button>

			{/* Отображаем текущий множитель */}
			<div style={{ marginTop: '10px', fontSize: '18px' }}>
				Текущая мощность клика: {multiplier}
			</div>
		</div>
	)
}

export default App
