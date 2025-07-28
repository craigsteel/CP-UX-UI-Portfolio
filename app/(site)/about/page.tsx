import Cursor from "@/app/components/CustomCursorTwo";
import Hero from "@/app/components/Hero";
import Journey from "@/app/components/Journey";
import Skills from "@/app/components/Skills";
import ToolsUsed from "@/app/components/ToolsUsed";
import Workflow from "@/app/components/WorkFlow";
import { Metadata } from "next";
import { Fragment } from "react";
import Template from "../template";

export const metadata: Metadata = {
  title: {
    absolute: 'About',
  },
}
export default function About() {
  return (
    <Fragment >
      <Cursor />
      <Template>
        <Hero
          heading='About Me'
          message="With over two decades of dedicated experience, I am a seasoned UX/UI designer committed to crafting intuitive and impactful digital experiences that drive tangible business growth. I specialise in translating complex challenges into elegant, user-centred solutions that not only delight users but also deliver measurable commercial success for my clients."
          subheading=''>
        </Hero>
        <main className="mx-5 md:mx-10 md:mt-10">
          <Journey />
          <Skills />
          <ToolsUsed />
          <Workflow />
        </main>
      </Template>
    </Fragment>
  )
}