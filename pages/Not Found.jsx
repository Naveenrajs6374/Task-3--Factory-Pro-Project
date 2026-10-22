import Hero from '../About page/Hero section/Hero'
import NotFound from '../Not Found page/Not Found section/Not Found'
import heroBg from '../assets/About Us Images/Hero image/Image (6).png'

export default function NotFoundPage() {
  return (
    <>
      <Hero light="Page" bold="Not Found" current="404" image={heroBg} />
      <NotFound />
    </>
  )
}