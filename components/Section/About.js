import styled from "styled-components";

const Section = styled.section`

`;

const MainTitle = styled.h1`
	color:${({theme}) => theme.brightFont};
	font-size:50px;
	letter-spacing:2px;
	padding-left:5px;
`;

const About = props => {
	return(
		<Section>
			<MainTitle>Antoni Załupka</MainTitle>
		</Section>
	)
};

export default About;