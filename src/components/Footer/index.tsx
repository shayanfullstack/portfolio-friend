import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'
import { FooterContainer } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <h4> &copy; {new Date().getFullYear()} Turin Kumar Jana</h4>
      <div className="links">
        <Link
          href={'https://github.com/TtRr19'}
          target="_blank"
          aria-label="Link para o Github">

          <FiGithub />

        </Link>
        <Link
          href={'https://www.linkedin.com/authwall?trk=bf&trkInfo=AQH0GoAa2E7MwQAAAZAba45AcUzSCTuk8RzxZsjZID_rcT-qEYwsxaN6YV67LY3ia9O6p1I0-yxTbpKNf2rYKus6uIFXJpHpqyNVbAA6otL717Pl1ur6wOGkpZlI7fBogYh6EYU=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fturin-j-1067372bb%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app'}
          target="_blank"
          aria-label="Link para o Linkedin">

          <FiLinkedin />

        </Link>

   
      </div>
    </FooterContainer>
  );
}
