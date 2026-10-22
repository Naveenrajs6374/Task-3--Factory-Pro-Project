import Hero from '../About page/Hero section/Hero'
import PricingPlan from '../Home page/Pricing Plan section/Pricing Plan'
import WhatWeDo from '../Home page/What do we section/What do we'
import OurClientSay from '../Home page/Our Client Say section/Our Client Say'
import heroBg from '../assets/Pricing plan page Image/Hero image/0c6ed1f284ad103f098347c986f9842aa4608b9f (1).jpg'


export default function PricingPlanPage() {
  return (
    <>
      <Hero light="Pricing" bold="Plan" current="Pricing Plan" image={heroBg} />
      <PricingPlan showHeader={false} />
      <WhatWeDo />
      <OurClientSay />
    </>
  )
}