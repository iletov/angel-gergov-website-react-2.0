import React from 'react'
import { Card } from 'react-bootstrap'
import '../styles/ProjectCard.css'

function ProjectCard(props) {
	const project = props.projectItem

	return (
		<>
			<Card style={{ borderRadius: '1px' }} className='my-5 mx-2' >
				
				<Card.Img 
					style={{ 
						height: '32rem',
						borderRadius: '1px'
					}} src={project.image} />

				<Card.Body >
					<Card.Text>{project.paragraph}</Card.Text>
					<Card.Title>{project.title}</Card.Title>
				</Card.Body>
			</Card>
		</>
	)
}

export default ProjectCard