import LoadingPage from "../components/Loading/LoadingPage";
import Layout from "../components/Layout/Layout";
import About from "../components/Section/About";
import Projects from "../components/Section/Projects";
import Contact from "../components/Section/Contact";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const Index = (props) => {
  const { projects } = props;

  return (
    <Layout>
      <ParallaxProvider>
        <About />
        <Projects projects={projects} />
        <Contact />
      </ParallaxProvider>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const projects = [
    {
      id: 1,
      title: "TRAININGS-APP",
      subtitle: "Application created to manage course enrollments.",
      horizontalImage: "/images/projects/trainings-app.png",
      image: "/images/projects/trainings-app.png",
      desc: [
        ["language", "TypeScript"],
        ["framework", "Next.js"],
        ["styles", "styled-components"],
        ["auth", "iron-session"],
        ["database", "Prisma - Postgres"],
        ["testing", "Jest"],
      ],
      live: "https://trainings.azalupka.cc",
      github: "https://github.com/azizko1337/trainings-app",
    },
  ];

  return {
    props: { projects },
  };
};

export default Index;
