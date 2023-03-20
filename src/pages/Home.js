import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Home.css'
import '../styles/Pages.css'
import aboutPic from '../images/about-pic.jpg'
import ProjectCarousel from '../components/Carousel'
import AOS from 'aos'
import 'aos/dist/aos.css'



function Home() {
	useEffect(() => {
		AOS.init({duration: 2000})
	}, [])

	const navigate = useNavigate()

	return (
		<>
			<div className='homeWrap'>
				<div className='animated-text'>
					<div className='line'>Lorem ipsum dolor sit amet</div>
					<div className='line'>Sed ut perspiciatis unde</div>					
				</div>
				<button className='animated-button' onClick={()=> navigate('/contact')}>Contact me</button>
			</div>

{/*-----------Section Two About----------------*/}

			<div className='section-two'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-6'>
							<div className='about-text'>
								<div className='section-title'>
									<p>who we are</p>
									<h1 >Lorem ipsum dolor sit amet Sed ut perspiciatis unde</h1>
								</div>
								<div className='about-para-text'>
									<p className='fw-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
									<p className='fw-light'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi</p>
									<button className='animated-button about-button' onClick={()=> navigate('./about')}>Learn More</button>
								</div>
							</div>
						</div>
						<div className='col-lg-6'>
							<div className='about-pic'>
								<div className='about-pic-inner'>
									<img src={aboutPic} alt />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

{/*-----------Section Three Projects--------*/}

			
				<div id='projects' align='center' className='project-section-title'>
					<p data-aos="fade-right">My work</p>
					<h1 data-aos="fade-right">Latest Projects</h1>
				</div>
				<ProjectCarousel />
			

		</>
	)
}

export default Home