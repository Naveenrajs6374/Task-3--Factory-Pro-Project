import Hero from '../About page/Hero section/Hero'
import ProjectFactory from '../Project page/factory section/Factory'
import heroBg from '../assets/Project page Image/Hero image/0c6ed1f284ad103f098347c986f9842aa4608b9f.jpg'

export default function ProjectPage() {
  return (
    <>
      <Hero light="Our" bold="Projects" current="Projects" image={heroBg} />
      <ProjectFactory />
    </>
  )
}