import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Navbar from './Home page/Navbar section/Navbar'
import Footer from './Home page/Footer section/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ScrollToTop from './ScrollToTop'
import CustomManufacturingPage from './pages/CustomManufacturingPage'
import BlogPage from './pages/BlogPage'
import ProjectPage from './pages/Project'
import PricingPlanPage from './pages/Pricing plan'
import ContactPage from './pages/Container'
import NotFoundPage from './pages/Not Found'

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services/custom-manufacturing-solution" element={<CustomManufacturingPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/pricing-plan" element={<PricingPlanPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App