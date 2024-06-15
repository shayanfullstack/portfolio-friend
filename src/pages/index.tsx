import Head from "next/head";
import { About } from "../components/CardAbout";
import { Header } from "../components/Header";
import { HomeHero } from "../components/Home";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { ScrollTop } from "../components/ScrollTop";
import { Footer } from "../components/Footer";
import { Experience } from "../components/Experience";
import { CardContact } from "../components/CardContact";
import { Section } from "../styles/styles";
import { Work } from "../components/Work";
import { Education } from "../components/Education";
import { Achievements } from "../components/Achievements";
import { Testimonials } from "../components/Testimonials";
import { Publications } from "../components/Publications";
import { Wakatime } from "../components/Coding/Wakatime";

const botkey = process.env.NEXT_PUBLIC_BOTKEY_URL;

export default function Home() {
  return (
    <>
      <Head>
        <title>Turinjana Portfolio</title>
      </Head>
      <ScrollTop />
      <Section>
        <Section>
        <HomeHero />
        </Section>
        <About />
        <Skills />
        <Education />
        <Experience />
        <Work />
        <Achievements />
        <Publications />
        <Projects />
        <Wakatime />
        <Testimonials />
        <CardContact />
      </Section>

     
      <Footer />
    </>
  );
}
