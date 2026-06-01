import { FunctionComponent } from 'react'

import { Link } from 'react-router-dom'

// STYLES
import {
  HeaderContainer,
  HeaderLogo,
  HeaderNav,
  HeaderButton,
  HeaderButtonLink,
} from './header-style'
import Button from '../button/button-components'

// ICONS
import { RiWhatsappLine } from 'react-icons/ri'
import { FaRegUser } from 'react-icons/fa'

interface NavItem {
  label: string
  to: string
}

interface NavIcon {
  element: React.ReactNode
  to: string
}

interface HeaderItensProps {
  img: string
  altText?: string
  to?: string
  navItem: NavItem[]
  navIcon: NavIcon[]
}

const HeaderItens: FunctionComponent<HeaderItensProps> = ({
  img,
  altText = 'logo',
  to,
  navItem,
  navIcon,
}) => {
  return (
    <>
      <HeaderContainer>
        <HeaderLogo>
          {to ? (
            <Link to={to}>
              <img src={img} alt={altText} />
            </Link>
          ) : (
            <img src={img} alt={altText} />
          )}
        </HeaderLogo>
        <HeaderNav>
          {navItem.map((item) => (
            <Link key={item.to} to={item.to}>
              <li> {item.label} </li>
            </Link>
          ))}
        </HeaderNav>
        <HeaderButton>
          <Button variant="primary">
            {<FaRegUser size={20} />} Acesso Plataforma
          </Button>
          <Button variant="secondary">
            <span> {<RiWhatsappLine size={20} />} </span> Fale no WhatsApp
          </Button>
          <HeaderButtonLink>
            {navIcon.map((icon, index) => (
              <Link key={`${icon.to}-${index}`} to={icon.to}>
                <span> {icon.element} </span>
              </Link>
            ))}
          </HeaderButtonLink>
        </HeaderButton>
      </HeaderContainer>
    </>
  )
}

export default HeaderItens
