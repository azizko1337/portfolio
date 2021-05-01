import styled from "styled-components";
import { useState } from "react";
import Link from "next/link";

const Section = styled.section`
	padding:50px 0;
	display:flex;
	flex-direction:column;
	align-items:center;

	${({active, theme}) => active ? `
		transform:translateY(0);
	` : null}
`;

const MainTitle = styled.h1`
	color:${({theme}) => theme.brightFont};
	font-size:56px;
	letter-spacing:2px;
	padding-left:5px;
`;

const ContactButton = styled.button`
	width:80%;
	padding:30px;
	/* background: linear-gradient(33deg, #23074d, #cc5333); */
	background-color: #000000;
	background-image: linear-gradient(315deg, #000000 0%, #414141 74%);
	border:none;
	border-radius:10%;
	color:${({theme}) => theme.brightFont};
	font-weight:300;
	font-size:20px;

	${({close, theme}) => close ? `
		padding:10px;

		background:black;
		color:${theme.brightFont};
		position:absolute;
		bottom:20px;
		left:50%;
		transform:translateX(-50%);
	` : null}
`;

const ContactMenu = styled.div`
	position:fixed;
	bottom:0;
	left:0;
	width:100%;
	height:60vh;
	z-index:3;
	background-color: #000000;
	background-image: linear-gradient(315deg, #000000 0%, #414141 74%);
	transform:translateY(100%);
	transition:transform .3s;
	display:flex;
	flex-direction:column-reverse;
	align-items:center;
	justify-content:center;
	padding-bottom:90px;

	${({active}) => active ? `
		transform:translateY(0);
	` : null}
`;

const CallButton = styled.a`
	display:flex;
	padding:20px;
	margin:20px;
	border:3px solid ${({theme}) => theme.primary};
	color:${({theme}) => theme.brightFont};
	text-decoration:none;
	text-transform:uppercase;
	width:90%;
	font-size:15px;
	align-items:center;
	justify-content:center;
	border-radius:2%;
`;

const ButtonIcon = styled.div`
	background-image:url(${({img}) => img});
	background-position:center;
	background-size:cover;
	width:25px;
	height:25px;
`;

const Contact = props => {
	const [showContactMenu, setShowContactMenu] = useState(false);


	return(
		<Section id="contact">
			<ContactButton onClick={() => setShowContactMenu(!showContactMenu)}>CONTACT</ContactButton>
			<ContactMenu active={showContactMenu}>
				<ContactButton close={true} onClick={() => setShowContactMenu(!showContactMenu)}>close contact menu</ContactButton>
				<CallButton href="tel: 505803692"><ButtonIcon img="./icons/phone.svg" /> +48 505 803 692</CallButton>
				<CallButton href="mailto: antoni.zalupka123@gmail.com"><ButtonIcon img="./icons/email.svg" /> antoni.zalupka123@gmail.com</CallButton>
			</ContactMenu>
		</Section>
	)
};

export default Contact;