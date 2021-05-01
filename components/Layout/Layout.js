import Wrapper from "./Wrapper";
import Navigation from "../Navigation/Navigation";
import styled from "styled-components";

const MaxWidth = styled.div`
	width:100%;
	max-width:1400px;
	margin:0 auto;
`

const Layout = props => {
	return(
		<Wrapper>
			<Navigation />
			<MaxWidth>
				{props.children}
			</MaxWidth>
		</Wrapper>
	)
}

export default Layout;