import Hero from "@/app/components/Hero";
import Journey from "@/app/components/Journey";
import Skills from "@/app/components/Skills";
import ToolsUsed from "@/app/components/ToolsUsed";
import Workflow from "@/app/components/WorkFlow";
import Cursor from "@/app/components/CustomCursorTwo";
import { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: {
    absolute: 'About',
  },
}
export default function About() {
  return (
    <Fragment >
      <Cursor />
        <Hero
          heading='About Me'
          message="A deep-seated interest in design has propelled my career across advertising, branding, and UX / UI design. My journey commenced in the dynamic environment of advertising, where I cultivated a robust work ethic and honed my ability to deliver under tight deadlines while fostering collaborative relationships with high-caliber creative teams. This experience ignited a passion for brand development, motivating me to transition to a design consultancy.
          There, I excelled in crafting compelling brand narratives across diverse media platforms, encompassing annual reports, corporate brochures, and marketing campaigns for esteemed clients such as American Express, Manchester United, British Airways, and Mitsubishi.
          For the past decade, I have seamlessly transitioned into the field of UX / UI design and development. I specialise in the creation of intuitive and user-centric experiences for e-commerce, corporate, and SaaS web applications."
          subheading=''>
        </Hero>
        <main className="mx-5 md:mx-10 mt-10">
          <Journey />
          <Skills />
          <ToolsUsed />
          <Workflow />
        </main>
    </Fragment>
  )
}