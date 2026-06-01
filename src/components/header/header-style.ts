import styled from "styled-components";
import Colors from "../../theme/theme-color";

export const HeaderContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 27px 125px;
`

export const HeaderLogo = styled.div`
 img {
    width: 340px;
    height: 80px;
    object-fit: cover;
    cursor: pointer;
 }
`

export const HeaderNav = styled.div`
 display: flex;
 gap: 30px;
 
 li {
    color: ${Colors.text.black};
    font-size: 16px;
    transition: all 0.4s ease;
 }

 li:hover {
    color: ${Colors.text.buttonwaths};
 }
`

export const HeaderButton = styled.div`
 display: flex;
 gap: 14px;
 align-items: center;
`

export const HeaderButtonLink = styled.div`
 display: flex;
 gap: 6px;
 overflow: hidden;

 span{
   width: 40px;
   height: 40px;
   background: ${Colors.background.backgroundIcon};
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   color: ${Colors.text.white};
   font-size: 17px;
   transition: all 0.4s ease;
 }

   span:hover {
    background: ${Colors.background.backgroundBlue};
   }
`

