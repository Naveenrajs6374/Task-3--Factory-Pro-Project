import Hero from '../About page/Hero section/Hero'
import Factory from '../Blog page/Factory section/Factory'
import heroBg from '../assets/Blog page Image/Hero image/0c6ed1f284ad103f098347c986f9842aa4608b9f.jpg'

export default function BlogPage() {
  return (
    <>
      <Hero light="Our" bold="Blog" current="Blog" image={heroBg} />
      <Factory />
    </>
  )
}