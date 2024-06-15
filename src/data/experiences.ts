import { link } from "fs"
import certificates from "./certificate_img"

const experience = [
  {
    id: 1,
    img: '/experience/NIWE.png',
    title: 'SBH',
    subTitle: 'Smart Bengal Hackathon',
    office: 'Finalist',
    description:
      '✯Developed an AI mentor platform, made the website 100% secure with SSL security and authentication in the backend.\n\n✯Applied advanced data analytics techniques to contribute to various research projects, elevating research outcomes.\n\n✯Fostered positive team dynamics through adaptability, professionalism, and effective communication.\n\n✯Maintained comprehensive documentation to streamline knowledge sharing within the team.\n\n✯Demonstrated dedication to continuous learning and professionalism, ready to tackle new challenges in a professional capacity.',
      tags: [
      { name: 'Python', icon: '/icons/python.png' },
      { name: 'React', icon: '/icons/react.png' },
      { name: 'Word', icon: '/icons/word.png' },
      { name: 'Excel', icon: '/icons/excel.png' },
      { name: 'PowerPoint', icon: '/icons/powerpoint.png' },
      {name : 'HTML', icon: '/icons/HTML.png' },
      {name : 'CSS', icon: '/icons/CSS.png' },
      {name : 'JS', icon: '/icons/JS.png' },
    ],
    date: '10-April-24 to 17-April-24',
    link: '',
    link2: 'https://sbh.rcciit.org.in/',
    certificate: ''
  },
  
  {
    id: 2,
    img: '/experience/tneb.png',
    title: 'Prayas',
    subTitle: 'Prayas 2k24',
    office: 'Finalist',
    description:'✯Developed an IoT-based smart farm with Arduino for Prayas 2k24, featuring automated plant irrigation and a laser security system.\n\n✯Implemented automated plant irrigation, ensuring optimal water usage and plant health.\n\n✯Integrated a laser security system to enhance farm security and prevent unauthorized access.\n\n✯Utilized Arduino for real-time monitoring and control of farm operations.\n\n✯Gained hands-on experience in IoT technology, embedded systems, and smart agriculture solutions.',
    tags: [
      { name: 'Arduino', icon: '/icons/Arduino.png' },
      { name: 'Excel', icon: '/icons/excel.png' },
      { name: 'PowerPoint', icon: '/icons/powerpoint.png' },
      { name: 'IOT', icon: '/icons/Pi.png' },
    ],
    date: '19-Feb-24 to 8-March-24',
    link: '',
    link2: '',
    certificate: '',
  },
  {
    id: 1,
    img: '/experience/nsic.png',
    title: 'Travel Website',
    subTitle: 'Professional Trainee in Web Development',
    office: 'Trainee',
    description:'✯Finished 1 month of training in Web Development. \n\n✯Developed a travel website during the training. \n\n✯The travel website ranked amongst the top 10 projects in our college, Techno International Batanagar.',
    tags: [
      { name: 'HTML', icon: '/icons/HTML.png' },
      { name: 'Css', icon: '/icons/CSS.png' },
      { name: 'Javascript', icon: '/icons/JS.png' },
      { name: 'Cloud', icon: '/icons/Cloud.png' },
    ],
    date: '23-Oct-23 to 30-Nov-23',
    link: '',
    link2: '',
    certificate: ''
  },
]

export default experience
