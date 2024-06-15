import Image from 'next/image'
import Link from 'next/link'
import { Button, Container, ButtonAlternatives } from '../../styles/styles'
import { AboutContainer } from './styles'
import { ArrowRight, TelegramLogo } from 'phosphor-react'

export function About() {
  return (
    <Container>
      <AboutContainer>
        <div className="AboutImg">
          <Image
            width={200}
            height={200}
            className="AboutImg"
            src="/man.png"
            alt="Turin Image"
          />
        </div>

        <div className="aboutContent">
          <div className="aboutDescription">
            <h2>Little About Me!!</h2>
            <li>
            I am Turin Kumar Jana, a proud student of Techno International Batanagar, where I am pursuing a Bachelors degree in Computer Science and Engineering and building a solid foundation in technology.
            </li>
            <li>
            I am also an avid developer, enthusiastic volunteer, and a chess player, 
            and I love exploring new opportunities and avenues.
            </li>

          </div>

          <div className='aboutButton'>
            <Link href={'/resume'}>

              <Button>
                Resume
                
              </Button>

            </Link>
            <Link href={'/about'}>

              <ButtonAlternatives>
                Read more
                <ArrowRight
                  style={{
                    marginBottom: '-0.1rem',
                    marginLeft: '0.2rem'
                  }}
                  weight="bold"
                  size={16}
                />
              </ButtonAlternatives>

            </Link>
          </div>
        </div>
      </AboutContainer>
    </Container>
  );
}
