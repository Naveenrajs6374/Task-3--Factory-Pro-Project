import { useState } from 'react'
import './Our Approach.css'
import labelIcon from '../../assets/About Us Images/Our Approach image/Image (5).png'
import missionIcon from '../../assets/About Us Images/Our Approach image/SVG (8).png'
import visionIcon from '../../assets/About Us Images/Our Approach image/SVG (9).png'
import valueIcon from '../../assets/About Us Images/Our Approach image/SVG (10).png'
import checkIcon from '../../assets/About Us Images/Our Approach image/SVG (11).png'
import mainImg from '../../assets/About Us Images/Our Approach image/Container (11).png'

import bgImage from '../../assets/About Us Images/Our Approach image/e21bf34fd53480725a3ab1715a5c5b3122644103.jpg'

// Tab content. Mission text Figma la irundhu eduthadhu.
// Vision & Value text Figma la irundhu replace pannikonga (ippo placeholder).
const tabs = [
  {
    key: 'mission',
    label: 'Our Mission',
    icon: missionIcon,
    text: 'Our mission is to transform the factory and industry sectors through sustainable practices, innovation, and advanced technology, fostering growth that benefits both business and the environment.',
    points: [
      'Sustainable Manufacturing Practices',
      'Advanced Technology Integration',
      'Community and Environmental Responsibility',
      'Innovation-Driven Growth',
    ],
  },
  {
    key: 'vision',
    label: 'Our Vision',
    icon: visionIcon,
    text: 'Our vision is to be a global leader in industrial innovation, building smarter, cleaner and more efficient factories that set the standard for quality and responsibility.',
    points: [
      'Global Leadership in Industry',
      'Smart and Connected Factories',
      'Zero-Waste Production Goals',
      'Lasting Partnerships with Clients',
    ],
  },
  {
    key: 'value',
    label: 'Our Value',
    icon: valueIcon,
    text: 'Our values guide every decision we make, from the way we engineer our products to the way we work with our people, partners and communities.',
    points: [
      'Quality Without Compromise',
      'Safety and Integrity First',
      'Continuous Improvement',
      'Respect for People and Planet',
    ],
  },
]

function OurApproach() {
  const [activeKey, setActiveKey] = useState('mission')
  const active = tabs.find((t) => t.key === activeKey)

  return (
    <section className="approach" id="our-approach">
      {/* dark background strip (card ithula paadhi mela overlap aagum) */}
      <div
        className="approach-bg"
        style={{ backgroundImage: `url("${bgImage}")` }}
      />

      <div className="approach-container">
        {/* HEADER : label + heading | paragraph */}
        <div className="approach-head">
          <div className="approach-head-left">
            <span className="approach-label">
              <img src={labelIcon} alt="" />
              Our Approach
            </span>
            <h2 className="approach-title">
              Empowering sustainable
              <span>growth in industry</span>
            </h2>
          </div>

          <p className="approach-intro">
            We provide a wide range of services tailored to meet the unique needs
            of modern industries. From precision manufacturing and advanced
            automation to custom product design and efficient logistics.
          </p>
        </div>

        {/* TABS CARD */}
        <div className="approach-card">
          <div className="approach-tabs" role="tablist">
            {tabs.map((t) => (
              <button
                key={t.key}
                type="button"
                role="tab"
                id={`approach-tab-${t.key}`}
                aria-selected={activeKey === t.key}
                aria-controls="approach-panel"
                className={`approach-tab ${activeKey === t.key ? 'active' : ''}`}
                onClick={() => setActiveKey(t.key)}
              >
                <img className="approach-tab-icon" src={t.icon} alt="" />
                <span>{t.label}</span>
              </button>
            ))}
          </div>

          <div
            className="approach-panel"
            id="approach-panel"
            role="tabpanel"
            aria-labelledby={`approach-tab-${activeKey}`}
          >
            <div className="approach-info">
              <p className="approach-text">{active.text}</p>

              <ul className="approach-list">
                {active.points.map((p) => (
                  <li key={p}>
                    <img src={checkIcon} alt="" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <img className="approach-media" src={mainImg} alt="Engineer working beside a robotic arm" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurApproach