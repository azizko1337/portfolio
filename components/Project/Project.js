import styled from "styled-components";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

const ProjectContainer = styled.div`
  width: 200%;
  min-height: 80vh;
  transition: transform 0.4s;
  display: flex;
  justify-content: space-between;
  margin: 120px 0;
  font-size: 20px;
  border-top: 5px solid ${({ theme }) => theme.primary};
  padding-top: 10px;

  ${({ details }) =>
    details
      ? `
		transform:translateX(-50%);
	`
      : null}

  @media(orientation:landscape) {
    width: 100%;
  }
`;

const ProjectThumbnailContainer = styled.div`
  flex-basis: calc(50% - 12.5px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ProjectDetailsContainer = styled.div`
  flex-basis: calc(50% - 12.5px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px;

  @media (orientation: landscape) {
    padding-top: 100px;
  }
`;

const ProjectTitle = styled.h2`
  text-align: center;
  width: 100%;
  @media (orientation: landscape) {
    width: 200%;
    font-size: 2rem;
    padding: 10px;
  }

  ${({ altVersion, theme }) =>
    altVersion
      ? `
		color:${theme.primary};
		text-align:left;
		@media(orientation:landscape){
			display:none;
		}
	`
      : null}
`;
const Subtitle = styled.h3`
  width: 100%;
  text-align: center;
  font-weight: 300;
  font-variant: small-caps;
  margin-bottom: 5px;

  @media (orientation: landscape) {
    width: 200%;
    color: ${({ theme }) => theme.primary};
    padding: 10px;
  }

  ${({ altVersion, theme }) =>
    altVersion
      ? `
		color:${theme.secondary};
		text-align:left;
		@media(orientation:landscape){
			display:none;
		}
	`
      : null}
`;
const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  flex-grow: 1;
  border-radius: 4%;
  overflow: hidden;

  & > img {
    object-fit: cover;
  }
`;
const AccessInformation = styled.span`
  display: block;
  font-weight: 300;
  text-align: center;
  font-size: 16px;
  padding: 4px;
  font-style: italic;

  @media (orientation: landscape) {
    display: none;
  }
`;

const Button = styled(Link)`
  width: 60%;
  padding: 15px;
  color: ${({ theme }) => theme.primary};
  text-align: center;
  border: 3px solid ${({ theme }) => theme.tertiary};
  cursor: pointer;
  transition: background-color 0.2s;
  text-decoration: none;
  position: relative;
  z-index: 1;

  @media (orientation: landscape) {
    overflow: hidden;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: ${({ theme }) => theme.quinary};
      transform: translateX(-100%);
      transition: transform 0.3s;
      z-index: -1;
    }
    &:hover {
      &::before {
        transform: translateX(0);
      }
    }
  }
`;

const CodeBox = styled.p`
  padding: 8px;
  display: flex;
  flex-direction: column;
  font-size: 13px;
  background-color: #161616;
  border-radius: 2%;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary};
  min-height: 40%;
`;
const CodeLine = styled.span`
  display: block;
  text-align: left;
  text-indent: ${({ indent }) => (indent || 0) * 13}px;
  border-radius: 2%;

  &:hover {
    background-color: #111;
  }
`;
const CodeLineKey = styled.span`
  color: cadetblue;
`;
const CodeLineValue = styled.span`
  color: darkorange;
`;
const CodeLineThisKeyword = styled.span`
  color: blue;
`;

const Project = (props) => {
  const { title, subtitle, image, horizontalImage, desc, live, github } = props;

  const [showDetails, setShowDetails] = useState(false);
  const isDisplayHorizontal = useMediaQuery({
    query: "(orientation:landscape)",
  });
  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      if (eventData.dir === "Left") {
        setShowDetails(true);
      } else if (eventData.dir === "Right") {
        setShowDetails(false);
      }
    },
  });

  return (
    <ProjectContainer {...handlers} details={showDetails}>
      <ProjectThumbnailContainer>
        <ProjectTitle>{title}</ProjectTitle>
        <Subtitle>{subtitle}</Subtitle>
        <ImageContainer>
          <Image
            alt="Project screenshot"
            src={isDisplayHorizontal ? horizontalImage : image}
            fill
          />
        </ImageContainer>
        <AccessInformation>Slide left to show details.</AccessInformation>
      </ProjectThumbnailContainer>
      <ProjectDetailsContainer>
        <span>
          <ProjectTitle altVersion={true}>{title}</ProjectTitle>
          <Subtitle altVersion={true}>{subtitle}</Subtitle>
        </span>

        <CodeBox>
          <CodeLine>{"constructor(){"}</CodeLine>
          {(desc || []).map((descLine, id) => (
            <CodeLine indent={1} key={`${descLine[0]}${descLine[1]}${id}`}>
              <CodeLineThisKeyword>this</CodeLineThisKeyword>.
              <CodeLineKey>{descLine[0]}</CodeLineKey> ={" "}
              <CodeLineValue>"{descLine[1]}"</CodeLineValue>;
            </CodeLine>
          ))}
          <CodeLine>{"}"}</CodeLine>
        </CodeBox>

        <Button passHref href={live || "#"}>
          LIVE
        </Button>
        <Button passHref href={github || "#"}>
          GITHUB
        </Button>
      </ProjectDetailsContainer>
    </ProjectContainer>
  );
};

export default Project;
