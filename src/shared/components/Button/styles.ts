import styled, { css, DefaultTheme } from "styled-components";
import { ButtonProps } from "./Button";

export type StyledButtonProps = Pick<
  ButtonProps,
  "fullWidth" | "outlined" | "backgroundColor"
>;

const ButtonModifiers = {
  fullWidth: () => css`
    width: 100%;
  `,

  outlined: (theme: DefaultTheme, color?: string) => css`
    background-color: transparent;
    color: ${color ?? theme.colors.primary};
    border: 2px solid ${color ?? theme.colors.primary};
  `,
};

export const Button = styled.button<StyledButtonProps>`
  width: min(320px, 100%);
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.letter.color.white};
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ? backgroundColor : theme.colors.primary};
  border-radius: ${({ theme }) => theme.border.radius.small};
  border: none;
  ${({ fullWidth }) => fullWidth && ButtonModifiers.fullWidth()}
  ${({ theme, outlined, color }) =>
    outlined && ButtonModifiers.outlined(theme, color)};

  &:hover {
    opacity: 0.8;
    scale: 1.05;
  }

  span {
    font-size: ${({ theme }) => theme.font.sizes.medium};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    letter-spacing: ${({ theme }) => theme.font.spacing.medium};
    text-transform: uppercase;
  }
`;
