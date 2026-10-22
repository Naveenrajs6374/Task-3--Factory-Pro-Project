import { Link } from 'react-router-dom'
import './Not Found.css'

function NotFound() {
  return (
    <section className="notfound">
      <div className="notfound-container">
        <h1 className="notfound-code">404</h1>
        <h2 className="notfound-title">
          Oops! <span>Page not found</span>
        </h2>
        <p className="notfound-text">
          The page you are looking for might have been removed, renamed or is
          temporarily unavailable.
        </p>
        <Link to="/" className="notfound-btn">
          Back to Home
        </Link>
      </div>
    </section>
  )
}

export default NotFound