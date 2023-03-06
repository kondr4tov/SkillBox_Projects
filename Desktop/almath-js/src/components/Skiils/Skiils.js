import React from 'react'
import './Skiils.css';
import Monster from './../../assets/Monsters.jpeg';

const Skiils = () => {
	return (
		<div className='skills' id='Worlds-section'>
			<div className="container">
				<div className="left">
					<h2>
						Собери всю коллекцию!
					</h2>
					<p>
						Открывай новые Миры и новых персонажей. Собире целую коллекцию и участвуй в поощрительных играх!
					</p>
					<button className='btn'>Узнать подробнее</button>
				</div>
				<div className="right">
					<div className="img-container">
						<img src={Monster} alt="" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skiils