import Head from 'next/head'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ScrollTop } from '../components/ScrollTop'
import { CV } from '../components/CV'
import { Description, Section, Title } from '../styles/styles'
import { PageSection } from '../styles/resume'
import { BsFileText } from 'react-icons/bs'
import axios from 'axios'

const botkey = process.env.NEXT_PUBLIC_BOTKEY_URL;
const canva = process.env.NEXT_PUBLIC_CANVA_URL;

export default function Resume() {
  const resumeData = {canva}
  
  let previewData = '';
  if (resumeData.canva) {
    previewData = `${resumeData.canva.substr(
      0,
      resumeData.canva.lastIndexOf('/') + 1
    )}view?embed`;
  }

  return (
    <>
      <Head>
        <title>Resume | Turin Jana </title>
        <meta
          name="description"
          content="This is my updated resume, you can see or download it."
        />
        <meta property="og:title" content="Resume | Turinjana" />
        <meta
          property="og:description"
          content=" This is my updated resume, you can see or download it."
        />
      </Head>

      <ScrollTop />
      <Section>
        <Title>
          <p></p>
          Curriculam Vitae
          <span>
            <BsFileText /> Resume
          </span>
        </Title>
        <Description style={{width:'100%', textAlign: 'center', marginBottom: '1px'}}>
          This is my updated resume, powered by Canva website. 
          <br />
          You can download my professional resume by clicking on the download button below.
        </Description>

        <PageSection>
      

          <CV />
        </PageSection>
      </Section>
    
      <Footer />
    </>
  )
}
