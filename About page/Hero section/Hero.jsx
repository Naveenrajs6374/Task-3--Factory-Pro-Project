import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'
import heroBg from '../../assets/About Us Images/Hero image/Image (6).png'

function Hero({ light = 'About', bold = 'Us', current = 'About Us', image = heroBg, crumbs = [{ label: 'Home', to: '/' }] }) {
  return (
    <section className="page-hero" style={{ backgroundImage: `url("${image}")` }}>
      <div className="page-hero-container">
        <h1 className="page-hero-title">
          {light} <span>{bold}</span>
        </h1>

        <nav className="page-hero-crumbs" aria-label="Breadcrumb">
          {crumbs.map((c) => (
            <Fragment key={c.label}>
              <Link to={c.to}>{c.label}</Link>
              <i className="page-hero-dot" aria-hidden="true" />
            </Fragment>
          ))}
          <span aria-current="page">{current}</span>
        </nav>
      </div>
    </section>
  )
}

export default Hero