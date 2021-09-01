import styled from "styled-components";
import Typed from "react-typed";
import { Parallax } from "react-scroll-parallax";

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const MainTitle = styled.h1`
  color: ${({ theme }) => theme.brightFont};
  font-size: 56px;
  letter-spacing: 2px;
  padding-left: 10px;

  @media (orientation: landscape) {
    padding: 40px;
    padding-left: 10px;
  }
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
  color: darkblue;
  font-weight: 900;
`;

const CodeKeyword = styled.span`
  color: blue;
`;

const CodeName = styled.span`
  color: yellow;
`;

const About = (props) => {
  const calculateMyAge = () => {
    const today = Date.now();
    const myBirthsday = Date.UTC(2003, 9, 4);

    const myAge = today - myBirthsday;
    const YEAR_IN_MS = 31556926000;
    const MONTH_IN_MS = 2629743830;
    const DAY_IN_MS = 86400000;

    let years = Math.floor(myAge / YEAR_IN_MS);
    let months = Math.floor(myAge / MONTH_IN_MS);
    let days = Math.floor(myAge / DAY_IN_MS);
    months = months - 12 * years;
    days = Math.floor(days - 365.25 * years);

    return `"${years} years, ${months} months and ${days} days"`;
  };

  return (
    <Section id="about">
      <MainTitle>Antoni Załupka</MainTitle>
      <Parallax x={[20, -15]} tagOuter="figure">
        <MyStory>
          <Typed
            strings={[
              "Hi! I started my adventure with programming from creating simple scripts for Minecraft in 2015. Next, I started creating plugins in Java. After long pause, in 2019 I decided to go back to programming and since then I have been learning JavaScript, mainly on the front-end.",
            ]}
            typeSpeed={3}
          />
        </MyStory>
      </Parallax>
      <Parallax x={[-5, 5]} tagOuter="figure">
        <AboutMeContainer>
          <AboutMeLine>
            <CodeKeyword>const</CodeKeyword> <CodeName>me</CodeName> = {"{"}
          </AboutMeLine>
          <AboutMeLine indent={1}>
            <CodeKey>age:</CodeKey> <CodeString>{calculateMyAge()}</CodeString>,
          </AboutMeLine>
          <AboutMeLine indent={1}>
            <CodeKey>living place:</CodeKey>{" "}
            <CodeString>"Łazy, Śląskie"</CodeString>,
          </AboutMeLine>
          <AboutMeLine indent={1}>
            <CodeKey>education:</CodeKey> [
            <CodeString>"primary school"</CodeString>],
          </AboutMeLine>
          <AboutMeLine indent={1}>
            <CodeKey>languages:</CodeKey>{" "}
            <CodeString>"English - est. B2"</CodeString>,
          </AboutMeLine>
          <AboutMeLine indent={1}>
            <CodeKey>interests:</CodeKey> [<CodeString>"JavaScript"</CodeString>
            , <CodeString>"bikes"</CodeString>, <CodeString>"cars"</CodeString>,{" "}
            <CodeString>"Taco Hemingway"</CodeString>],
          </AboutMeLine>
          <AboutMeLine indent={1}>
            <CodeKey>favTechnologies:</CodeKey> [
            <CodeString>"next.js"</CodeString>,{" "}
            <CodeString>"styled-components"</CodeString>,{" "}
            <CodeString>"node.js"</CodeString>, <CodeString>"npm"</CodeString>,{" "}
            <CodeString>"git"</CodeString>, <CodeString>"sass"</CodeString>],
          </AboutMeLine>
          <AboutMeLine indent={1}>
            <CodeKey>littleKnownTechnologies:</CodeKey> [
            <CodeString>"PostgreSQL"</CodeString>,{" "}
            <CodeString>"PHP"</CodeString>,{" "}
            <CodeString>"Express.js"</CodeString>],
          </AboutMeLine>
          <AboutMeLine indent={1}>
            <CodeKey>workExperience:</CodeKey> <CodeNull>null</CodeNull>
          </AboutMeLine>
          <AboutMeLine>{"}"}</AboutMeLine>
        </AboutMeContainer>
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
