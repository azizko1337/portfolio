import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import MainTitle from "../Text/MainTitle";
import ImageContainer from "../Image/ImageContainer";
import Image from "next/image";
import Container from "../Layout/Container";
import SubTitle from "../Text/SubTitle";
import { FaLinux, FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import { SiStyledcomponents, SiJavascript, SiHtml5 } from "react-icons/si";

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
  margin-top: 30px;
  min-height: 200px;
  ${({ italic }) => (italic ? "font-style:italic;" : null)}
  font-size:18px;

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

const Technology = styled.div`
  flex-basis: 130px;
  height: 130px;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  cursor: crosshair;
  transition: background-color 0.2s;
  position: relative;

  &:hover {
    background-color: ${({ theme }) => theme.tertiary};
    &::before {
      position: absolute;
      bottom: 0;
      left: 0;
      content: ${({ technologyName }) => `"${technologyName}"`};
      width: 100%;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
    }
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
  return (
    <Section id="about">
      <MainTitle marginTop="20px" size="80px" color="grayFont">
        Antoni Załupka
      </MainTitle>
      <Container marginTop="30px;" rotated>
        <MainTitle size="170px" color="secondary">
          Hi!
        </MainTitle>
        <SubTitle>
          FULL STACK DEVELOPER
          <br />
          UI DESIGNER
          <br />
          GRAPHIC DESIGN IS MY PASSION
        </SubTitle>
      </Container>
      <Parallax x={[20, -15]} tagOuter="figure">
        <MyStory italic>
          I will create a whole application for you tailored to your needs. I'm
          fan of flat design which means that I will create a simple and
          intuitive interface.
        </MyStory>
      </Parallax>
      <MainTitle size="56px" color="brightFont">
        My technology stack
      </MainTitle>
      <Container>
        <Technology technologyName="Linux">
          <FaLinux />
        </Technology>
        <Technology>
          <FaNodeJs />
        </Technology>
        <Technology>
          <FaReact />
        </Technology>
        <Technology>
          <SiStyledcomponents />
        </Technology>
        <Technology>
          <SiHtml5 />
        </Technology>
        <Technology>
          <FaSass />
        </Technology>
        <Technology>
          <SiJavascript />
        </Technology>
      </Container>
    </Section>
  );
};

export default About;
