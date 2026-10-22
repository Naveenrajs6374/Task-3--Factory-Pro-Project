import './Our story.css'
import labelIcon from '../../assets/Home page Images/Our Story image/Image (5).png'
import imgTop1 from '../../assets/Home page Images/Our Story image/Container (4).png'
import imgTop2 from '../../assets/Home page Images/Our Story image/Container.png'
import imgMain from '../../assets/Home page Images/Our Story image/Container (1).png'
import avatar1 from '../../assets/Home page Images/Our Story image/story-client-img-1.jpg.png'
import avatar2 from '../../assets/Home page Images/Our Story image/Container (3).png'
import avatar3 from '../../assets/Home page Images/Our Story image/Container (2).png'
import playIcon from '../../assets/Home page Images/Our Story image/Border.png'

const stats = [
  { number: '10k+', label: 'Completed Project' },
  { number: '15+', label: 'Satisfied Customer' },
  { number: '10k+', label: 'Year Of Mastery' },
]

function OurStory() {
  return (
    <section className="story" id="our-story">
      <div className="story-container">
        {/* ROW 1 : label + heading | two small images */}
        <div className="story-top">
          <div className="story-head">
            <span className="story-label">
              <img src={labelIcon} alt="" />
              Our Story
            </span>
            <h2 className="story-title">
              Transforming industries
              <span>with innovative efficient solutions</span>
            </h2>
          </div>

          <div className="story-top-images">
            <img src={imgTop1} alt="Workers inside an industrial facility" />
            <img src={imgTop2} alt="Engineer operating machinery" />
          </div>
        </div>

        {/* ROW 2 : big image | content */}
        <div className="story-bottom">
          <img className="story-main-img" src={imgMain} alt="Workers welding steel" />

          <div className="story-content">
            <p className="story-text">
              We specialize in revolutionizing industries by delivering
              innovative, efficient solutions that enhance productivity and
              streamline processes. Through advanced technologies, precision
              engineering, and sustainable practices.
            </p>

            <hr className="story-divider" />

            <div className="story-stats">
              {stats.map((s, i) => (
                <div className="story-stat" key={i}>
                  <h3>{s.number}</h3>
                  <p>{s.label}</p>
                </div>
              ))}
            </div>

            <div className="story-actions">
              <div className="story-avatars">
                <img src={avatar1} alt="" />
                <img src={avatar2} alt="" />
                <img src={avatar3} alt="" />
              </div>

              <button type="button" className="story-watch">
                <img src={playIcon} alt="" />
                <span>Watch Intro</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurStory