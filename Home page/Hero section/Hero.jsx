import './Hero.css'
import heroBg from '../../assets/Home page Images/Hero image/Image.png'
import gearIcon from '../../assets/Home page Images/Hero image/SVG.png'
import arrowIcon from '../../assets/Home page Images/Hero image/SVG (7).png'

const features = [
  'Advanced Manufacturing Solutions',
  'Quality Assurance Systems',
  'State-of-the-Art Technology',
]

function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url("${heroBg}")` }}>
      <div className="hero-container">
        <h1 className="hero-title">
          Excellence innovating
          <span>industry for today</span>
        </h1>

        <p className="hero-text">
          At the heart of our operations is a commitment to delivering superior
          products through cutting-edge technology and innovative processes.
        </p>

        <a href="#about" className="hero-btn">
          <span className="hero-btn-text">Explore More</span>
          <span className="hero-btn-icon">
            <img src={arrowIcon} alt="" />
          </span>
        </a>
      </div>

      <div className="hero-features">
        <ul>
          {features.map((item) => (
            <li key={item}>
              <img src={gearIcon} alt="" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Hero
