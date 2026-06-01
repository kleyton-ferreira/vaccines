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
    padding: 12px 36px;

    transition: all 0.6s ease;

    &:hover {
      color: ${Colors.text.white};
      background: ${Colors.text.blue};
    }
  `,

  secondary: css`
    border: 1px solid ${Colors.text.buttonwaths};
    color: ${Colors.text.buttonwaths};
    padding: 12px 36px;
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
  top: 6px;
  right: 32px;
  transform: rotate(316deg);
 }
`

export const ButtonNav = styled.button<ButtonProps>`
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  align-items: center;
  
  border: none;
  text-decoration: none;

  p {
    position: relative;
    z-index: 3;
    font-weight: 600;
    font-size: 16px;
  }

i {
  position: relative;
  top: 0;
  right: -60px;
}

   ${({ variant = "primary" }) => buttonVariants[variant as ButtonVariant]}

   ${({ variantText = "textxl" }) => buttonFontsVariants[variantText as TextVariant]}
`;