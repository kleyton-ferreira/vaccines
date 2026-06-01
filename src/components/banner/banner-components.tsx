// COMPONENTS
import BannerItens from './banner-itens-components'

// SCRIPT
import { Images } from '../../scripts/img-script'

const Banner = () => {
  return (
    <>
      <BannerItens
        img={Images.banner}
        highlight="Bem-vindo ao futuro da sua clínica"
        description="de vacinação com a Vacina SYS!"
      />
    </>
  )
}

export default Banner
