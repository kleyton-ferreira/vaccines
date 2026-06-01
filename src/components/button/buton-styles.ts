import styled, { css } from "styled-components";
import Colors from "../../theme/theme-color";

type ButtonVariant = "primary" | "secondary";

type TextVariant = "textxl" | "text2x1"

interface ButtonProps {
  variant?: ButtonVariant;
  variantText?: TextVariant
}

export const buttonVariants = {
  primary: css`
    border: 1px solid ${Colors.text.blue};
    color: ${Colors.text.blue};
    transition: all 0.6s ease;

    &:hover {
      color: ${Colors.text.white};
      background: ${Colors.text.blue};
    }
  `,

  secondary: css`
    border: 1px solid ${Colors.text.buttonwaths};
    color: ${Colors.text.buttonwaths};
    
    transition: all 0.36s ease;
    
    &:hover {
      color: ${Colors.text.white};
      background: ${Colors.text.buttonwaths};
    }
  `,

};

export const buttonFontsVariants = {
  textxl: css`
   font-size: 18px;
  `,

  text2x1: css`
   font-size: 24px;
  `,
}

export const ButtonIcon = styled.div`
 span {
  display: flex;
  align-items: center;
  font-weight: bold;
  position: absolute;
  top: 8px;
  left: 22px;
 }
`

export const ButtonNav = styled.button<ButtonProps>`
  position: relative;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  align-items: center;
  border: none;
  text-decoration: none;

  padding: 10px 40px;

  p {
    position: relative;
    left: 6px;
    font-weight: 500;
    font-size: 17px;
  }

   ${({ variant = "primary" }) => buttonVariants[variant as ButtonVariant]}

   ${({ variantText = "textxl" }) => buttonFontsVariants[variantText as TextVariant]}
`;