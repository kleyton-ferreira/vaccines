import React, { FunctionComponent } from 'react'

// COMPONENTS
import ResourcesCards from '../ resources-cards/ resources-cards-components'

// STYLES
import { ResourcesContainer, ResourcesContent } from './ resources-styles'

// SCRIPT
import { Images } from '../../scripts/img-script'

interface ResourCesCardsProps {
  title: string
  subTitle: string
  icon?: React.ReactNode
  btn?: React.ReactNode
}

const ResourCesItens: FunctionComponent<ResourCesCardsProps> = ({
  title,
  subTitle,
}) => {
  return (
    <>
      <ResourcesContainer>
        <h2> {title} </h2>
        <p> {subTitle} </p>
        <ResourcesContent>
          <ResourcesCards
            img={Images.iconOne}
            title="Multiclínicas"
            subTitle="Gerencie várias unidades com facilidade!"
          />

          <ResourcesCards
            img={Images.iconTwo}
            title="SI-PNI Web"
            subTitle="Agilize sua rotina de reporte!"
          />

          <ResourcesCards
            img={Images.iconThree}
            title="Relatórios Avançados"
            subTitle="Decisões estratégicas."
          />

          <ResourcesCards
            img={Images.iconFour}
            title="Nota Fiscal"
            subTitle="Simplifique sua rotina tributária!"
          />

          <ResourcesCards
            img={Images.iconFive}
            title="Controle de Estoqu"
            subTitle="Mantenha seu estoque sob controle!"
          />
        </ResourcesContent>
      </ResourcesContainer>
    </>
  )
}

export default ResourCesItens
