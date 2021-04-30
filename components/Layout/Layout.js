import Wrapper from "./Wrapper";
import Navigation from "../Navigation/Navigation";

const Layout = props => {
	return(
		<Wrapper>
			<Navigation />
			{props.children}
		</Wrapper>
	)
}

export default Layout;