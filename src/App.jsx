/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion'

const App = () => {
  const [lang, setLang] = useState(0);
  const [activeLink, setActiveLink] = useState('home');
  const [selectedLang, setSelectedLang] = useState('AZE');
  const [toggleModal, setToggleModal] = useState(false);
  const aboutSection = useRef();
  const faqSection = useRef();
  const serviceSection = useRef();
  const contactSection = useRef();

  const handleLinkColor = (active) => {
    if (active === activeLink) {
      return '#FFD002'
    } else {
      return '#FAFAFA'
    }
  }
  const languages = [
    {
      home: 'Ana Səhifə',
      about: 'Haqqımızda',
      service: 'Xidmətlər',
      faq: 'FAQ',
      contact: 'Əlaqə'
    },
    {
      home: 'Home',
      about: 'About us',
      service: 'Services',
      faq: 'FAQ',
      contact: 'Contact us'
    },
    {
      home: 'Плавная',
      about: 'О нас',
      service: 'Yслуги',
      faq: 'Частые вопросы',
      contact: 'Связаться с нами'
    },

  ]

  useEffect(() => {
    const aboutTop = aboutSection.current.getBoundingClientRect().top + window.scrollY;
    const aboutBottom = aboutSection.current.getBoundingClientRect().bottom + window.scrollY;
    const faqTop = faqSection.current.getBoundingClientRect().top + window.scrollY;
    const faqBottom = faqSection.current.getBoundingClientRect().bottom + window.scrollY;
    const serviceTop = serviceSection.current.getBoundingClientRect().top + window.scrollY;
    const serviceBottom = serviceSection.current.getBoundingClientRect().bottom + window.scrollY;
    const contactTop = contactSection.current.getBoundingClientRect().top + window.scrollY;
    const contactBottom = contactSection.current.getBoundingClientRect().bottom + window.scrollY;
    window.addEventListener('scroll', () => {
      if (window.scrollY >= aboutTop && window.scrollY < aboutBottom) {
        setActiveLink('about')
      }
      else if (window.scrollY >= serviceTop && window.scrollY < serviceBottom) {
        setActiveLink('services')
      }
      else if (window.scrollY >= faqTop && window.scrollY < faqBottom) {
        setActiveLink('faq')
      }
      else if (window.scrollY >= contactTop && window.scrollY < contactBottom) {
        setActiveLink('contact')
      }
      else {
        setActiveLink('home')
      }
    })
  }, [])
  return (
    <>
      <nav>
        <div className="container">
          <div className="logo">
            <a href="#">Logo</a>
          </div>
          <div className="nav_links">
            <ul>
              <li>
                <a href="#"
                  onClick={() => setActiveLink('home')}
                  style={{ color: handleLinkColor('home') }}
                >{languages[lang].home}</a>
              </li>
              <li>
                <a href="#about"
                  onClick={() => setActiveLink('about')}
                  style={{ color: handleLinkColor('about') }}
                >{languages[lang].about}</a>
              </li>
              <li>
                <a href="#services"
                  onClick={() => setActiveLink('services')}
                  style={{ color: handleLinkColor('services') }}
                >{languages[lang].service}</a>
              </li>
              <li>
                <a href="#faq"
                  onClick={() => setActiveLink('faq')}
                  style={{ color: handleLinkColor('faq') }}
                >{languages[lang].faq}</a>

              </li>
              <li>
                <a href="#contact"
                  onClick={() => setActiveLink('contact')}
                  style={{ color: handleLinkColor('contact') }}
                >{languages[lang].contact}</a>
              </li>
            </ul>
          </div>
          <div className="lang" onClick={() => setToggleModal((prev) => !prev)}>
            <div className="selected_lang" >
              <span>{selectedLang}</span>
              <motion.svg animate={{rotate: toggleModal ? 180 : 0}} xmlns="http://www.w3.org/2000/svg" width="15" height="10" viewBox="0 0 15 10" fill="none">
                <path d="M6.30669 9.24946L0.311688 2.39696C-0.395811 1.59071 0.179188 0.324463 1.25294 0.324463H13.2429C13.4832 0.324257 13.7185 0.393323 13.9206 0.523389C14.1226 0.653455 14.2829 0.839009 14.3822 1.05783C14.4816 1.27665 14.5157 1.51946 14.4806 1.75718C14.4455 1.99491 14.3426 2.21747 14.1842 2.39821L8.18919 9.24821C8.07186 9.38247 7.92717 9.49008 7.76483 9.56381C7.60248 9.63754 7.42624 9.67569 7.24794 9.67569C7.06964 9.67569 6.8934 9.63754 6.73105 9.56381C6.56871 9.49008 6.42402 9.38247 6.30669 9.24821V9.24946Z" fill="#FAFAFA" />
              </motion.svg>
            </div>
            {
              toggleModal &&
              <motion.div animate={{ y: 0, opacity: 1 }} initial={{ opacity: 0, y: 20 }} className="lang_options">
                <div className="option" style={{ backgroundColor: lang === 0 ? 'rgba(38, 38, 38, 0.10)' : '#fff' }} onClick={() => { setSelectedLang('AZE'); setLang(0) }}>AZE</div>
                <div className="option" style={{ backgroundColor: lang === 1 ? 'rgba(38, 38, 38, 0.10)' : '#fff' }} onClick={() => { setSelectedLang('ENG'); setLang(1) }}>ENG</div>
                <div className="option" style={{ backgroundColor: lang === 2 ? 'rgba(38, 38, 38, 0.10)' : '#fff' }} onClick={() => { setSelectedLang('RUS'); setLang(2) }}>RUS</div>
              </motion.div>
            }
          </div>
        </div>
      </nav>

      <main>
        <section>Home</section>
        <section ref={aboutSection} id="about">About</section>
        <section ref={serviceSection} id="services">Services</section>
        <section ref={faqSection} id="faq">Faq</section>
        <section ref={contactSection} id="contact">Contact</section>
      </main>

      <footer></footer>
    </>
  )
}

export default App