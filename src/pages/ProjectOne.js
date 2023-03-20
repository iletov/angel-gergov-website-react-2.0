import React, { useState } from 'react'
import {Row, Col, Card, Container } from 'react-bootstrap'
import CloseIcon from '@mui/icons-material/Close';
import '../styles/ProjectOne.css'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img4.jpg'
import img6 from '../images/img3.jpg'
import img7 from '../images/img2.jpg'
import img8 from '../images/img1.jpg'
import img9 from '../images/img2.jpg'
import img10 from '../images/img4.jpg'
import img11 from '../images/img3.jpg'
import img12 from '../images/img1.jpg'

function ProjectOne() {

	const data = [
	{ id: 1, imgSrc: img1, },
	{ id: 2, imgSrc: img2, },
	{ id: 3, imgSrc: img3, },
	{ id: 4, imgSrc: img4, },
	{ id: 5, imgSrc: img5, },
	{ id: 6, imgSrc: img6, },
	{ id: 7, imgSrc: img7, },
	{ id: 8, imgSrc: img8, },
	{ id: 9, imgSrc: img9, },
	{ id: 10, imgSrc: img10, },
	{ id: 11, imgSrc: img11, },
	{ id: 12, imgSrc: img12, },
	
]
	const [model, setModel] =useState(false)
	const [tempimgSrc, setTempImgSrc] = useState('')

	const getImg = (imgSrc) => {
		setTempImgSrc(imgSrc)
		setModel(true)
	}

	return (
		<>
			<div className='multyPageWrap'>
				<h1>Project one</h1>
			</div>
			
			<div className={model? "model open" : "model"}>
				<img src={tempimgSrc} />
				<CloseIcon onClick={() => setModel(false)}/>	
			</div>


		
			<Container>
				<p>Lorem Ipsum</p>
  				<Row xs={1} md={2} lg={4} className='gallery g-1'>
				{data.map((item, index)=> {
					return (
						<div className='pics' onClick={() =>getImg(item.imgSrc)} >
							<img src={item.imgSrc} />
						</div>
					)
				})}
				</Row>
			</Container>
			
			
			
		</>
	)
}

export default ProjectOne