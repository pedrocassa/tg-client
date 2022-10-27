import styled from "styled-components";

export const Container = styled.div`
  font-size: ${({ theme }) => theme.font.sizes.medium};

  ul {
    padding: 10px 20px;

    li {
      margin-bottom: 10px;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
