import { Link } from 'react-router-dom'
import { PageHero, usePageMeta } from '../components/ui.jsx'

export default function NotFound() {
  usePageMeta('Page not found | Thenari Theertham')
  return (
    <>
      <PageHero title="Page not found" sub="This page does not exist or has moved." />
      <section className="section">
        <div className="container center">
          <Link className="btn btn-maroon" to="/">Return home</Link>
        </div>
      </section>
    </>
  )
}
