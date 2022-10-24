import styled from "styled-components";

export const KeyboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 30px 0;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    margin-bottom: 5px;
  }
`;
