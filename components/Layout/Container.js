import styled from "styled-components";

const Container = styled.div`
  width: ${({ width }) => (width ? width : "100%")};
  flex-basis: 30vh;
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  align-items: center;
  ${({ marginTop }) => (marginTop ? `margin-top: ${marginTop};` : null)}
  flex-grow:1;
  gap: 20px;
  justify-content: center;

  ${({ rotated }) =>
    rotated
      ? `@media (orientation: portrait) {
    flex-direction: column-reverse;
  }`
      : null}
`;

export default Container;
