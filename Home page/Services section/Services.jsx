import './Services.css'
import bg from '../../assets/Home page Images/Services image/e21bf34fd53480725a3ab1715a5c5b3122644103.jpg'
import labelIcon from '../../assets/Home page Images/Services image/Image (5).png'
import icon1 from '../../assets/Home page Images/Services image/Clip path group (1).png'
import icon2 from '../../assets/Home page Images/Services image/SVG (1).png'
import icon3 from '../../assets/Home page Images/Services image/SVG (2).png'
import icon4 from '../../assets/Home page Images/Services image/SVG (3).png'

const services = [
  { icon: icon1, title: 'Custom Manufacturing Solution' },
  { icon: icon2, title: 'Industrial Automation And Robotics' },
  { icon: icon3, title: 'Product Design And Prototyping' },
  { icon: icon4, title: 'Equipment Maintenance Support' },
]

function Services() {
  return (
    <section className="services" id="services">
      <div
        className="services-bg"
        style={{ '--services-bg': `url("${bg}")` }}
      >
        <div className="services-container">
          {/* LEFT - label + heading */}
          <div className="services-head">
            <span className="services-label">
              <img src={labelIcon} alt="" />
              Services
            </span>
            <h2 className="services-title">
              Comprehensive solutions
              <span>for industrial excellence</span>
            </h2>
          </div>

          {/* RIGHT - paragraph */}
          <p className="services-text">
            We provide a wide range of services tailored to meet the unique
            needs of modern industries. From precision manufacturing and
            advanced automation to custom product design and efficient
            logistics.
          </p>
        </div>
      </div>

      {/* Cards (overlaps the bottom of the background image) */}
      <div className="services-card">
        {services.map((item) => (
          <div className="services-item" key={item.title}>
            <img className="services-icon" src={item.icon} alt="" />
            <h3 className="services-item-title">{item.title}</h3>
            <a
              href="#services"
              className="services-arrow"
              aria-label={item.title}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 7h10M8 3l4 4-4 4"
                  stroke="#222222"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services