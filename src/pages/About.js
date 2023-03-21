import React from 'react'
import '../styles/Pages.css'
import '../styles/About.css'
import mission from '../images/services-5.png.webp'
import vision from '../images/services-6.png.webp'

function About() {
	return (
		<>
			<div className='multyPageWrap'>

			</div>

			<div className='container'>
			{/*---main row---*/}
				<div className='row'>
				{/*------------------------------------------*/}
					<div className='col-lg-4 col-md-4 about-col-left'>

						<div className='section-title'>
							<p>who we are</p>
							<h1 >Lorem ipsum dolor sit amet</h1>
						</div>

						<div className='about-para-text'>
							<p className='fw-light'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
							</p>
						</div>
					</div>
					{/*---------------------------------------*/}
					<div className='col-lg-8 col-md-8 about-col-right'>
						<div className='about-page-services'>
							<p className='fw-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</p>
						</div>
						{/*------inner row------*/}
						<div className='row inner-row'>
							<div className='col-lg-6 col-md-6'>
								<img src={mission} alt='...' />
								<h4>Mision</h4>
								<p className='fw-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
								</p>
							</div>
							<div className='col-lg-6 col-md-6'>
								<img src={vision} alt='...' />
								<h4>Vision</h4>
								<p className='fw-light'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>	
		</>
	)
}

export default About