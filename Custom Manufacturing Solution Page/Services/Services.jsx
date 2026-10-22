import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import './Services.css'
import mainImg from '../../assets/Custom Manufacturing Solution Page image/Services image/service-single-img.jpg.png'
import helpCard from '../../assets/Custom Manufacturing Solution Page image/Services image/Background (6).png'
import iconTech from '../../assets/Custom Manufacturing Solution Page image/Services image/Container (16).png'
import iconFactory from '../../assets/Custom Manufacturing Solution Page image/Services image/Container (17).png'
import iconConveyor from '../../assets/Custom Manufacturing Solution Page image/Services image/Container (18).png'
import iconPlant from '../../assets/Custom Manufacturing Solution Page image/Services image/Container (19).png'
import planImg2 from '../../assets/Custom Manufacturing Solution Page image/Services image/Container (20).png'
import planImg1 from '../../assets/Custom Manufacturing Solution Page image/Services image/Container (22).png'
import checkIcon from '../../assets/Custom Manufacturing Solution Page image/Services image/SVG (14).png'

const categories = [
  { label: 'Custom Manufacturing Solution', to: '/services/custom-manufacturing-solution' },
  { label: 'Industrial Automation And Robotics', to: '#' },
  { label: 'Product Design And Prototyping', to: '#' },
  { label: 'Equipment Maintenance Support', to: '#' },
  { label: 'Research And Development', to: '#' },
]

// Figma line breaks (desktop la exact lines). Tablet / mobile la <br> hide aagum.
const introLines = [
  [
    'Our business coaching services are designed to help entrepreneurs and professionals unlock their full potential,',
    'overcome challenges, and achieve sustainable growth. We provide tailored strategies and expert insights to improve',
    'leadership skills, enhance team performance, and streamline business operations. Whether you\u2019re launching a',
    'startup or scaling an established business, our coaching empowers you to make informed decisions, set clear goals,',
    'and drive meaningful results. With a focus on both personal development and business success, we guide you',
    'toward building a thriving, purpose-driven enterprise.',
  ],
  [
    'Through expert guidance, we focus on refining your vision, enhancing operations, and unlocking new opportunities',
    'for growth. With a collaborative approach, we empower you to make confident decisions and build a sustainable,',
    'thriving business.',
  ],
]

const whyLines = introLines[1]

const featureLines = [
  'Robotics streamline complex tasks, reducing',
  'production time and minimizing downtime, which leads',
  'to higher output and faster delivery.',
]
const features = [
  { icon: iconTech, title: 'Enhanced Efficiency' },
  { icon: iconFactory, title: 'Enhanced Efficiency' },
  { icon: iconConveyor, title: 'Enhanced Efficiency' },
  { icon: iconPlant, title: 'Enhanced Efficiency' },
]

const planLines = [
  'Our Industrial Automation and Robotics planning and strategy services focus on designing tailored automation',
  'solutions that align with your business goals.',
]
const checklist = [
  'Needs Assessment',
  'Timeline and Milestones',
  'Feasibility and ROI',
  'Technology Selection',
  'Process Optimization',
  'Scalability Planning',
]

// "How do you ensure product quality?" answer Figma la irundhu. Mathadhu 4 answers placeholder - replace pannikonga.
const faqs = [
  {
    q: 'What industries do you serve?',
    a: 'We serve a wide range of industries including automotive, aerospace, electronics, energy and heavy machinery, delivering solutions tailored to each sector.',
  },
  {
    q: 'How do you ensure product quality?',
    a: 'We implement rigorous quality control measures at every stage of production, ensuring consistency and high standards.',
  },
  {
    q: 'What sustainability practices do you follow?',
    a: 'We reduce waste, optimise energy use and choose responsible materials across our manufacturing processes.',
  },
  {
    q: 'Do you offer customized solutions?',
    a: 'Yes. Every solution is designed around your goals, from initial concept and prototyping through to full scale production.',
  },
  {
    q: 'How do you handle safety in the workplace?',
    a: 'Safety is built into our processes through regular training, strict protocols and continuous monitoring across all facilities.',
  },
]

