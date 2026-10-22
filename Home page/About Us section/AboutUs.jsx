import { Link } from 'react-router-dom'
import './AboutUs.css'
import img1 from '../../assets/Home page Images/About Us image/about-img-1.jpg.png'
import img2 from '../../assets/Home page Images/About Us image/about-img-2.jpg.png'
import labelIcon from '../../assets/Home page Images/About Us image/Image (5).png'
import starIcon from '../../assets/Home page Images/About Us image/Link.png'
import checkIcon from '../../assets/Home page Images/About Us image/SVG.png'
import arrowIcon from '../../assets/Home page Images/About Us image/SVG (7).png'

const points = [
  'Sustainable Manufacturing',
  'Advanced Automation',
  'Efficient Production Processes',
  'Reliable Delivery Services',
]

function AboutUs({ buttonText = 'Learn More', buttonLink = '/about' }) {
  return (
    <section className="about" id="about">
      <div className="about-container">
        
        <div className="about-images">
          <img className="about-img-1" src={img1} alt="Robotic arm welding" />

          <div className="about-exp">
            <span className="about-exp-number">25+</span>
            <span className="about-exp-text">
              Year Of
              <br />
              Experience
            </span>
          </div>

          <img className="about-img-2" src={img2} alt="Engineer checking machine" />
        </div>

        {/* RIGHT - content */}
        <div className="about-content">
          <span className="about-label">
            <img src={labelIcon} alt="" />
            About Us
          </span>

          <h2 className="about-title">
            Building quality through
            <span>industrial innovation</span>
          </h2>

          <p className="about-text">
            At the heart of our operations is a commitment to delivering superior
            products through cutting-edge technology and innovative processes.
          </p>

          <div className="about-bottom">
            <div className="about-left">
              <ul className="about-list">
                {points.map((item) => (
                  <li key={item}>
                    <img src={checkIcon} alt="" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link to={buttonLink} className="about-btn">
                <span className="about-btn-text">{buttonText}</span>
                <span className="about-btn-icon">
                  <img src={arrowIcon} alt="" />
                </span>
              </Link>
            </div>

            <div className="about-rating">
              <div className="about-stars">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={starIcon} alt="" />
                ))}
              </div>
              <p>15.5K Genuine Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs