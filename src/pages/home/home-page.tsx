// COMPONENTS
import Header from '../../components/header/header-components'
import Banner from '../../components/banner/banner-components'
import Resources from '../../components/ resources/ resources-components'

const HomePage = () => {
  return (
    <>
      <Header />
      <section>
        <Banner />
      </section>
      <section>
        <Resources />
      </section>
    </>
  )
}

export default HomePage
