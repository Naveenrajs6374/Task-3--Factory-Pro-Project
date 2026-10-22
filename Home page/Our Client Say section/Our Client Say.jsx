import { useState } from 'react'
import './Our Client Say.css'
import labelIcon from '../../assets/Home page Images/Our Client Say image/Image (5).png'
import clientPhoto from '../../assets/Home page Images/Our Client Say image/testimonial-image.jpg.png'
import author1 from '../../assets/Home page Images/Our Client Say image/author-1.jpg.png'
import logos from '../../assets/Home page Images/Our Client Say image/Carousel _ Horizontal scrolling_ Arrow Left & Right.png'
import clientBg from '../../assets/Home page Images/Our Client Say image/client-bg.png'

// Add more testimonials here - the arrow buttons will cycle through them.
const testimonials = [
  {
    image: clientPhoto,
    quote:
      '"The team\u2019s attention to detail and commitment to quality exceeded our expectations. They delivered on time, and their innovative solutions improved our production efficiency by 30%. Highly recommended!"',
    avatar: author1,
    name: 'Brooklyn Simmons',
    role: 'Homeowner',
  },
]

function OurClientSay() {
  const [index, setIndex] = useState(0)
  const t = testimonials[index]

  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setIndex((i) => (i + 1) % testimonials.length)

  return (
    <section
      className="client"
      id="our-client-say"
      style={{ '--client-map': `url("${clientBg}")` }}
    >
      <div className="client-container">
        {/* TESTIMONIAL ROW */}
        <div className="client-row">
          <img className="client-photo" src={t.image} alt={t.name} />

          <div className="client-content">
            <span className="client-label">
              <img src={labelIcon} alt="" />
              Our Client Say
            </span>
            <h2 className="client-title">
              What our satisfied clients
              <span>are saying</span>
            </h2>

            <p className="client-quote">{t.quote}</p>

            <div className="client-bottom">
              <div className="client-author">
                <img src={t.avatar} alt="" />
                <div>
                  <h3>{t.name}</h3>
                  <p>{t.role}</p>
                </div>
              </div>

              <div className="client-arrows">
                <button type="button" onClick={prev} aria-label="Previous testimonial">
                  <svg width="24" height="24" viewBox="0 0 16 16" fill="none">
                    <path d="M13 8H3M7.5 3.5L3 8l4.5 4.5" stroke="#fff" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button type="button" onClick={next} aria-label="Next testimonial">
                  <svg width="24" height="24" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M8.5 3.5L13 8l-4.5 4.5" stroke="#fff" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER + LOGOS */}
        <hr className="client-divider" />
        <div className="client-logos-wrap">
          <img className="client-logos" src={logos} alt="Our partners" />
        </div>
      </div>
    </section>
  )
}

export default OurClientSay