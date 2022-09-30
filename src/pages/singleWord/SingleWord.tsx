import React from 'react'
import * as S from './styles'
import { Board, Header, Keyboard } from 'shared/components'

export function SingleWord() {
  return (
    <S.Container>
      <Header />
      <Board />
      <Keyboard />
    </S.Container>
  )
}
