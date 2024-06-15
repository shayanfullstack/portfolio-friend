import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HeaderContainer, MobileIcon, NavMenu, Icons } from './styles'
import { List, X } from 'phosphor-react'
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

import AudioPlayer from '../Music/AudioPlayer';

export function Header() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const musicSrc = '/others/music.mp3';
  
  return (
    <HeaderContainer style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
      <div className="mobile-content"  style={{ display: 'flex'}}>
        <Link href={'/'}>
          <div className="logo">
            <Image
              className="logo"
              width={45}
              height={45}
              src="/Logo1.png"
              alt="logo"
            />
          </div>
          {'Turin Kumar Jana'}
        </Link>

        <div className="audio-player">
          <AudioPlayer audioSrc={musicSrc} />
        </div>
        <style jsx>{`
        .audio-player {
          margin: 5px 20px;
          flex-grow: 1; 
          max-width: 600px; 
        }
          `}</style>

        <MobileIcon onClick={handleOpen}>
          {open ? (
            <X size={25} weight="bold" />
          ) : (
            <List size={25} weight="bold" />
          )}
        </MobileIcon>
      </div>

      <NavMenu onClick={handleOpen} open={open}>
        <ul>
          <li>
            <Link href={'/'}>

              <span>Home</span>

            </Link>
          </li>

          <li>
            <Link href={'/about'}>

              <span>About</span>

            </Link>
          </li>

          <li>
            <Link href={'/experience'}>

              <span>Experience</span>

            </Link>
          </li>


          <li>
            <Link href={'/projects'}>

              <span>Projects</span>

            </Link>
          </li>

          <li>
            <Link href={'/resume'}>

              <span>Resume</span>

            </Link>
          </li>

          <li>
            <Link href={'/contact'}>

              <span>Contact</span>

            </Link>
          </li>
        </ul>

        <Icons>
          <Link
            href={'https://github.com/TtRr19'}
            target="_blank"
            aria-label="Github">

            <FiGithub />

          </Link>
          <Link
            href={'https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFgIkRigBJs4gAAAZAbsXDgHTE96IIaqcdhZ7VEXRr8fryXYZLLWV1-xDWpsQsXoRPzqVBwVRQUbwZODjzZev9SioBx_UNyi2taEb1JAfXmFk8ZqsuPn6vFNZkY2LlLIsD0P04=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fturin-j-1067372bb%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app'}
            target="_blank"
            aria-label="Linkedin">

            <FiLinkedin />

          </Link>

       


        </Icons>
      </NavMenu>
    </HeaderContainer>
  );
}
