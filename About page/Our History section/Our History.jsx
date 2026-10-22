import { useState } from 'react'
import './Our History.css'
import labelIcon from '../../assets/About Us Images/Our History image/Image (5).png'
import checkIcon from '../../assets/About Us Images/Our History image/SVG (11).png'
import mainImg from '../../assets/About Us Images/Our History image/Container (12).png'

// Timeline tabs. "In 1920 - Planning" content Figma la irundhu eduthadhu.
// Mathadhu 4 tabs-oda heading / text / points ippo placeholder - Figma la irundhu replace pannikonga.
const timeline = [
  {
    key: '1920',
    tab: 'In 1920 - Planning',
    light: 'Company',
    bold: 'started',
    text: 'Welcome to Industry, a leading industry innovator with a rich history of excellence. With a passion for precision and a commitment to quality, we have been empowering industries and driving progress.',
    points: [
      'Quality Control System',
      'Building Quality Industrial',
      'Environmental Responsibility',
      'Building Quality Industrial',
    ],
  },
  {
    key: '1922',
    tab: 'In 1922 - Journey Started',
    light: 'Journey',
    bold: 'started',
    text: 'Our first production line opened its doors, bringing together skilled engineers and a clear promise to build reliable, high quality products for growing industries.',
    points: [
      'First Production Line',
      'Skilled Engineering Team',
      'Strict Quality Standards',
      'Trusted Local Partnerships',
    ],
  },
  {
    key: '1925',
    tab: 'In 1925 - Journey Progress',
    light: 'Journey',
    bold: 'progress',
    text: 'We expanded our facilities and adopted new machinery, improving output while keeping the same care for precision and safety that defined our early years.',
    points: [
      'Expanded Facilities',
      'Modern Machinery',
      'Improved Safety Practices',
      'Growing Customer Base',
    ],
  },
  {
    key: '1930',
    tab: 'In 1930 - Global Reach',
    light: 'Global',
    bold: 'reach',
    text: 'Our products reached international markets, and long term partnerships across several countries helped us bring industrial innovation to more communities.',
    points: [
      'International Markets',
      'Global Supply Network',
      'Worldwide Partnerships',
      'Consistent Quality Everywhere',
    ],
  },
  {
    key: '1940',
    tab: 'In 1940 - Industry Leadership',
    light: 'Industry',
    bold: 'leadership',
    text: 'Years of consistent quality and innovation established us as a leader in the industry, setting standards that others now follow.',
    points: [
      'Recognised Industry Leader',
      'Continuous Innovation',
      'Sustainable Operations',
      'Trusted by Industry Partners',
    ],
  },
]

function OurHistory() {
  const [activeKey, setActiveKey] = useState('1920')
  const active = timeline.find((t) => t.key === activeKey)

  return (
    <section className="history" id="our-history">
      <div className="history-container">
        {/* HEADER : label + heading | paragraph */}
        <div className="history-head">
          <div className="history-head-left">
            <span className="history-label">
              <img src={labelIcon} alt="" />
              Our History
            </span>
            <h2 className="history-title">
              Foundation of excellences
              <span>in industry</span>
            </h2>
          </div>

          {/* <br> = Figma la irukkura exact line breaks (tablet/mobile la hide aagum) */}
          <p className="history-intro">
            Built on a legacy of quality and innovation, we have established a strong
            <br className="history-br" />
            foundation in the industrial sector, consistently delivering reliable
            <br className="history-br" />
            solutions that drive progress and set industry standards.
          </p>
        </div>

        {/* BODY : tabs | content | image */}
        <div className="history-body">
          <div className="history-tabs" role="tablist" aria-orientation="vertical">
            {timeline.map((t) => (
              <button
                key={t.key}
                type="button"
                role="tab"
                id={`history-tab-${t.key}`}
                aria-selected={activeKey === t.key}
                aria-controls="history-panel"
                className={`history-tab ${activeKey === t.key ? 'active' : ''}`}
                onClick={() => setActiveKey(t.key)}
              >
                {t.tab}
              </button>
            ))}
          </div>

          <div
            className="history-info"
            id="history-panel"
            role="tabpanel"
            aria-labelledby={`history-tab-${activeKey}`}
          >
            <h3 className="history-info-title">
              {active.light} <span>{active.bold}</span>
            </h3>
            <p className="history-text">{active.text}</p>

            <ul className="history-list">
              {active.points.map((p, i) => (
                <li key={`${p}-${i}`}>
                  <img src={checkIcon} alt="" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <img className="history-media" src={mainImg} alt="Engineers examining a prototype" />
        </div>
      </div>
    </section>
  )
}

export default OurHistory