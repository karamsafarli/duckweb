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
      contact: 'Əlaqə',
      main: 'İşlərinizi bizə əmanət edin',
      texting: 'Duckweb komandası olaraq rəqəmsal dünyada sizə keyfiyyətli xidmət göstərmək üçün yanınızdayıq. Elə indi sifariş et və verdiyimiz xidmətlərdən yararlan.',
      buttonlng: 'İndi Sifariş Et',
      first: 'Veb Saytların Hazırlanması',
      second: 'Sosial Media Marketinq',
      third: 'QR Kod Rəqəmsal Menyular',
      heading1: 'Biz kimik?',
      heading2: 'Sizi hədəflərinizə çatdırmaq üçün çalışırıq!',
      heading3: 'Əvvəlcə müştərilərimizi diqqətlə dinləyirik, daha sonra onların tələblərinə uyğun effektli həllər tapmaq üçün araşdırmalar edir və komanda şəklində çalışaraq hədəfə doğru irəliləyirik. İşimizin keyfiyyətli olması və müştərilərimizin məmnuniyyəti isə ilk öncəliklərimizdəndir.'


    },
    {
      home: 'Home',
      about: 'About us',
      service: 'Services',
      faq: 'FAQ',
      contact: 'Contact us',
      main: 'Entrust your work to us',
      texting: 'As the Duckweb team, we are here to provide you with quality service in the digital world. Order now and take advantage of our services.',
      buttonlng: 'Order now',
      first: 'Development of Websites',
      second: 'Social Media Marketing',
      third: 'QR Code Digital Menus',
      heading1: 'Who are we?',
      heading2: 'We are working to get you to your goals!',
      heading3: 'First, we carefully listen to our customers, then we conduct research to find effective solutions according to their requirements, and work as a team, we move towards the goal. The quality of our work and the satisfaction of our customers are among our first priorities.'


    },
    {
      home: 'Плавная',
      about: 'О нас',
      service: 'Yслуги',
      faq: 'Частые вопросы',
      contact: 'Связаться с нами',
      main: 'Доверьте свою работу нам',
      texting: 'Как команда Duckweb, мы здесь, чтобы предоставить вам качественный сервис в цифровом мире. Закажите сейчас и воспользуйтесь нашими услугами.',
      buttonlng: 'Заказать сейчас',
      first: 'Разработка веб-сайтов',
      second: 'Маркетинг в области СМИ',
      third: 'Цифровые меню с QR-кодом',
      heading1: 'Кто мы?',
      heading2: 'Мы работаем для достижения ваших целей!',
      heading3: 'Сначала мы внимательно слушаем наших клиентов, затем проводим исследования для поиска эффективных решений согласно их требованиям и, работая в команде, движемся к цели. Качество нашей работы и удовлетворенность наших клиентов являются одними из наших главных приоритетов.'


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
              <motion.svg animate={{ rotate: toggleModal ? 180 : 0 }} xmlns="http://www.w3.org/2000/svg" width="15" height="10" viewBox="0 0 15 10" fill="none">
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
        <section id="home">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-5">
                <motion.div
                  initial={{
                    y: 150,
                    opacity: 0
                  }}
                  animate={{
                    y: 0,
                    opacity: 1
                  }}

                  transition={{
                    delay: 0.1,
                    stiffness: 70,
                    type: 'spring'
                  }}
                  className="home_left">
                  <h1>{languages[lang].main}</h1>
                  <p>{languages[lang].texting}</p>
                  <a href="">{languages[lang].buttonlng}</a>
                </motion.div>
              </div>
              <div className="col-lg-7">
                <motion.div
                  initial={{
                    y: 150,
                    opacity: 0
                  }}
                  animate={{
                    y: 0,
                    opacity: 1
                  }}

                  transition={{
                    delay: 0.1,
                    stiffness: 70,
                    type: 'spring'
                  }}
                  className="home_right">
                  <div className="imgcont">
                    <img src="/src/assets/home.png" alt="" />
                  </div>
                  <div className="home_services">
                    <motion.div
                      initial={{
                        x: -120,
                        opacity: 0
                      }}
                      animate={{
                        x: 0,
                        opacity: 1
                      }}

                      transition={{
                        delay: 0.4,
                        stiffness: 100,
                        type: 'spring'
                      }}
                      className="home_service">
                      <div className="icon">
                        <img src="/src/assets/globe.png" alt="" />
                      </div>
                      <p>{languages[lang].first}</p>
                    </motion.div>
                    <motion.div
                      initial={{
                        x: -120,
                        opacity: 0
                      }}
                      animate={{
                        x: 0,
                        opacity: 1
                      }}

                      transition={{
                        delay: 0.6,
                        stiffness: 100,
                        type: 'spring'
                      }}
                      className="home_service">
                      <div className="icon">
                        <img src="/src/assets/smmicon.png" alt="" />
                      </div>
                      <p>{languages[lang].second}</p>
                    </motion.div>
                    <motion.div
                      initial={{
                        x: -120,
                        opacity: 0
                      }}
                      animate={{
                        x: 0,
                        opacity: 1
                      }}

                      transition={{
                        delay: 0.8,
                        stiffness: 100,
                        type: 'spring'
                      }}
                      className="home_service">
                      <div className="icon">
                        <img src="/src/assets/qricon.png" alt="" />
                      </div>
                      <p>{languages[lang].third}</p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section ref={aboutSection} id="about">
          <div className="container">
            <div className="row">
              <motion.div
                whileInView={{
                  x: 0,
                  opacity: 1
                }}

                initial={{
                  x: -250,
                  opacity: 0
                }}

                transition={{
                  delay: 0.2,
                  stiffness: 100,
                  type: 'spring'
                }}

                viewport={{ once: true }}
                className="col-lg-6">
                <div className="about_left">
                  <h3>{languages[lang].heading1}</h3>
                  <h2>{languages[lang].heading2}</h2>
                  <p>{languages[lang].heading3}</p>
                </div>
              </motion.div>
              <div

                className="col-lg-6">
                <div className="about_right">
                  <motion.div
                    whileInView={{
                      x: 0,
                      opacity: 1,
                      rotate: 0
                    }}

                    initial={{
                      x: 250,
                      opacity: 0,
                      rotate: 60
                    }}

                    transition={{
                      delay: 0.2,
                      stiffness: 70,
                      type: 'spring'
                    }}

                    viewport={{ once: true }}
                    className="img_cont">
                    <img src="/src/assets/about_img.png" alt="" />
                    <div className="border_div"></div>
                  </motion.div>

                </div>
              </div>
            </div>
          </div>
        </section>
        <section ref={serviceSection} id="services">Services</section>
        <section ref={faqSection} id="faq">Faq</section>
        <section ref={contactSection} id="contact">Contact</section>
      </main>

      <footer></footer>
    </>
  )
}

export default App