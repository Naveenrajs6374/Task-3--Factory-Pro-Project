import Hero from '../About page/Hero section/Hero'
import Contact from '../Container page/Contact section/Contact'
import Location from '../Container page/Location section/Location'
import heroBg from '../assets/Container page image/Hero image/0c6ed1f284ad103f098347c986f9842aa4608b9f (1).jpg'

export default function ContactPage() {
  return (
    <>
      <Hero light="Contact" bold="Us" current="Contact Us" image={heroBg} />
      <Contact />
      <Location />
    </>
  )
}