import React from 'react'
import '../styles/Home.css'
import '../styles/Pages.css'

function Home() {
	return (
		<>
			<div className='homeWrap'>
				<div className='animated-text'>
					<div className='line'>Lorem ipsum dolor sit amet</div>
					<div className='line'>Sed ut perspiciatis unde</div>					
				</div>
				<button className='animated-button'>Button</button>
			</div>
		</>
	)
}

export default Home