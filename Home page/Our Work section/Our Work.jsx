import { useState } from 'react'
import './Our Work.css'
import labelIcon from '../../assets/Home page Images/Our Work image/Image (5).png'
import work1 from '../../assets/Home page Images/Our Work image/Link (1).png'
import work2 from '../../assets/Home page Images/Our Work image/Link (2).png'
import work3 from '../../assets/Home page Images/Our Work image/Link (3).png'
import work4 from '../../assets/Home page Images/Our Work image/Link (4).png'

const categories = [
  'All',
  'Automation',
  'Development',
  'Infrastructure',
  'Manufacturing',
  'Sustainability',
]

// order = Figma order (left -> right, top -> bottom)
const projects = [
  { image: work1, category: 'Development', title: 'Total Quality Management Implementation' },
  { image: work2, category: 'Automation', title: 'Advanced Research In Material Science' },
  { image: work4, category: 'Infrastructure', title: 'Workplace Safety Enhancement Initiative' },
  { image: work3, category: 'Infrastructure', title: 'Robotic Process Automation Deployment' },
]

function OurWork() {
  const [active, setActive] = useState('All')

  const visible =
    active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section className="work" id="our-work">
      <div className="work-container">
        {/* HEADER : label + heading | paragraph */}
        <div className="work-top">
          <div className="work-head">
            <span className="work-label">
              <img src={labelIcon} alt="" />
              Our Work
            </span>
            <h2 className="work-title">
              Our successful project
              <span>initiatives</span>
            </h2>
          </div>

          <p className="work-text">
            Our successful project initiatives showcase our commitment to
            excellence and innovation across various industries.
          </p>
        </div>

        {/* FILTER LIST */}
        <ul className="work-filter">
          {categories.map((cat, i) => (
            <li key={cat}>
              {i > 0 && (
                <span
                  className={`work-slash${
                    categories[i - 1] === active ? ' work-slash--active' : ''
                  }`}
                  aria-hidden="true"
                >
                  /
                </span>
              )}
              {/* Figma has a small dot before the last tab - remove this line if not needed */}
              {i === categories.length - 1 && <span className="work-dot" aria-hidden="true" />}
              <button
                type="button"
                className={`work-tab${cat === active ? ' work-tab--active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>

        {/* PROJECT GRID */}
        {visible.length > 0 ? (
          <div className="work-grid">
            {visible.map((p) => (
              <a href="#our-work" className="work-card" key={p.title}>
                <div className="work-card-img">
                  <img src={p.image} alt={p.title} />
                  <span className="work-tag">{p.category}</span>
                </div>
                <h3>{p.title}</h3>
              </a>
            ))}
          </div>
        ) : (
          <p className="work-empty">No projects found in this category yet.</p>
        )}
      </div>
    </section>
  )
}

export default OurWork