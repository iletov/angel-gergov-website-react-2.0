import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { projectsArray } from '../helpers/projectsStore'
import ProjectCard from '../components/ProjectCard'
import '../styles/Carousel.css'

function projectCarousel() {
	const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 800, min: 564 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 564, min: 0 },
    items: 1
  }
};



	return (
		<>
			<Carousel responsive={responsive}
				infinite={true}
				removeArrowOnDeviceType={['tablet', 'mobile']}
        ssr={true}
        >
			{projectsArray.map((item, i) =>(
				<ProjectCard projectItem={item} />
				))}
			</Carousel>
		</>
	)
}

export default projectCarousel