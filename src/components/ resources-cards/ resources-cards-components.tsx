import { FunctionComponent, useState } from 'react'

// ICONS
import { IoChevronUpCircleSharp, IoChevronDownCircle } from 'react-icons/io5'

// UTLITIZ
import { ResourcerTitle } from '../../scripts/text-script'

// STYLES
import {
  ResouserCardsContainer,
  ResourceText,
  ResourceButton,
  ChevronIcon,
} from './Resourcer-cards-styles'
import Button from '../button/button-components'

interface ResourcesCardProps {
  title: string
  subTitle: string
  img: string
  altText?: string
}

const ResourcesCards: FunctionComponent<ResourcesCardProps> = ({
  title,
  subTitle,
  img,
  altText = 'icon',
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ResouserCardsContainer $isOpen={isOpen}>
      <img src={img} alt={altText} />
      <h3>{title}</h3>
      <p>{subTitle}</p>
      <ResourceText $isOpen={isOpen}>
        {ResourcerTitle.map((text) => (
          <p key={text.id}> {text.title} </p>
        ))}
      </ResourceText>
      <ResourceButton>
        <Button variant="btnIcon" onClick={() => setIsOpen((prev) => !prev)}>
          <ChevronIcon $isOpen={isOpen}>
            {isOpen ? (
              <IoChevronUpCircleSharp size={36} />
            ) : (
              <IoChevronDownCircle size={36} />
            )}
          </ChevronIcon>
        </Button>
      </ResourceButton>
    </ResouserCardsContainer>
  )
}

export default ResourcesCards
