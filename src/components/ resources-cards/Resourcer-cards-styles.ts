import styled from 'styled-components'

interface OpenProps {
  $isOpen: boolean
}

export const ResouserCardsContainer = styled.div<OpenProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  padding: 24px;
  transition: background-color 0.8s ease, color 0.3s ease;
  margin-top: 40px;

  background-color: ${({ $isOpen }) => ($isOpen ? '#1a3a6b' : '#ffffff')};
  max-height: ${({ $isOpen }) => ($isOpen ? '440px' : '0')};
  
  h3, p {
    filter: ${({ $isOpen }) => ($isOpen ? 'brightness(0) invert(2)' : 'none')};
     transition: filter 0.6s ease;
    text-align: left;
  }

  h3 {
    margin-bottom: 8px;
  }

   img {
    width: 50px;
    height: 70px;
    object-fit: contain;
    filter: ${({ $isOpen }) => ($isOpen ? 'brightness(0) invert(1)' : 'none')};
    transition: filter 0.6s ease;
    margin-bottom: 10px;
  }
`

export const ResourceText = styled.div<OpenProps>`
  filter: ${({ $isOpen }) => ($isOpen ? 'brightness(0) invert(2)' : 'none')};
  margin-top: 20px;
  overflow: hidden;
  max-height: ${({ $isOpen }) => ($isOpen ? '200px' : '0')};
  transition: max-height 0.4s ease;

  p {
    font-size: 18px;
    text-align: left;
    line-height: 1.4;
     transition: filter 0.6s ease;
  }

`

export const ResourceButton = styled.div`
 position: relative;
 top: 8%;
 left: 14%;
 display: flex;
 justify-content: end;
`

export const ChevronIcon = styled.span<OpenProps>`
  display: inline-flex;
  transition: transform 0.6s ease;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  color: ${({ $isOpen }) => ($isOpen ? '#ffffff' : '#1D1D1F')};

  &:hover {
    transform: scale(1.1);
  }

`