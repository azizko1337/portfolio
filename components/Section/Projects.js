import styled from "styled-components";
import Project from "../Project/Project";

const Section = styled.section`
	
`;

const MainTitle = styled.h1`
	color:${({theme}) => theme.brightFont};
	font-size:56px;
	letter-spacing:2px;
	padding-left:5px;
`;



const Projects = props => {
	const { projects } = props;

	return(
		<Section id="projects">
			<MainTitle>Projects</MainTitle>
			{
				(projects || []).map(project => <Project key={project.id} {...project} />)
			}
		</Section>
	)
};

export default Projects;