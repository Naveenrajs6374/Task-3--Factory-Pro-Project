import { useState } from 'react'
import './Factory.css'
import img1 from '../../assets/Project page Image/working photo image/Article.png'
import img2 from '../../assets/Project page Image/working photo image/Article (1).png'
import img3 from '../../assets/Project page Image/working photo image/Link (11).png'
import img4 from '../../assets/Project page Image/working photo image/Link (12).png'
import img5 from '../../assets/Project page Image/working photo image/Link (13).jpg'
import img6 from '../../assets/Project page Image/working photo image/Link (14).avif'

const FILTERS = ['All', 'Automation', 'Development', 'Infrastructure', 'Manufacturing', 'Sustainability']

const projects = [
  { image: img1, title: 'Total Quality Management Implementation', category: 'Development', baked: true },
  { image: img2, title: 'Advanced Research In Material Science', category: 'Automation', baked: true },
  { image: img3, title: 'Workplace Safety Enhancement Initiative', category: 'Infrastructure' },
  { image: img4, title: 'Robotic Process Automation Deployment', category: 'Infrastructure' },
  { image: img5, title: 'Energy-Efficient Manufacturing Systems', category: 'Development', raw: true },
  { image: img6, title: 'Redesigning Factory Layouts For Efficiency', category: 'Development', raw: true },
]

export default function ProjectFactory() {
  const [active, setActive] = useState('All')
  const visible = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section className="pf" id="projects">
      <div className="pf-container">
        {/* FILTER TABS */}
        <ul className="pf-filters" role="tablist" aria-label="Project categories">
          {FILTERS.map((name) => (
            <li key={name}>
              <button
                type="button"
                role="tab"
                aria-selected={active === name}
                className={`pf-filter${active === name ? ' active' : ''}`}
                onClick={() => setActive(name)}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>

        {/* PROJECT CARDS */}
        <div className="pf-grid">
          {visible.map((p) => (
            <article className="pf-card" key={p.title}>
              <div className={`pf-media${p.raw ? ' pf-media--raw' : ''}`}>
                <img
                  className={`pf-img${p.raw ? ' pf-img--raw' : ''}`}
                  src={p.image}
                  alt={p.title}
                />
                {!p.baked && <span className="pf-badge">{p.category}</span>}
              </div>
              <h3 className="pf-title">{p.title}</h3>
            </article>
          ))}
        </div>

        {visible.length === 0 && <p className="pf-empty">No projects in this category yet.</p>}
      </div>
    </section>
  )
}