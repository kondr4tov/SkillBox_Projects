import React from 'react';
import './About.css';
import AboutCard from './AboutCard';

import { BsFillMortarboardFill } from 'react-icons/bs';

const About = () => {
	return (
		<div className='about' id='About-section'>
			<div className="container">
				<h2>
					Узнайте, как Almath способствует успеху
				</h2>
				<p>
					Тут описание того как это будет работать и бла бла бла много текста как всегда нужно будет доделывать что-то
				</p>
				<div className="card-container">
					<div className="card">
						<AboutCard heading='Мотивация' text='Созданы уникальные Миры и персонажи. Изучай новые Миры решая задачи' />
					</div>
					<div className="card">
						<AboutCard heading='Самостоятельность' text='Наша цель - научить думать самостоятельно. Задания подобраны именно с этой целью' />
					</div><div className="card">
						<AboutCard heading='Программа' text='Мы собрали все лучшее из математических программ России, Англии и США' />
					</div>
					<div className="card">
						<AboutCard heading='Математика' text='Описание первого шага как это работает' />
					</div><div className="card">
						<AboutCard heading='Логика' text='Описание первого шага как это работает' />
					</div>
					<div className="card">
						<AboutCard heading='Наука' text='Описание первого шага как это работает' />
					</div>
				</div>
				<a href="/" className="btn">Начать</a>
			</div>

		</div>
	)
}

export default About