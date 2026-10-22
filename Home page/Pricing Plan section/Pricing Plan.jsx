import './Pricing Plan.css'
import labelIcon from '../../assets/Home page Images/Pricing Plan image/Image (5).png'
import featureIcon from '../../assets/Home page Images/Pricing Plan image/SVG (6).png'
import deco1 from '../../assets/Home page Images/Pricing Plan image/icon-pricing-box-1.svg.png'
import deco2 from '../../assets/Home page Images/Pricing Plan image/icon-pricing-box-2.svg.png'
import deco3 from '../../assets/Home page Images/Pricing Plan image/icon-pricing-box-3.svg.png'
import calendarIcon from '../../assets/Home page Images/Pricing Plan image/SVG (4).png'
import cashIcon from '../../assets/Home page Images/Pricing Plan image/SVG (5).png'
import clockIcon from '../../assets/Home page Images/Pricing Plan image/Clip path group (2).png'

const features = [
  'Standard Manufacturing Services',
  'Quality Control Checks',
  'Technical Support',
  'Monthly Progress Reports',
]

// Figma : 3 cards, middle one (orange) is the highlighted plan
const plans = [
  { id: 'basic', name: 'Advanced Plan', price: '39', period: '/month', deco: deco1, featured: false },
  { id: 'standard', name: 'Advanced Plan', price: '39', period: '/month', deco: deco2, featured: true },
  { id: 'premium', name: 'Advanced Plan', price: '39', period: '/month', deco: deco3, featured: false },
]

const notes = [
  { icon: calendarIcon, text: 'Get 30 day free trial' },
  { icon: cashIcon, text: 'No any hidden fees pay' },
  { icon: clockIcon, text: 'You can cancel anytime' },
]

// showHeader={false} -> Pricing plan page la (Figma la label + heading + paragraph illa, cards mattum)
function PricingPlan({ showHeader = true }) {
  return (
    <section className={`pricing${showHeader ? '' : ' pricing--no-head'}`} id="pricing">
      <div className="pricing-container">
        {/* HEADER : label + heading | paragraph */}
        {showHeader && (
          <div className="pricing-top">
            <div className="pricing-head">
              <span className="pricing-label">
                <img src={labelIcon} alt="" />
                Pricing Plan
              </span>
              <h2 className="pricing-title">
                Transparent pricing for{' '}
                <br className="pricing-br" />
                <span>every solution</span>
              </h2>
            </div>

            <p className="pricing-text">
              We believe in providing clear and upfront pricing to ensure that you{' '}
              <br className="pricing-br" />
              understand the value of our services.
            </p>
          </div>
        )}

        {/* PLAN CARDS */}
        <div className="pricing-cards">
          {plans.map((plan) => (
            <div
              className={`pricing-card${plan.featured ? ' pricing-card--featured' : ''}`}
              key={plan.id}
            >
              <img className="pricing-deco" src={plan.deco} alt="" />

              <div className="pricing-price">
                <span className="pricing-currency">$</span>
                <span className="pricing-amount">{plan.price}</span>
                <span className="pricing-period">{plan.period}</span>
              </div>

              <h3 className="pricing-name">{plan.name}</h3>

              <ul className="pricing-features">
                {features.map((feature) => (
                  <li key={feature}>
                    <span
                      className="pricing-feature-icon"
                      style={{ '--feature-icon': `url("${featureIcon}")` }}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <button type="button" className="pricing-btn">
                Purchase Now
              </button>
            </div>
          ))}
        </div>

        {/* NOTES ROW */}
        <ul className="pricing-notes">
          {notes.map((note) => (
            <li key={note.text}>
              <img src={note.icon} alt="" />
              {note.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default PricingPlan