import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import MainTitle from "../Text/MainTitle";

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const MyStory = styled.p`
  color: ${({ theme }) => theme.primary};
  padding: 5px;
  letter-spacing: 1px;
  font-weight: 300;
  text-align: justify;
  margin-top: 10px;
  min-height: 200px;

  ${({ altType, theme }) =>
    altType
      ? `
		color:${({ theme }) => theme.primary};
	`
      : null}

  @media(orientation:landscape) {
    max-width: 33.3%;
    margin-right: calc(50%);
    margin-left: auto;

    ${({ altType, theme }) =>
      altType
        ? `
			color:${({ theme }) => theme.primary};
			max-width:25%;
			margin:20px;
			margin-right:auto;
			margin-left:calc(56% + 70px);
			padding:40px 30px;
	`
        : null}
  }
`;

const AboutMeContainer = styled.code`
  padding: 8px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  font-size: 16px;
  background-color: #161616;
  border-radius: 2%;
  border: 2px solid ${({ theme }) => theme.secondary};

  @media (orientation: landscape) {
    max-width: 50%;
    margin-left: 30%;
  }
`;

const AboutMeLine = styled.span`
  display: block;
  text-indent: ${({ indent }) => indent * 13}px;

  &:hover {
    background-color: #111;
  }
`;

const CodeString = styled.span`
  color: darkorange;
`;

const CodeKey = styled.span`
  color: cadetblue;
`;

const CodeNull = styled.span`
  color: lightblue;
  font-weight: 900;
`;

const CodeKeyword = styled.span`
  color: lightblue;
`;

const CodeName = styled.span`
  color: yellow;
`;

const About = (props) => {
  const calculateMyAge = () => {
    const today = Date.now();
    const myBirthsday = Date.UTC(2003, 9, 4);

    let myAge = today - myBirthsday;
    const YEAR_IN_MS = 1000 * 60 * 60 * 24 * 365.25;
    const MONTH_IN_MS = 1000 * 60 * 60 * 24 * 30.5;
    const DAY_IN_MS = 1000 * 60 * 60 * 24;

    let years = Math.floor(myAge / YEAR_IN_MS);
    myAge = myAge % YEAR_IN_MS;
    let months = Math.floor(myAge / MONTH_IN_MS);
    myAge = myAge % MONTH_IN_MS;
    let days = Math.floor(myAge / DAY_IN_MS);

    return `"${years} years, ${months} months and ${days} days"`;
  };

  return (
    <Section id="about">
      <MainTitle size="120px" color="darkFont">
        Antoni Załupka
      </MainTitle>
      <MainTitle size="170px" color="secondary">
        Hi!
      </MainTitle>
      <Parallax x={[20, -15]} tagOuter="figure">
        <MyStory>sadsadsadsadsa</MyStory>
      </Parallax>
      <Parallax x={[-20, 20]} tagOuter="figure">
        <MyStory altType={true}>
          Despite my interest in front-end, I also try to do backend for my own
          projects. I have prepared a few examples below.
        </MyStory>
      </Parallax>
    </Section>
  );
};

export default About;
