import React from 'react'
import * as S from './styles'
import { onDelete, onEnter, setLetter } from 'store'
import { useDispatch } from 'react-redux'

type LetterProps = {
  keyValue: string
  isLast?: boolean
  bigKey?: boolean
  icon?: React.ReactElement
}

export function Key({ keyValue, isLast, bigKey, icon }: LetterProps) {
  const dispatch = useDispatch()

  const handleSelectLetter = () => {
    if (keyValue === 'enter') dispatch(onEnter())
    else if (keyValue === 'delete') dispatch(onDelete())
    else dispatch(setLetter(keyValue))
  }

  return (
    <S.KeyContainer
      isLast={isLast}
      bigKey={bigKey}
      onClick={handleSelectLetter}
    >
      {icon ? icon : keyValue}
    </S.KeyContainer>
  )
}
