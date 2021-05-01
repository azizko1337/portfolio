import styled from "styled-components";
import { useEffect, useState } from "react";

const WrapperDiv = styled.div`
	width:100%;
	min-height:200vh;
	background-color:#121212;
	position:relative;
	padding:10px;
	padding-left:25px;
	color:white;
	overflow:hidden;

	&::after{
		content:"";
		display:block;
		width:5px;
		height:100vh;
		position:fixed;
		top:0;
		left:10px;
		background-color:${({theme}) => theme.quinary};
		transition: transform .2s;
		
		${({horizontalBar}) => horizontalBar ? `
			width:100vw;
			height:20px;
			bottom:0;
			left:0;
			top:auto;
			transform:rotate(180deg);
		` : null}
	}
`;

const Wrapper = props => {
	const [isBarHorizontal, setBarHorizontal] = useState(false);

	useEffect(() => {
		document.addEventListener("scroll", (e) => {
			const body = document.body,
    				html = document.documentElement;
			const lastSectionHeight = Math.max((body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)-window.innerHeight);
			
			if(lastSectionHeight <= window.scrollY){
				setBarHorizontal(true);
			}
			else{
				setBarHorizontal(false);
			}
		})
	}, []);

	return(
		<WrapperDiv horizontalBar={isBarHorizontal}>{props.children}</WrapperDiv>
	);
}

export default Wrapper;