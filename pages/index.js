import LoadingPage from "../components/Loading/LoadingPage";
import Layout from "../components/Layout/Layout";
import About from "../components/Section/About";
import Projects from "../components/Section/Projects";
import Contact from "../components/Section/Contact";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const Index = (props) => {
  const { projects, photos } = props;

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
      title: "FL4NEL",
      subtitle: "web music player",
      image: "https://www.scdn.co/i/_global/open-graph-default.png",
      horizontalImage: "https://www.scdn.co/i/_global/open-graph-default.png",
      desc: [
        ["language", "javascript"],
        ["framework", "Next.js"],
        ["modules", "styled-components"],
      ],
    },
    {
      id: 2,
      title: "FL4NEL",
      subtitle: "web music player",
      image: "https://www.scdn.co/i/_global/open-graph-default.png",
      horizontalImage: "https://www.scdn.co/i/_global/open-graph-default.png",
      desc: [
        ["language", "javascript"],
        ["framework", "Next.js"],
        ["modules", "styled-components"],
      ],
    },
    {
      id: 3,
      title: "FL4NEL",
      subtitle: "web music player",
      image: "https://www.scdn.co/i/_global/open-graph-default.png",
      horizontalImage: "https://www.scdn.co/i/_global/open-graph-default.png",
      desc: [
        ["language", "javascript"],
        ["framework", "Next.js"],
        ["modules", "styled-components"],
      ],
    },
  ];

  return {
    props: { projects },
  };
};

export default Index;
