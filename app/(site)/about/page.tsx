import Hero from "@/app/components/Hero";
import Journey from "@/app/components/Journey";
import ToolsUsed from "@/app/components/ToolsUsed";
import Workflow from "@/app/components/WorkFlow";

export default function About() {
  return (
    <div>
      <Hero
        heading='About Me'
        message='My passion for design has enabled me to pursue a career that I love, whether in advertising with its dynamic pace of the studio, deadlines and creative teams, to the corporate world of annual reporting, strategic marketing of brands to UX/UI Design and Development of web applications.
Over the years I have gained a vast amount of knowledge in leading teams, presenting, pitching to clients, working alongside developers, managing budgets and working to tight deadlines.'
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