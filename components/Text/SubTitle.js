import styled from "styled-components";

const SubTitle = styled.h1`
  color: ${({ theme, color }) => theme[color] || theme.darkFont};
  font-size: ${({ size }) => size || "50px"};
  letter-spacing: 2px;
  padding-left: 5px;
  margin-right: auto;
  /* display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; */
  line-height: 75%;
`;

export default SubTitle;
