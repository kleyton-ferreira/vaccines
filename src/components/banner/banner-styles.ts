import styled from "styled-components";
import Colors from "../../theme/theme-color";

export const BannerContainer = styled.div`
 width: 94%;
 margin: auto;
 overflow: hidden;

 background: ${Colors.background.backgroundBlue};
 border-radius: 20px;
`

export const BannerContent = styled.div`
 display: flex;
 align-items: center;
 gap: 160px;
`

export const BannerText = styled.div`
 color: ${Colors.text.white};
 font-weight: 100;

 h2 {
    font-size: 48px;  
    font-weight: 700;
    margin-bottom: -4px;
}

p {
    font-size: 20px;  
    line-height: 24px;
    margin-top: 16px;
 }

 span{
    display: block;
 }
`