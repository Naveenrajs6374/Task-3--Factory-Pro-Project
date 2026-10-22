import './Our Key Feature.css'
import labelIcon from '../../assets/About Us Images/Our Key Features image/Image (5).png'
import techIcon from '../../assets/About Us Images/Our Key Features image/Container (14).png'
import qualityIcon from '../../assets/About Us Images/Our Key Features image/Container (13).png'
import rndIcon from '../../assets/About Us Images/Our Key Features image/Container (15).png'
import featureImg from '../../assets/About Us Images/Our Key Features image/features-box-image.jpg.png'

// Grid order (Figma) : [1 Tech] [2 Quality]
//                      [3 R&D ] [4 Image  ]
const features = [
  {
    icon: techIcon,
    title: 'Advanced Technology Integration',
    text: 'We integrate cutting-edge technologies into every aspect of our operations, enhancing efficiency, precision, and innovation to deliver superior industrial solutions.',
  },
  {
    icon: qualityIcon,
    title: 'Uncompromising Quality Standards',
    text: 'We uphold the highest quality standards across all processes, ensuring consistency, reliability, and excellence in every product and service we deliver.',
  },
  {
    icon: rndIcon,
    title: 'Continuous Innovation and R&D',
    text: 'We prioritize ongoing research and development to drive continuous innovation, staying ahead of industry trends and creating advanced solutions that meet evolving market demands.',
  },
]

function OurKeyFeature() {
  return (
    <section className="keyfeature" id="our-key-feature">
      <div className="keyfeature-container">
        {/* HEADER : label + heading | paragraph */}
        <div className="keyfeature-head">
          <div className="keyfeature-head-left">
            <span className="keyfeature-label">
              <img src={labelIcon} alt="" />
              Our Key Feature
            </span>
            <h2 className="keyfeature-title">
              Core strengths in
              <span>industrial innovation</span>
            </h2>
          </div>

          {/* <br> = Figma la irukkura exact line breaks (tablet/mobile la hide aagum) */}
          <p className="keyfeature-intro">
            Our expertise in industrial innovation combines advanced technology,
            <br className="keyfeature-br" />
            sustainable practices, and a skilled workforce to deliver efficient, future-
            <br className="keyfeature-br" />
            ready solutions that drive industry progress
          </p>
        </div>

        {/* 2 x 2 GRID */}
        <div className="keyfeature-grid">
          {features.map((f) => (
            <article className="keyfeature-cell" key={f.title}>
              <img className="keyfeature-icon" src={f.icon} alt="" />
              <h3 className="keyfeature-cell-title">{f.title}</h3>
              <p className="keyfeature-cell-text">{f.text}</p>
            </article>
          ))}

          <div className="keyfeature-image">
            <img src={featureImg} alt="Worker grinding metal with flying sparks" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurKeyFeature