import styled from '@emotion/styled'

export const StyledLink = styled.a<{ isActive: boolean }>`
  /* Your active link styles here */
  color: ${(props) => (props.isActive ? "yellow" : "blue")};
`;
