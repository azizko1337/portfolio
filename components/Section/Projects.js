import styled from "styled-components";
import Project from "../Project/Project";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";

const Section = styled.section`
  padding-top: 30px;
`;

const MainTitle = styled.h1`
  color: ${({ theme }) => theme.brightFont};
  font-size: 56px;
  letter-spacing: 2px;
  padding-left: 5px;
`;

const Projects = (props) => {
  const { projects } = props;

  return (
    <Section id="projects">
      <MainTitle>
        My projects{" "}
        <Link target="_blank" href="https://github.com/azizko1337">
          <AiFillGithub />
        </Link>
      </MainTitle>

      {(projects || []).map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </Section>
  );
};

export default Projects;
