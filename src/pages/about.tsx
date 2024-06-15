import Head from 'next/head'
import Link from 'next/link'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ScrollTop } from '../components/ScrollTop'
import { BiUserPin } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'
import { BsLinkedin } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { ArrowLeft, ChatCenteredText, Image as IconImage, YoutubeLogo, Hash, InstagramLogo } from 'phosphor-react'
import * as S from '../styles/about'
import { ButtonAlt, Section, Title, ButtonSecondary } from '../styles/styles'
import { Instagram } from './api/Instagram'

const botkey = process.env.NEXT_PUBLIC_BOTKEY_URL;

interface DashboardPageProps {
  fallback: any;
}
export default function About() {
  return <>
    <Head>
      <title>About | Turin Kumar Jana</title>
      <meta
        name="description"
        content="I am Turin Kumar Jana, a proud student of Techno International Batanagar, where I am pursuing a Bachelors degree in Computer Science and Engineering and building a solid foundation in technology."
      />
      <meta property="og:title" content="About | Turinjana" />
      <meta
        property="og:description"
        content="I am Turin Kumar Jana, a proud student of Techno International Batanagar, where I am pursuing a Bachelors degree in Computer Science and Engineering and building a solid foundation in technology."
      />
    </Head>

    <ScrollTop />
    <Section>
      <S.AboutContainer>
        <Title>
       
          About Myself!!
      
        </Title>

        <S.AboutContent>
          <S.AboutImage>
            <img
              className="AboutImg"
              src="/Saravana.jpg"
              alt="Turin Kumar Jana"
            />

            <div className="links">
              <ul>
                <Link
                  href={'https://github.com/TtRr19'}
                  target="_blank"
                  aria-label="Github">

                  <AiFillGithub size={25} />@TurinJana2004
                </Link>
                <Link
                  href={'https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGxMBpcVed66AAAAZAbOim49ivHHcE4qPYSIE-yDEU5eu1ZxLVduA9omIBMZ83_0MAa2RNatnzfAXlYPH6abq1eqpW_tnIERK_QEmEFKG-IVEk2nIllFkoLAjJyY5FPpZiPDhc=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fturin-j-1067372bb%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app'}
                  target="_blank"
                  aria-label="Linkedin">

                  <BsLinkedin size={25} />@Turinjana2004
                </Link>
              
                <Link
                  href={'mailto:janaturin70@gmail.com'}
                  className="email"
                  target="_blank"
                  aria-label="email">

                  <GrMail size={25} />janaturin70
                </Link>
              </ul>
            </div>

            <S.AboutContact>
              <h3>
              Lets talk, maybe create an amazing project together?
              </h3>
              <p>Send me a message! 😉</p>
              <Link href={'/contact'}>

                <ButtonAlt>Contact</ButtonAlt>

              </Link>
            </S.AboutContact>
          </S.AboutImage>
          <S.AboutDescription>
            <p style={{ textAlign: 'justify' }}>
            👋 I am Turin Kumar Jana, a proud student of Techno International Batanagar, where I am pursuing a Bachelors degree in Computer Science and Engineering and building a solid foundation in technology.
            </p>
            <p style={{ textAlign: 'justify' }}>
            💻 I am also an singer, enthusiastic volunteer, and thoughtful poet, and I love exploring new opportunities and avenues.
            </p>
            <p style={{ textAlign: 'justify' }}>
            🎮 As a self-taught developer, I have spent countless hours sharpening my skills and learning new technologies.
            </p>
            <p style={{ textAlign: 'justify' }}>
            🎉 I have conqured the world of Data structures and algorithms in various domains 💥.
            </p>
            <p style={{ textAlign: 'justify' }}>
            🧩 I love to play chess in my free time and also write poems straight out of my imagination.
            </p>
            <p style={{ textAlign: 'justify' }}>
            🙌 Beyond my personal pursuits, I am committed to making a positive impact in my community. 
            </p>
            <p style={{ textAlign: 'justify' }}>
            💪 So if you are looking for someone who is hardworking, authentic and always up for a good challenge, look no further than yours truly! Lets connect and see how we can make a difference together 🤝.
            </p>
          </S.AboutDescription>
        </S.AboutContent>
      </S.AboutContainer>

 
     
      <Link href={'/#home'} legacyBehavior>
        <ButtonSecondary>
          <a>
            <ArrowLeft
              style={{ marginBottom: '-0.2rem' }}
              weight="bold"
              size={18}
            />{' '}
            Back
          </a>
        </ButtonSecondary>
      </Link>
    </Section>

    <Footer />
  </>;
}
