import React, { ButtonHTMLAttributes } from 'react'
import * as S from './styles'
import { theme } from '../../../styles'

export type ButtonProps = {
  onClick: () => void
  type?: 'button' | 'submit' | 'reset'
  label?: string
  children?: React.ReactNode
  outlined?: boolean
  fullWidth?: boolean
  backgroundColor?: keyof typeof theme.colors
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
  label,
  children,
  type,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <S.Button type={type} onClick={onClick} {...props}>
      {label ? <span>{label}</span> : children}
    </S.Button>
  )
}
