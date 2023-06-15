import styled from "styled-components";

const ImageContainer = styled.div`
  position: relative;
  border-radius: 4%;
  overflow: hidden;
  flex-basis: ${({ width }) => (width ? width : "100%")};
  ${({ rounded }) => (rounded ? "border-radius:50%;" : null)}

  & > img {
    object-fit: contain;
    ${({ gray }) => (gray ? "filter:grayscale(30%);" : null)}
  }
`;

export default ImageContainer;
