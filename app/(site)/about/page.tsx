import Hero from "@/app/components/Hero";
import Journey from "@/app/components/Journey";
import ToolsUsed from "@/app/components/ToolsUsed";
import Workflow from "@/app/components/WorkFlow";

export default function About() {
  return (
    <div>
      <Hero
        heading='About Me'
        message="Driven by a passion for design, I've built a successful career spanning diverse creative fields. My journey began in the fast-paced world of advertising, where I honed my ability to manage deadlines and collaborate effectively with creative teams. This experience ignited a passion for brands, leading me to a design consultancy where I thrived in crafting impactful brand identities, annual reports, corporate brochures, and marketing campaigns for prestigious clients like American Express, Manchester United, British Airways, and Mitsubishi. For the past decade, I've shifted my focus to UX/UI design and development, specialising in crafting intuitive and user-centric experiences for e-commerce, corporate, and SaaS web applications."
				subheading=''
			/>
      <main className="mx-5 md:mx-10 mt-10">
        <Journey />
        <ToolsUsed />
        <Workflow />
      </main>
    </div>
  )
}