import './Latest Blog.css'
import labelIcon from '../../assets/Home page Images/Latest Blog image/Image (5).png'
import post1 from '../../assets/Home page Images/Latest Blog image/Link (5).png'
import post2 from '../../assets/Home page Images/Latest Blog image/Link (6).png'
import arrowBtn from '../../assets/Home page Images/Latest Blog image/Link (8).png'

const posts = [
  {
    image: post1,
    title: 'Sustainable Practices Reducing Waste in Industrial Production',
  },
  {
    image: post2,
    title: 'Advanced Robotics Revolutionizing Industrial Workflows',
  },
]

function LatestBlog() {
  return (
    <section className="blog" id="latest-blog">
      <div className="blog-container">
        {/* HEADER : label + heading | paragraph */}
        <div className="blog-top">
          <div className="blog-head">
            <span className="blog-label">
              <img src={labelIcon} alt="" />
              Latest Blog
            </span>
            <h2 className="blog-title">
              Insights from our
              <span>latest blogs</span>
            </h2>
          </div>

          <p className="blog-text">
            Stay updated with the latest trends, innovations, and expert
            insights in the manufacturing and industrial sectors
          </p>
        </div>

        {/* POSTS */}
        <div className="blog-grid">
          {posts.map((post) => (
            <a href="#latest-blog" className="blog-card" key={post.title}>
              <div className="blog-card-img">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-card-info">
                <h3>{post.title}</h3>
                <img className="blog-card-arrow" src={arrowBtn} alt="" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestBlog