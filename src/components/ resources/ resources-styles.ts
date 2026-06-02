import styled from "styled-components";
import Colors from "../../theme/theme-color";

export const ResourcesContainer = styled.div`
 width: 94%;
 margin: 107px auto;
 height:  600px;

 text-align: center;

  
 h2 {
    font-size: 40px;
    color: ${Colors.text.black};
    font-weight: 600;
 }

 p {
    font-size: 18px;
    color: ${Colors.text.black};
    font-weight: 300;
 }
`

export const ResourcesContent = styled.div`
 display: flex;
 justify-content: center;
 gap: 14px;
`