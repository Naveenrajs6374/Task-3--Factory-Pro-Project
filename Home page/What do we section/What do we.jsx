import './What do we.css'
import labelIcon from '../../assets/Home page Images/What We Do image/Image (5).png'
import icon1 from '../../assets/Home page Images/What We Do image/Container (5).png'
import icon2 from '../../assets/Home page Images/What We Do image/Container (6).png'
import icon3 from '../../assets/Home page Images/What We Do image/Container (7).png'
import icon4 from '../../assets/Home page Images/What We Do image/Container (8).png'
import mainImg from '../../assets/Home page Images/What We Do image/what-we-do-image.jpg.png'
import connectBadge from '../../assets/Home page Images/What We Do image/Background (1).png'
import factoryBg from '../../assets/Home page Images/What We Do image/what-we-do-bg.svg.png'

const items = [
  {
    icon: icon1,
    title: 'Automation Solutions',
    text: 'Streamlining processes through cutting-edge technology.',
  },
  {
    icon: icon2,
    title: 'Quality Control',
    text: 'Ensuring product excellence through rigorous testing.',
    filled: true,
  },
  {
    icon: icon3,
    title: 'Process Engineering',
    text: 'Ensuring product excellence through rigorous testing.',
    filled: true,
  },
  {
    icon: icon4,
    title: 'Product Development',
    text: 'Streamlining processes through cutting-edge technology.',
  },
]

function WhatWeDo() {
  return (
    <section className="wwd" id="what-we-do">
      {/* LEFT : dark content + faint factory illustration */}
      <div className="wwd-left">
        <img className="wwd-bg" src={factoryBg} alt="" aria-hidden="true" />

        <div className="wwd-content">
          <span className="wwd-label">
            <img src={labelIcon} alt="" />
            What We Do
          </span>
          <h2 className="wwd-title">
            Innovative factory and industry
            <span>solutions today</span>
          </h2>

          <div className="wwd-grid">
            {items.map((item) => (
              <div
                className={`wwd-card${item.filled ? ' wwd-card--filled' : ''}`}
                key={item.title}
              >
                <img className="wwd-card-icon" src={item.icon} alt="" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <p className="wwd-note">
            Let&apos;s make something great work together.{' '}
            <a href="#contact">Get Free Quote</a>
          </p>
        </div>
      </div>

      {/* RIGHT : image + round "Connect Now" badge on the seam */}
      <div className="wwd-right">
        <img className="wwd-photo" src={mainImg} alt="Worker grinding metal with sparks" />
        <a href="#contact" className="wwd-badge" aria-label="Connect now">
          <img src={connectBadge} alt="" />
        </a>
      </div>
    </section>
  )
}

export default WhatWeDo