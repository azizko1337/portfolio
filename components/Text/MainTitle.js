import styled from "styled-components";

const MainTitle = styled.h1`
  color: ${({ theme, color }) => theme[color] || theme.brightFont};
  font-size: ${({ size }) => size || "72px"};
  letter-spacing: 2px;
  padding-left: 5px;
  margin-right: auto;
  line-height: 75%;
  margin-bottom: 30px;
  ${({ marginTop }) => (marginTop ? `margin-top: ${marginTop};` : null)}
`;

export default MainTitle;