function Lines({ lines }) {
  return lines.map((line, i) => (
    <Fragment key={line}>
      {line}
      {i < lines.length - 1 && <br className="cms-br" />}
    </Fragment>
  ))
}

function Arrow() {
  return (
    <svg className="cms-cat-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 12L12 2M4.5 2H12V9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Chevron() {
  return (
    <svg className="cms-faq-chevron" width="16" height="9" viewBox="0 0 16 9" fill="none" aria-hidden="true">
      <path d="M1 1L8 8L15 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ServiceDetails() {
  const [openIndex, setOpenIndex] = useState(1) // Figma la 2nd question open-ah irukku

  return (
    <section className="cms" id="service-details">
      <div className="cms-container">
        {/* ================= LEFT SIDEBAR ================= */}
        <aside className="cms-sidebar">
          <div className="cms-cat">
            <h3 className="cms-cat-head">Services Category</h3>
            <ul className="cms-cat-list">
              {categories.map((c) => (
                <li key={c.label}>
                  <Link to={c.to}>
                    <span>{c.label}</span>
                    <Arrow />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          
          <div className="cms-help">
            <img src={helpCard} alt="Need help? Call +1 840 841 256 or email info@domain.com" />
            <a className="cms-help-link cms-help-phone" href="tel:+18408412256" aria-label="Call +1 840 841 256" />
            <a className="cms-help-link cms-help-mail" href="mailto:info@domain.com" aria-label="Email info@domain.com" />
          </div>
        </aside>

        
        <div className="cms-main">
          <img className="cms-main-img" src={mainImg} alt="Humanoid robot working on a production line" />

          <p className="cms-p cms-fixed cms-p--first">
            <Lines lines={introLines[0]} />
          </p>
          <p className="cms-p cms-fixed cms-p--gap">
            <Lines lines={introLines[1]} />
          </p>

          {/* Why choose */}
          <h2 className="cms-title cms-title--why">
            Why choose <span>robotics services</span>
          </h2>
          <p className="cms-p cms-fixed">
            <Lines lines={whyLines} />
          </p>

          <div className="cms-features">
            {features.map((f, i) => (
              <article className="cms-feature" key={i}>
                <img className="cms-feature-icon" src={f.icon} alt="" />
                <h3 className="cms-feature-title">{f.title}</h3>
                <p className="cms-feature-text cms-fixed">
                  <Lines lines={featureLines} />
                </p>
              </article>
            ))}
          </div>

         
          <h2 className="cms-title cms-title--section">
            Planning &amp; <span>strategy</span>
          </h2>
          <p className="cms-p cms-fixed">
            <Lines lines={planLines} />
          </p>

          <ul className="cms-check">
            {checklist.map((item) => (
              <li key={item}>
                <img src={checkIcon} alt="" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="cms-plan-images">
            <img src={planImg1} alt="Robot welding on a factory floor" />
            <img src={planImg2} alt="Robotic arms welding a metal part" />
          </div>

          {/* FAQ */}
          <h2 className="cms-title cms-title--section">
            Frequently asked <span>questions</span>
          </h2>

          <div className="cms-faq">
            {faqs.map((f, i) => {
              const open = openIndex === i
              return (
                <div key={f.q} className={`cms-faq-item${open ? ' open' : ''}`}>
                  <button
                    type="button"
                    className="cms-faq-q"
                    id={`cms-faq-q-${i}`}
                    aria-expanded={open}
                    aria-controls={`cms-faq-a-${i}`}
                    onClick={() => setOpenIndex(open ? -1 : i)}
                  >
                    <span>{f.q}</span>
                    <Chevron />
                  </button>
                  {open && (
                    <div className="cms-faq-a" id={`cms-faq-a-${i}`} role="region" aria-labelledby={`cms-faq-q-${i}`}>
                      <p>{f.a}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceDetails