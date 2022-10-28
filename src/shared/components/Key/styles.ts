import styled from "styled-components";

type KeyContainerProps = {
  isLast?: boolean;
  bigKey?: boolean;
  deleteKey?: boolean;
};

export const KeyContainer = styled.div<KeyContainerProps>`
  width: ${({ bigKey }) => (bigKey ? "100px" : "50px")};
  height: 70px;
  border-radius: 5px;
  border: ${({ theme }) => theme.colors.black + " 2px solid"};
  color: ${({ theme }) => theme.colors.black};
  margin-right: ${({ isLast }) => (isLast ? "0" : "10px")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.font.sizes.large};
  text-transform: uppercase;
  cursor: pointer;

  :hover {
    scale: 1.1;
  }

  @media (max-width: 768px) {
    width: ${({ bigKey, deleteKey }) =>
      bigKey && !deleteKey ? "70px" : "30px"};
    height: 40px;
    font-size: ${({ theme }) => theme.font.sizes.medium};
    margin-right: ${({ isLast }) => (isLast ? "0" : "5px")};
    border: ${({ theme }) => theme.colors.black + " 1px solid"};

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;
