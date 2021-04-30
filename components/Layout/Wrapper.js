import styled from "styled-components";

const Wrapper = styled.div`
	width:100%;
	min-height:200vh;
	background-color:#121212;
	position:relative;
	padding:10px;
	padding-left:25px;
	color:white;

	&::after{
		content:"";
		display:block;
		width:5px;
		height:100vh;
		position:fixed;
		top:0;
		left:10px;
		background-color:${({theme}) => theme.quinary};
	}
`;

export default Wrapper;