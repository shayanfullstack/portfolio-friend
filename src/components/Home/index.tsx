/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Typewriter from 'typewriter-effect'
import { Button, ButtonPrimary, Container } from '../../styles/styles'
import { Content, ImgHome, HomeText } from './styles'
import { FiArrowRight } from 'react-icons/fi'
import { useState } from 'react';
import Modal from 'react-modal';


Modal.setAppElement('#__next');

export function HomeHero() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }



  return (
    <Container>
      <Content>
        <HomeText>
          <p>
            <span>👋🏻</span> Hello, my name is
          </p>
          <h1>
            Turin Kumar Jana
            <span className="animation">
              <Image
                width={200}
                height={200}
                src="/vectors/triangle.svg"
                alt="triangle"
              />
            </span>
          </h1>
          <h2>
            <Typewriter
              options={{
                strings: ['Developer | Poet | Singer'].map(str => str.replace('and', 'e')),
                autoStart: true,
                loop: true,
              }}
            />
          </h2>

          <div className="button">
            <ButtonPrimary onClick={openModal}>
              <b>See my Story</b>
              <FiArrowRight style={{ marginBottom: '-0.3rem' }} size={20} />
            </ButtonPrimary>

            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Example Modal"
              style={{
                overlay: {
                  backgroundColor: 'rgba(0, 0, 0, 0.75)', // semi-transparent black
                },
                content: {
                  alignContent: 'center',
                  color: 'lightsteelblue',
                  top: '50%',
                  left: '50%',
                  right: 'auto',
                  bottom: 'auto',
                  marginRight: '-50%',
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: '#fff',
                  borderRadius: '10px', 
                  padding: '20px',
                },
              }}
            >
              <h2 style={{
                color: 'black',
                textAlign: 'center',
                fontSize: '1.5rem',
              }}>Story of Turin Kumar Jana</h2>
              <p style={{
                marginTop: '1rem',
                color: 'black',
                textAlign: 'center',
                fontSize: '1rem',
              }}>I was born in Kolkata West Bengal India, and was not a great guy in studies since the start. I lacked the fire to study, but something changed when I was in 10th class. One of my friends told me that "you can't do anything" and even my teachers used to say "you will fail in boards", but little did they know, that burnt me from inside so badly, then I became the fire, internalized the anger, and scored so high that even the present topper couldn't beat me. I still have the same fire, continuing throught the years.</p>
              <p style={{
                color: 'black',
                textAlign: 'center',
                fontSize: '1rem',
              }}>If not then close it</p>
              <p style={{
                color: 'black',
                textAlign: 'center',
                fontSize: '1rem',
              }}>and go sleep.</p>
              <p style={{
                marginTop: '1rem',
                color: 'black',
                textAlign: 'center',
                fontSize: '1rem',
                fontWeight: 'bold',
              }}>Do you want to close?</p>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
              }}>
              <Button style={{
                display: 'inline-block',
                alignContent: 'center',
                marginTop: '1rem',
                marginRight: '1rem',
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '5px',
              }} onClick={closeModal}>Close</Button>
            
              </div>
            </Modal>
          </div>
        </HomeText>
        <ImgHome>
          <img className="home-img" src="/home.png" alt="Imagem da Home" />

          <div className="code">
            <Image
              width={150}
              height={150}
              src="/vectors/dino.svg"
              alt="dinossauro"
            />
          </div>
        </ImgHome>
      </Content>
    </Container>
  )
}
