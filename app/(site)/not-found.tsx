import Link from 'next/link'
import Hero from "../components/Hero"
import Cursor from '../components/CustomCursorTwo'

export default async function NotFound() {
  return (
    <>
      <Cursor />
        <section>
          <Hero
          heading="404 - Page Not Found"
          message="The page you are looking for does not exist."
          subheading="" />
        </section>
    </>
  )
}