/* eslint-disable-next-line import/no-anonymous-default-export */
import Link from 'next/link'
import { Form } from './Form'
import { Description, Section, Title } from '../../styles/styles'
import { ContainerContact, ContactContent } from './styles'
import { BsWhatsapp } from 'react-icons/bs'
import { Envelope, TelegramLogo } from 'phosphor-react'

const calendy = process.env.NEXT_PUBLIC_CALENDLY_URL;

export function Contact() {
  return (
    <Section>
      <Title>
        <p></p>
        Contact Form
        <span>
          <Envelope /> Contact
        </span>
      </Title>
      <Description>
      So if you are looking for someone hardworking, authentic and always up for a good challenge, look no further than yours truly! Lets connect and see how we can make a difference together:)
      </Description>

      <ContainerContact>
        <ContactContent>
          <div className="contact-content">
            <h4>
              <BsWhatsapp size={22} color="#00fffb" /> WhatsApp{' '}
            </h4>
            <Link href="https://api.whatsapp.com/send?phone=918838416187" target="_blank">

              <span>+91 6290951425</span>

            </Link>
          </div>

          <div className="contact-content">
            <h4>
              {' '}
              <TelegramLogo size={22} color="#00fffb" /> Email{' '}
            </h4>
            <Link href="mailto:janaturin70@gmail.com" target="_blank">

              <span>janaturin70</span>

            </Link>
          </div>
          
        </ContactContent>
        <Form />
         
      </ContainerContact>
    </Section>
  );
}
