import LoadingPage from "../components/Loading/LoadingPage";
import Layout from "../components/Layout/Layout";
import About from "../components/Section/About";
import Projects from "../components/Section/Projects";Projects

const Index = props => {
  const { projects } = props;

  return (
    <Layout>
      <About />
      <Projects projects={projects} />
    </Layout>
  )
};

export const getServerSideProps = async () => {
  const projects = [
    {id: 1, title: "FL4NEL", subtitle: "web music player", image: "https://www.scdn.co/i/_global/open-graph-default.png", horizontalImage: "https://www.scdn.co/i/_global/open-graph-default.png", desc: [["language", "javascript"], ["framework", "Next.js"], ["modules", "styled-components"]]},
  ]

	return {
		props: { projects }
	};
};

export default Index;
