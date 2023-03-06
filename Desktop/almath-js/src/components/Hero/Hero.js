import React from 'react'
import MainVideo from '../../assets/video.mp4';
import './Hero.css';


const Hero = () => {

	function handleClick() {
		const element = document.getElementById('About-section');
		element.scrollIntoView({ behavior: 'smooth' });
	}

	return (
		<div className='hero'>
			<video autoPlay loop muted id='video'>
				<source src={MainVideo} type='video/mp4' />
			</video>
			<div className="hero-text">
				<h1>Almath</h1>
				<h2><span style={{ color: '#5A016D' }}>Персональное </span>обучение</h2>
				<p>Создай себя сам. Самостоятельное обучение математике, логике и естественным наукам!</p>
				<div className="btn-group">
					<button className="btn">Начать</button>
					<button className="btn btn-outline" onClick={handleClick}>Узнать больше</button>
				</div>
			</div>
			<div className="bottom-text">
				<h2>
					Более 10000 задач собраны для тебя
				</h2>
			</div>
		</div>
	)
}

export default Hero;