import React from 'react'
import * as S from './styles'
import { Button, Header } from 'shared/components'
import { useNavigate } from 'react-router-dom'

export function Home() {
  const navigate = useNavigate()
  const handlePlaySingleWordButton = () => navigate('/single-word')

  return (
    <S.Container>
      <Header />
      <Button
        type={'button'}
        onClick={handlePlaySingleWordButton}
        label={'Jogar'}
        style={{ marginBottom: 10 }}
      />
      <Button type={'button'} onClick={() => null} label={'Regras'} outlined />
    </S.Container>
  )
}
