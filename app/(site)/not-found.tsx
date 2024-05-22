import Link from 'next/link'
import Hero from "../components/Hero"

export default async function NotFound() {
  return (
    <section>
        <Hero
        heading="404 - Page Not Found"
        message="The page you are looking for does not exist."
        subheading="" />
    </section>
  )
}