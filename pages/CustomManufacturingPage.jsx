import Hero from '../About page/Hero section/Hero'
import ServiceDetails from '../Custom Manufacturing Solution Page/Services/Services'
import heroBg from '../assets/Custom Manufacturing Solution Page image/Hero image/Image (8).png'

export default function CustomManufacturingPage() {
  return (
    <>
      <Hero
        light="Custom Manufacturing"
        bold="Solution"
        current="Custom Manufacturing Solution"
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services/custom-manufacturing-solution' },
        ]}
        image={heroBg}
      />
      <ServiceDetails />
    </>
  )
}