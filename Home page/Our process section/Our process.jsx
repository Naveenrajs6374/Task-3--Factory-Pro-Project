import { Fragment, useState } from 'react'
import './Our process.css'
import labelIcon from '../../assets/Home page Images/Our Process image/Image (5).png'
import processImg from '../../assets/Home page Images/Our Process image/Container (9).png'

const steps = [
  {
    number: '01',
    title: 'Understanding Your Needs',
    lines: ['We begin by thoroughly assessing your requirements and', 'objectives to develop a tailored approach.'],
  },
  {
    number: '02',
    title: 'Design and Planning',
    lines: ['Our team collaborates to create detailed project plans, ensuring', 'all aspects of the process.'],
  },
  {
    number: '03',
    title: 'Implementation',
    lines: ['Utilizing advanced technologies and skilled personnel, we', 'execute the project'],
  },
]

// Figma line breaks - desktop la exact ah same break; tablet/mobile la (<=1024px) .process-br hide aagum
const paragraphLines = [
  'Our process is designed to maximize efficiency and quality at every stage',
  'of production. By integrating advanced technologies and best practices,',
  'we ensure seamless workflows.',
]

function Lines({ lines }) {
  return lines.map((line, i) => (
    <Fragment key={line}>
      {line}
      {i < lines.length - 1 && (
        <>
          {' '}
          <br className="process-br" />
        </>
      )}
    </Fragment>
  ))
}

function OurProcess() {
  // Figma default = step 02 highlighted (index 1). Hover / focus moves the highlight.
  const [active, setActive] = useState(1)

  return (
    <section className="process" id="our-process">
      <div className="process-container">
        {/* HEADER : label + heading | paragraph */}
        <div className="process-top">
          <div className="process-head">
            <span className="process-label">
              <img src={labelIcon} alt="" />
              Our Process
            </span>
            <h2 className="process-title">
              Streamlined processes{' '}
              <span>for</span>{' '}
              <br className="process-br" />
              <span>optimal efficiency</span>
            </h2>
          </div>

          <p className="process-text">
            <Lines lines={paragraphLines} />
          </p>
        </div>

        {/* BODY : image | steps */}
        <div className="process-body">
          <div className="process-media">
            <img src={processImg} alt="CNC machine cutting metal with sparks" />
          </div>

          <div className="process-steps">
            {steps.map((step, index) => (
              <div
                className={`process-step${active === index ? ' process-step--active' : ''}`}
                key={step.number}
                tabIndex={0}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
              >
                <span className="process-step-number">{step.number}</span>
                <div className="process-step-info">
                  <h3>{step.title}</h3>
                  <p>
                    <Lines lines={step.lines} />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurProcess