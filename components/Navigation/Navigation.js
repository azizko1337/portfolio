import styled from "styled-components";
import { useState } from "react";
import ScrollCircleBtn from "./ScrollCircleBtn";

const NavWrapper = styled.nav`
	width:100%;
	height:45vh;
	position:fixed;
	bottom:0;
	left:0;
	background-color:${({theme}) => theme.quinary};
	color:${({theme}) => theme.brightFont};
	display:flex;
	justify-content:flex-end;
	transition:transform .2s;
	display:flex;
	flex-direction:column;
	justify-content:center;
	padding-bottom:75px;
	z-index:1;

	${({active}) => active ? null : `
		transform:translateY(100%);
	`}
`;

const NavItem = styled.a`
	display:flex;
	text-align:center;
	flex-grow:1;
	align-items:center;
	justify-content:center;
`;

const Navigation = () => {
	const [isMenuActive, setMenuActive] = useState(false);

	return(
		<>
			<ScrollCircleBtn active={isMenuActive} onClick={() => setMenuActive(!isMenuActive)}/>
			<NavWrapper active={isMenuActive}>
				<NavItem>About me</NavItem>
				<NavItem>My skills</NavItem>
				<NavItem>My projects</NavItem>
				<NavItem>Contact</NavItem>
			</NavWrapper>
		</>
	)
};

export default Navigation;