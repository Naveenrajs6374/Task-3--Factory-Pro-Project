import AboutHero from '../About page/Hero section/Hero'
import AboutUs from '../Home page/About Us section/AboutUs'
import OurApproach from '../About page/Our Approach section/Our Approach'
import OurHistory from '../About page/Our History section/Our History'
import WhatWeDo from '../Home page/What do we section/What do we'
import OurKeyFeature from '../About page/Our Key Feature section/Our Key Feature'
import OurProcess from '../Home page/Our process section/Our process'
import OurClientSay from '../Home page/Our Client Say section/Our Client Say'
import OurTeam from '../About page/Our Team section/Our Team'
import FAQS from '../About page/FAQS section/FAQS'

export default function AboutPage() {
  return (
    <>
      <AboutHero />
        <AboutUs buttonText="Contact Us" buttonLink="/contact" />
        <OurApproach />
        <OurHistory />
        <WhatWeDo />
        <OurKeyFeature />
        <OurProcess />
        <OurTeam />
        <OurClientSay />
        <FAQS />
        
    </>
  )
}