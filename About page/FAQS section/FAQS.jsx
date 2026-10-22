import { useState } from 'react'
import { Link } from 'react-router-dom'
import './FAQS.css'
import labelIcon from '../../assets/About Us Images/FAQS image/Image (5).png'
import arrowIcon from '../../assets/About Us Images/FAQS image/SVG (7).png'
import faqImage from '../../assets/About Us Images/FAQS image/our-faqs-image.jpg.png'
import mailIcon from '../../assets/About Us Images/FAQS image/SVG (12).png'
import phoneIcon from '../../assets/About Us Images/FAQS image/SVG (13).png'

const faqs = [
  {
    question: 'What industries do you serve?',
    answer:
      'We serve automotive, aerospace, electronics, energy and heavy machinery industries with reliable manufacturing solutions.',
  },
  {
    question: 'How do you ensure product quality?',
    answer:
      'We implement rigorous quality control measures at every stage of production, ensuring consistency and high standards.',
  },
  {
    question: 'What sustainability practices do you follow?',
    answer:
      'We reduce waste, recycle materials and use energy-efficient processes across all of our production lines.',
  },
  {
    question: 'Do you offer customized solutions?',
    answer:
      'Yes. Our engineers work with you to design and build solutions tailored to your exact requirements.',
  },
  {
    question: 'How do you handle safety in the workplace?',
    answer:
      'Safety training, regular audits and strict protocols keep our teams and facilities protected every day.',
  },
]

function Chevron() {
  return (
    <svg className="faqs-chevron" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true">
      <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function FAQS({
  buttonText = 'All FAQs',
  buttonLink = '/faqs',
  phone = '+91 1236547890',
  email = 'info@domainname.com',
}) {
  const [openIndex, setOpenIndex] = useState(1) // Figma la 2nd question open-ah irukku

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? -1 : i))

  return (
    <section className="faqs" id="faqs">
      <div className="faqs-container">
        {/* HEADER : label + heading | button */}
        <div className="faqs-top">
          <div className="faqs-head">
            <span className="faqs-label">
              <img src={labelIcon} alt="" />
              FAQS
            </span>
            <h2 className="faqs-title">
              Frequently asked
              <span>questions</span>
            </h2>
          </div>

          <Link to={buttonLink} className="faqs-btn">
            <span className="faqs-btn-text">{buttonText}</span>
            <span className="faqs-btn-icon">
              <img src={arrowIcon} alt="" />
            </span>
          </Link>
        </div>

        <div className="faqs-body">
          {/* LEFT : image + contact bar */}
          <div className="faqs-media">
            <img className="faqs-image" src={faqImage} alt="Industrial factory skyline" />
            <div className="faqs-contact">
              <a href={`tel:${phone.replace(/\s/g, '')}`} className="faqs-contact-item">
                <img src={phoneIcon} alt="" />
                <span>{phone}</span>
              </a>
              <a href={`mailto:${email}`} className="faqs-contact-item">
                <img src={mailIcon} alt="" />
                <span>{email}</span>
              </a>
            </div>
          </div>

          {/* RIGHT : accordion */}
          <div className="faqs-list">
            {faqs.map((item, i) => {
              const open = openIndex === i
              return (
                <div className={`faqs-item${open ? ' open' : ''}`} key={item.question}>
                  <button
                    type="button"
                    className="faqs-question"
                    id={`faqs-q-${i}`}
                    aria-expanded={open}
                    aria-controls={`faqs-a-${i}`}
                    onClick={() => toggle(i)}
                  >
                    <span>{item.question}</span>
                    <Chevron />
                  </button>
                  {open && (
                    <div className="faqs-answer" id={`faqs-a-${i}`} role="region" aria-labelledby={`faqs-q-${i}`}>
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQS