import React from 'react'
import './Event.css'

const Event = () => {
	return (
		<div className='event' id='Olimpic-section'>
			<div className="container">
				<h2>Участвуй в бесплатной еженедельной олимпиаде!</h2>
				<form action="https://getform.io/f/318ce032-b9a3-43e3-a44b-2e101b608602" method="POST">
					<div className="form-container display-col">
						<input type="email" name="email" placeholder='Введите ваш email' />
						<button className='btn'>Участвовать</button>
					</div>
					<div className="form-container">
						<input type="checkbox" />
						<p>Получать информацию о всех наших мероприятиях</p>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Event