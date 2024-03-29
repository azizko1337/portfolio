import styled from "styled-components";
import { useEffect, useState } from "react";

const WrapperDiv = styled.div`
  width: 100%;
  min-height: 200vh;
  /* background-color:#121212; */
  background: rgb(54, 53, 75);
  background: linear-gradient(
    304deg,
    rgba(54, 53, 75, 1) 0%,
    rgba(18, 18, 18, 1) 61%
  );
  position: relative;
  padding: 10px;
  padding-left: 25px;
  color: white;
  overflow: hidden;

  @media (orientation: landscape) {
    padding-left: 50px;
  }

  &::before {
    content: "";
    display: block;
    width: 5px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 10px;
    background-color: ${({ theme }) => theme.quinary};
    transition: transform 0.2s;
    z-index: 1;

    @media (orientation: landscape) {
      left: 25px;
      width: 7px;
    }
  }

  &::after {
    content: "";
    display: block;
    height: 10px;
    width: 100vw;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.quinary};
    transition: transform 0.2s;
    transform: translateY(100%);
  }

  ${({ horizontalBar }) =>
    horizontalBar
      ? `
			&::before{
				transform:translate(-200%);
			}
			&::after{
				transform:translateY(0);
			}
		`
      : null}
`;

const Wrapper = (props) => {
  const [isBarHorizontal, setBarHorizontal] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      const body = document.body,
        html = document.documentElement;
      const lastSectionHeight = Math.max(
        (body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight) - window.innerHeight
      );
      if (lastSectionHeight <= window.scrollY + 20) {
        setBarHorizontal(true);
      } else {
        setBarHorizontal(false);
      }
    });
  }, []);

  return (
    <WrapperDiv horizontalBar={isBarHorizontal}>{props.children}</WrapperDiv>
  );
};

export default Wrapper;
