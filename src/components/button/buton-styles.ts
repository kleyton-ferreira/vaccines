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
    position: relative;
    background: ${Colors.text.white};
    overflow: hidden;
    z-index: 1;
  
  `,

    secondary: css`
    color: ${Colors.text.white};
    transition: all 0.3s ease;
    display: inline-block;
    
    &:hover {
      color: ${Colors.text.white};
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
  position: relative;
  z-index: 10003;
  padding: 12px 40px;
  border-radius: 30px;
  border: none;
  text-decoration: none;
  font-weight: 400;
  overflow: hidden;
  cursor: pointer;
 

  display: flex;
  align-items: center;
  
  p {
    position: relative;
    z-index: 3;
    font-weight: 600;
  }

  h4 {
    font-weight: 400;
    color: ${Colors.text.buttonwaths};; 
    display: flex;
    align-items: center;
    gap: 3px;
    font-size: 18px;
    margin-left: 10px;
  }

i {
  position: relative;
  top: 0;
  right: -60px;
  z-index: 2;

}

i::after {
  content: "";
  position: absolute;
  z-index: -1;
  top: -30px;
  right: -80px;
 
  width: 130px;
  height: 83px;
}

  strong {
    font-weight: bold;
  }

   ${({ variant = "primary" }) => buttonVariants[variant as ButtonVariant]}

   ${({ variantText = "textxl" }) => buttonFontsVariants[variantText as TextVariant]}
`;