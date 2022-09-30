import styled from 'styled-components'

type KeyContainerProps = {
  isLast?: boolean
  bigKey?: boolean
}

export const KeyContainer = styled.div<KeyContainerProps>`
  width: ${({ bigKey }) => (bigKey ? '100px' : '50px')};
  height: 70px;
  border-radius: 5px;
  border: ${({ theme }) => theme.colors.primary + ' 2px solid'};
  color: ${({ theme }) => theme.colors.primary};
  margin-right: ${({ isLast }) => (isLast ? '0' : '10px')};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.font.sizes.large};
  text-transform: uppercase;
  cursor: pointer;
`
