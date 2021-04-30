import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
	width:100%;
	height:100vh;
	position:fixed;
	top:0;
	left:0;
	background-color:#121212;
`

const throbberRotation = keyframes`
  0%{
    transform: translate(-50%, -50%) rotate(0deg);
  }

  100%{
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;
const Throbber = styled.div`
	width:75px;
	height:75px;
	position:absolute;
	top:50%;
	left:50%;
	transform:translate(-50%, -50%);
	border-radius:100%;
	animation: ${throbberRotation} 3s infinite linear;
	overflow:hidden;

	&::before{
		content:"";
		display:block;
		width:37.5px;
		height:37.5px;
		position:absolute;
		top:0;
		left:0;
		background-color:darkviolet;
	}

	&::after{
		content:"";
		display:block;
		width:37.5px;
		height:37.5px;
		position:absolute;
		top:50%;
		left:50%;
		background-color:darkviolet;
	}
` 

const LoadingPage = () => {
	return(
		<Wrapper>
			<Throbber />
		</Wrapper>
	)
}

export default LoadingPage;