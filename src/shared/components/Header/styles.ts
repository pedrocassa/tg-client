import styled from "styled-components";

export const Container = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;

  h1 {
    font-size: ${({ theme }) => theme.font.sizes.xxxLarge};
    letter-spacing: 2px;
  }
`;
