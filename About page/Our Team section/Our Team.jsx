import { Link } from 'react-router-dom'
import './Our Team.css'
import labelIcon from '../../assets/About Us Images/Our Team image/Image (5).png'
import arrowIcon from '../../assets/About Us Images/Our Team image/SVG (7).png'
import team1 from '../../assets/About Us Images/Our Team image/team-1.jpg.png'
import team2 from '../../assets/About Us Images/Our Team image/team-2.jpg.png'
import team3 from '../../assets/About Us Images/Our Team image/team-3.jpg.png'
import team4 from '../../assets/About Us Images/Our Team image/team-4.jpg.png'

const members = [
  { name: 'Ronald Richards', role: 'Manufacturing Executive', image: team1 },
  { name: 'Brooklyn Simmons', role: 'Industrial Engineer', image: team2 },
  { name: 'Cameron Williamson', role: 'Production Supervisor', image: team3 },
  { name: 'Darlene Robertson', role: 'Manufacturing Executive', image: team4 },
]

function OurTeam({ buttonText = 'All Member', buttonLink = '/team' }) {
  return (
    <section className="ourteam" id="team">
      <div className="ourteam-container">
        {/* HEADER : label + heading | button */}
        <div className="ourteam-top">
          <div className="ourteam-head">
            <span className="ourteam-label">
              <img src={labelIcon} alt="" />
              Our Team
            </span>
            <h2 className="ourteam-title">
              Core strengths in
              <span>industrial innovation</span>
            </h2>
          </div>

          <Link to={buttonLink} className="ourteam-btn">
            <span className="ourteam-btn-text">{buttonText}</span>
            <span className="ourteam-btn-icon">
              <img src={arrowIcon} alt="" />
            </span>
          </Link>
        </div>

        {/* TEAM CARDS */}
        <div className="ourteam-grid">
          {members.map((m) => (
            <article className="ourteam-card" key={m.name}>
              <img className="ourteam-photo" src={m.image} alt={m.name} />
              <div className="ourteam-info">
                <h3 className="ourteam-name">{m.name}</h3>
                <p className="ourteam-role">{m.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurTeam