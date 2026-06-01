// COMPONENTS
import HeaderItens from './header-itens-components'

// ICON
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { TbMessage2Check } from 'react-icons/tb'

// UTILITZ
import { Images } from '../../scripts/img-script'

const Header = () => {
  return (
    <>
      <HeaderItens
        to="/"
        img={Images.logo}
        navItem={[
          { label: 'Quem Somos', to: '' },
          { label: 'Recursos', to: '' },
          { label: 'Mais Informações', to: '' },
        ]}
        navIcon={[
          { element: <FaInstagram />, to: '' },
          { element: <FaLinkedinIn />, to: '' },
          { element: <TbMessage2Check />, to: '' },
        ]}
      />
    </>
  )
}

export default Header
