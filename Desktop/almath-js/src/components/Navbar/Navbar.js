import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import './Navbar.css'


const Navbar = () => {

	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);

	function handleClickToWorlds() {
		const element = document.getElementById('Worlds-section');
		element.scrollIntoView({ behavior: 'smooth' });
	}

	function handleClickToAbout() {
		const element = document.getElementById('About-section');
		element.scrollIntoView({ behavior: 'smooth' });
	}

	function handleClickToOlimpic() {
		const element = document.getElementById('Olimpic-section');
		element.scrollIntoView({ behavior: 'smooth' });
	}

	return (
		<div className='navbar'>
			<div className="container">
				<h1 style={{ marginLeft: '1rem', color: '#edfc72' }}>
					Almath
				</h1>
				<ul className={click ? 'nav active' : 'nav'}>
					<li className="nav-item">
						<a onClick={handleClickToOlimpic}>Олимпиады</a>
					</li>
					<li className="nav-item">
						<a onClick={handleClickToWorlds}>Открывай Миры</a>
					</li>
					<li className="nav-item">
						<a onClick={handleClickToAbout}>О нас</a>
					</li>
					<li className="nav-item">
						<button className='btn' href="/">Войти</button>
					</li>
				</ul>
				<div onClick={handleClick} className="hamburger">
					{click ? (<AiOutlineClose className='icon' />) : (<AiOutlineMenu className='icon' />)}
				</div>
			</div>
		</div>
	)
}

export default Navbar