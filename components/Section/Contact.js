import styled from "styled-components";
import { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { useMediaQuery } from "react-responsive";

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
	display:none;
	color:${({theme}) => theme.brightFont};
	font-size:56px;
	letter-spacing:2px;
	padding-left:5px;
	margin-right:auto;

	@media(orientation:landscape){
		display:block;
	}
`;


const ContactButton = styled.button`
	width:80%;
	padding:30px;
	background: #ad5389;  /* fallback for old browsers */
	background: -webkit-linear-gradient(to right, #3c1053, #ad5389);  /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(to right, #3c1053, #ad5389); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	border:none;
	border-radius:10%;
	color:${({theme}) => theme.brightFont};
	font-weight:normal;
	font-size:20px;
	transition:background-image .2s, background-color .2s;

	@media(orientation:landscape){
		max-width:250px;
		display:none;

		cursor:pointer;

		&:hover{
			background-image: linear-gradient(100deg, #000000 0%, #414141 74%);
		}
	}


	${({close, theme}) => close ? `
		padding:10px 30px;
		background:black;
		color:${theme.brightFont};
		position:absolute;
		bottom:20px;
		left:50%;
		transform:translateX(-50%);
		width:auto;

		@media(orientation:landscape){
			&:hover{
				background:#666;
			}
	}
	` : null}
`;

const ContactMenu = styled.div`
	position:fixed;
	bottom:0;
	left:0;
	width:100%;
	height:60vh;
	z-index:3;
	background: #ad5389;  /* fallback for old browsers */
	background: -webkit-linear-gradient(to right, #3c1053, #ad5389);  /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(to right, #3c1053, #ad5389); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	transform:translateY(100%);
	transition:transform .3s;
	display:flex;
	flex-direction:column-reverse;
	align-items:center;
	justify-content:center;
	padding-bottom:90px;

	@media(orientation:landscape){
		position:static;
		height:auto;
		min-height:60vh;
		transform:translate(0);
		margin:50px 0;
		background:transparent;
	}

	${({active}) => active ? `
		transform:translateY(0);
	` : null}
`;

const CallButton = styled.a`
	display:flex;
	padding:20px;
	margin:20px;
	border:3px solid ${({theme}) => theme.brightFont};
	color:${({theme}) => theme.brightFont};
	text-decoration:none;
	text-transform:uppercase;
	width:90%;
	font-size:15px;
	align-items:center;
	justify-content:center;
	border-radius:2%;
	transition:background-color .2s;

	@media(orientation:landscape){
		cursor:pointer;
		width:auto;
		width:360px;
		background: #ad5389;  /* fallback for old browsers */
		background: -webkit-linear-gradient(to right, #3c1053, #ad5389);  /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(to right, #3c1053, #ad5389); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

		&:hover{
			filter:contrast(200%);
		}
	}
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
	const isDisplayHorizontal = useMediaQuery({query: "(orientation:landscape)"});

	if(isDisplayHorizontal){
		return(
			<Parallax x={[-20, 35]}>
				<Section id="contact">
					<MainTitle>Contact with me</MainTitle>
					<ContactButton onClick={() => setShowContactMenu(!showContactMenu)}>CONTACT</ContactButton>
					<ContactMenu active={showContactMenu}>
						<ContactButton close={true} onClick={() => setShowContactMenu(!showContactMenu)}>close</ContactButton>
						<CallButton href="tel: 505803692"><ButtonIcon img="./icons/phone.svg" /> +48 505 803 692</CallButton>
						<CallButton href="mailto: antoni.zalupka123@gmail.com"><ButtonIcon img="./icons/email.svg" /> antoni.zalupka123@gmail.com</CallButton>
					</ContactMenu>
				</Section>
			</Parallax>
		)
	}
	
	return(
		<Section id="contact">
			<MainTitle>Contact with me</MainTitle>
			<ContactButton onClick={() => setShowContactMenu(!showContactMenu)}>CONTACT</ContactButton>
			<ContactMenu active={showContactMenu}>
				<ContactButton close={true} onClick={() => setShowContactMenu(!showContactMenu)}>close</ContactButton>
				<CallButton href="tel: 505803692"><ButtonIcon img="./icons/phone.svg" /> +48 505 803 692</CallButton>
				<CallButton href="mailto: antoni.zalupka123@gmail.com"><ButtonIcon img="./icons/email.svg" /> antoni.zalupka123@gmail.com</CallButton>
			</ContactMenu>
		</Section>
	)
};

export default Contact;