import styled from "styled-components";
import { useState } from "react";
import ScrollCircleBtn from "./ScrollCircleBtn";

const NavWrapper = styled.nav`
  width: 100%;
  height: 38vh;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.quinary};
  color: ${({ theme }) => theme.brightFont};
  display: flex;
  justify-content: flex-end;
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 75px;
  z-index: 2;

  ${({ active }) =>
    active
      ? null
      : `
		transform:translateY(100%);
	`}

  @media(orientation:landscape) {
    top: 0;
    left: 50%;
    bottom: auto;
    height: 10vh;
    transform: translateY(0);
    flex-direction: row;
    width: 50%;
    max-width: 800px;
    padding: 0;
    background-color: transparent;
  }
`;

const NavItem = styled.a`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.brightFont};
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background: ${({ theme }) => theme.tertiary};
  }
`;

const Navigation = () => {
  const [isMenuActive, setMenuActive] = useState(false);

  return (
    <>
      <ScrollCircleBtn
        active={isMenuActive}
        onClick={() => setMenuActive(!isMenuActive)}
      />
      <NavWrapper active={isMenuActive}>
        <NavItem href="#about">About me</NavItem>
        <NavItem href="#projects">My projects</NavItem>
        <NavItem href="#contact">Contact</NavItem>
      </NavWrapper>
    </>
  );
};

export default Navigation;
