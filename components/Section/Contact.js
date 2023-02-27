import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import Section from "../Layout/Section";

const MainTitle = styled.h1`
  color: ${({ theme }) => theme.brightFont};
  font-size: 56px;
  letter-spacing: 2px;
  padding-left: 5px;
  margin-right: auto;
`;

const ContactMenu = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  padding-bottom: 90px;
  background: transparent;
  margin: 50px 0;
`;

const CallButton = styled.a`
  display: flex;
  padding: 20px;
  margin: 20px;
  border: 3px solid ${({ theme }) => theme.brightFont};
  color: ${({ theme }) => theme.brightFont};
  text-decoration: none;
  text-transform: uppercase;
  width: 90%;
  font-size: 15px;
  align-items: center;
  justify-content: center;
  border-radius: 2%;
  transition: background-color 0.2s;
  background: #ad5389; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #3c1053,
    #ad5389
  ); /* Chrome 10-25, Safari 5.1-6 */
  cursor: pointer;
  position: relative;
  position: relative;
  z-index: 1;

  @media (orientation: landscape) {
    width: 360px;
    overflow: hidden;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: ${({ theme }) => theme.quinary};
      transform: translateX(100%);
      transition: transform 0.3s;
      z-index: -1;
    }
    &:hover {
      filter: contrast(200%);
      &::before {
        transform: translateX(0);
      }
    }
  }
`;

const ButtonIcon = styled.div`
  background-image: url(${({ img }) => img});
  background-position: center;
  background-size: cover;
  width: 25px;
  height: 25px;

  position: absolute;
  top: 50%;
  left: 3%;
  transform: translateY(-50%);
`;

const Contact = (props) => {
  return (
    <Parallax x={[-10, 10]}>
      <Section id="contact">
        <MainTitle>Contact with me</MainTitle>
        <ContactMenu>
          <CallButton href="tel: 505803692">
            <ButtonIcon img="./icons/phone.svg" /> +48 505 803 692
          </CallButton>
          <CallButton href="mailto: antoni.zalupka123@gmail.com">
            <ButtonIcon img="./icons/email.svg" /> antoni.zalupka123@gmail.com
          </CallButton>
          <CallButton
            target="_blank"
            href="https://www.linkedin.com/in/antoni-za%C5%82upka-ab697a1b6/"
          >
            <ButtonIcon img="./icons/email.svg" /> LINKEDIN
          </CallButton>
        </ContactMenu>
      </Section>
    </Parallax>
  );
};

export default Contact;
