import './Factory.css'
import post1 from '../../assets/Blog page Image/Working image/Link (7).png'
import post2 from '../../assets/Blog page Image/Working image/Link (9).png'
// Figma la indha 4 images innum blank (transparent PNG). Real image export panni
// "Working image" folder la adhe file name la replace pannunga - code maatha vendaam.
import post3 from '../../assets/Blog page Image/Working image/Link (15).jpeg'
import post4 from '../../assets/Blog page Image/Working image/Link (16).jpg'
import post5 from '../../assets/Blog page Image/Working image/Link (17).png'
import post6 from '../../assets/Blog page Image/Working image/Link (18).avif'

const posts = [
  { image: post1, title: 'Sustainable Practices Reducing Waste in Industrial Production' },
  { image: post2, title: 'Advanced Robotics Revolutionizing Industrial Workflows' },
  { image: post3, title: 'Top Benefits of the Robotics in Manufacturing' },
  { image: post4, title: 'Leveraging Data Analytics for Smarter Production' },
  { image: post5, title: 'Reducing Operational Costs Through Automation' },
  { image: post6, title: 'The Advantages of Customized Manufacturing Solutions' },
]

function ReadMoreArrow() {
  return (
    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 12L12 2M4.5 2H12V9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Factory() {
  return (
    <section className="factory" id="blog-posts">
      <div className="factory-container">
        <div className="factory-grid">
          {posts.map((post) => (
            <a href="#blog-posts" className="factory-card" key={post.title}>
              <img className="factory-img" src={post.image} alt="" />
              <h3 className="factory-title">{post.title}</h3>
              <span className="factory-more">
                Read More
                <ReadMoreArrow />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}