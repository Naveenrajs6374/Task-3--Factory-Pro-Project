import { useState } from 'react'
import './Contact.css'
import labelIcon from '../../assets/Container page image/Contact us/Image (5).png'
import phoneIcon from '../../assets/Container page image/Contact us/SVG (15).png'
import mailIcon from '../../assets/Container page image/Contact us/SVG (16).png'
import addressIcon from '../../assets/Container page image/Contact us/SVG (17).png'

const info = [
  { icon: phoneIcon, title: 'Contact', value: '+1.809.120.670' },
  { icon: mailIcon, title: 'E-mail', value: 'info@domainname.com' },
  { icon: addressIcon, title: 'Our Address', value: '37 San Juan Lane Graaf Florisstraat 22A,3021 CH' },
]

const emptyForm = { firstName: '', lastName: '', email: '', phone: '', message: '' }

function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setSent(false)
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form:', form)
    setForm(emptyForm)
    setSent(true)
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-left">
          <span className="contact-label">
            <img src={labelIcon} alt="" />
            Contact Us
          </span>
          <h2 className="contact-title">
            Get in touch <span>with us</span>
          </h2>
          <p className="contact-text">
            Reach out for any inquiries, support, or to discuss how we can meet
            your industrial needs.
          </p>

          <ul className="contact-info">
            {info.map((item) => (
              <li key={item.title}>
                <span className="contact-info-icon">
                  <img src={item.icon} alt="" />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

       
        <form className="contact-card" onSubmit={handleSubmit}>
          <h2>
            Contact <span>me</span>
          </h2>

          <div className="contact-row">
            <input
              type="text"
              name="firstName"
              placeholder="Enter first name"
              value={form.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Enter last name"
              value={form.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Enter your e-mail"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone no."
            value={form.phone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Write Message"
            value={form.message}
            onChange={handleChange}
            required
          />

          <div className="contact-submit">
            <button type="submit">Submit Message</button>
            {sent && <span className="contact-sent">Thank you! We will get back to you soon.</span>}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact