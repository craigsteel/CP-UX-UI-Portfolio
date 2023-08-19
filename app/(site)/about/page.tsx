import Hero from "@/app/components/Hero";

export default function About() {
  return (
    <div>
      <Hero
        heading='All About Me'
        message='I am a multidisciplinary UI/UX creative based in the UK. With a background of over 20 years in branding, corporate and web design, I bring a wealth of experience and knowledge to each project that can help clients to identify and solve their communication problems, creating a better and more enjoyable online user experience.'
				subheading=''
			/>
      <main className="flex min-h-screen text-4xl flex-col items-center justify-between p-24">
        <h1>All My About Page</h1>
      </main>
    </div>

    )
}