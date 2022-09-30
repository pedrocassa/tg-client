import styled from 'styled-components'

type ContainerProps = {
  isLast?: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  margin-bottom: ${({ isLast }) => (isLast ? '0' : '10px')};
`
