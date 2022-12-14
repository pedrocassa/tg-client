import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 0;

  h1 {
    font-size: ${({ theme }) => theme.font.sizes.xxxLarge};
    letter-spacing: 2px;
  }
`;
