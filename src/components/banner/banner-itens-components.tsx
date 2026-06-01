import { BannerContainer, BannerContent, BannerText } from './banner-styles'

// SCRIPT
import { FunctionComponent } from 'react'

// UTILITZ
import { TextBanner } from '../../scripts/text-script'

interface BannerItensProps {
  img: string
  altText?: string
  highlight: string
  description: string
}

const BannerItens: FunctionComponent<BannerItensProps> = ({
  img,
  altText,
  highlight,
  description,
}) => {
  return (
    <>
      <BannerContainer>
        <BannerContent>
          <img src={img} alt={altText} />
          <BannerText>
            {TextBanner.map((itens) => (
              <h2 key={itens.id}> {itens.title} </h2>
            ))}
            <p>
              {highlight}
              <span> {description} </span>
            </p>
          </BannerText>
        </BannerContent>
      </BannerContainer>
    </>
  )
}

export default BannerItens
