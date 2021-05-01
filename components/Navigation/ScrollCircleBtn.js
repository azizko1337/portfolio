import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { theme } from "../../styles/colors";

const BtnWrapper = styled.button`
	background-color:transparent;
	outline:none;
	border:none;
	position:fixed;
	z-index:2;
	bottom:1%;
	left:50%;
	transform:translateX(-50%) rotate(0deg);
	width:60px;
	height:60px;
	padding:5px;
`;

const Canvas = styled.canvas`
	position:absolute;
	top:50%;
	left:50%;
	transform:translate(-50%, -50%) rotate(0deg);
	background-image:url("./icons/arrow.svg");
	background-position:center;
	background-size:70%;
	background-repeat:no-repeat;
	transition:transform .2s;

	${({active}) => active ? `
		transform:translate(-50%, -50%) rotate(180deg);
	` : null}
`;

const ScrollCircleBtn = props => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

		const setCircleFill = () => {
			const gradient = context.createLinearGradient(0, 0, 50, 50);
			gradient.addColorStop(0, theme.primary);
			gradient.addColorStop(1, theme.quinary);

			const body = document.body,
    				html = document.documentElement;
			const scrollProgress = window.pageYOffset/(Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)-window.innerHeight);
			const degrees = (1-scrollProgress)*360 > 0 ? (1-scrollProgress)*360 : 0;
			const radians = degrees * (Math.PI / 180);
			var x = 25;
			var y = 25;
			var r = 19;
			var s = 0;

			context.clearRect(0, 0, 50, 50);
			context.beginPath();
			context.strokeStyle = gradient;
			context.lineWidth = 6;
			context.arc(x, y, r, s, radians, false);
			context.stroke();
		};

		document.addEventListener("scroll", setCircleFill);
		document.addEventListener("resize", setCircleFill);
		setCircleFill();
  }, [])
  
  return (
		<BtnWrapper>
			<Canvas active={props.active} width="50" height="50" ref={canvasRef} {...props}/>
		</BtnWrapper>
	)
}

export default ScrollCircleBtn;