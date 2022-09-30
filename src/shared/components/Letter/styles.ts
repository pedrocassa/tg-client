import styled from 'styled-components'
import { LetterState } from 'types'

type LetterContainerProps = {
  isLast?: boolean
  letterState?: LetterState
}

export const LetterContainer = styled.div<LetterContainerProps>`
  width: 70px;
  height: 70px;
  border-radius: 5px;
  border: ${({ theme }) => theme.colors.primary + ' 2px solid'};
  margin-right: ${({ isLast }) => (isLast ? '0' : '10px')};
  background-color: ${({ letterState, theme }) => {
    if (letterState === LetterState.CORRECT)
      return theme.colors.letter.background.correct
    else if (letterState === LetterState.ALMOST)
      return theme.colors.letter.background.almost
  }};
  color: ${({ letterState, theme }) => {
    if (
      letterState === LetterState.CORRECT ||
      letterState === LetterState.ALMOST
    )
      return theme.colors.letter.color.white
    else return theme.colors.letter.color.black
  }};
`

export const ValueContainer = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.sizes.xxLarge};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`

export const FocusLine = styled.div`
  width: 100%;
  height: 10%;
  background-color: ${({ theme }) => theme.colors.primary};
`
