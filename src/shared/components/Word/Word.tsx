import React from 'react'
import * as S from './styles'
import { Letter } from '../Letter'
import { indexIsLast } from '../../utils'

type WordProps = {
  rowLetters: string[]
  isLast?: boolean
  rowNumber: number
}

export function Word({ rowLetters, isLast, rowNumber }: WordProps) {
  return (
    <S.Container isLast={isLast}>
      {rowLetters.map((letter, index) => (
        <Letter
          value={letter}
          rowNumber={rowNumber}
          columnNumber={index}
          key={index}
          isLast={indexIsLast(rowLetters, index)}
        />
      ))}
    </S.Container>
  )
}
