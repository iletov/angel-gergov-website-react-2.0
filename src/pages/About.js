import React from 'react'
import '../styles/Pages.css'
import '../styles/About.css'
import { Container, Row, Col } from 'react-bootstrap'
import mission from '../images/services-5.png.webp'
import vision from '../images/services-6.png.webp'
import profilePic from '../images/profile-pic.jpg'

function About() {
	return (
		<>
			<div className='multyPageWrap'>
				<h1>About Me</h1>
			</div>

			<Container>
			{/*----------section one---------*/}
				<Row className='first-about-row'>
				
					<Col lg={4} md={4} className='about-col-left'>
						<div className='section-title'>
							<p>who we are</p>
							<h1 >Lorem ipsum dolor sit amet</h1>
						</div>

						<div className='about-para-text'>
							<p className='fw-light'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
							</p>
						</div>
					</Col>
				
					<Col lg={8} md={8} className='about-col'>
						<div className='about-page-services'>
							<p className='fw-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</p>
						</div>
				
						<Row className='inner-row'>
							<Col lg={6} md={6}>
								<img src={mission} alt='...' />
								<h4>Mision</h4>
								<p className='fw-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
								</p>
							</Col>
							<Col lg={6} md={6}>
								<img src={vision} alt='...' />
								<h4>Vision</h4>
								<p className='fw-light'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
								</p>
							</Col>
						</Row>
					</Col>
				</Row>
				</Container>

				<div className='multyPageWrap second-about'>
					<p>why choose me</p>
					<h1>My ability to bring outstanding results</h1>
				</div>

				{/*------------section two-------------*/}
				<Container>
				<Row className='about-second-row'>
					<Col lg={8} md={8} className='about-col'>
						<h2>Something about me</h2>
						<p className='fw-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
						</p>
					</Col>
					<Col lg={4} md={4}  className='about-two-right'>
						<img src={profilePic} alt='...' />
					</Col>
				</Row>
				</Container>


		</>
	)
}

export default About