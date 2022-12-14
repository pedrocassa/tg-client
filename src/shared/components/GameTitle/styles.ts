import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 0 50px 0;

  h1 {
    font-size: ${({ theme }) => theme.font.sizes.gameTitle};
    letter-spacing: 1.5px;
  }
`;
