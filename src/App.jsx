/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';
import { languages } from "../constants/lang";
import FaqComponent from "../components/FAQ/FaqComponent";
import { faqContent } from "../constants/lang";
import wp from "/assets/wp.png";
import ig from "/assets/ig.png";

const App = () => {
  const [lang, setLang] = useState(0);
  const [activeLink, setActiveLink] = useState('home');
  const [selectedLang, setSelectedLang] = useState('AZE');
  const [toggleModal, setToggleModal] = useState(false);
  const aboutSection = useRef();
  const faqSection = useRef();
  const serviceSection = useRef();
  const contactSection = useRef();
  const homeSection = useRef();
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    desc: ''
  });

  const [validation, setValidation] = useState({
    name: '',
    email: '',
    desc: ''
  });

  const [isAnimate, setIsAnimate] = useState(false);

  const [showGoUp, setShowGoUp] = useState(false);

  const [isError, setIsError] = useState(false);

  const [isClick, setIsClick] = useState(false);
  const [mousePositions, setMousePositions] = useState({
    y: '',
    x: ''
  })

  const handleLinkColor = (active) => {
    if (active === activeLink) {
      return '#FFD002'
    } else {
      return '#FAFAFA'
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(true)
  }

  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  useEffect(() => {
    let msg1 = '', msg2 = '', msg3 = '', err = false;
    if (inputs.name.trim().length === 0) {
      msg1 = languages[lang].validation.name;
      err = true
    } else {
      msg1 = ''
    }

    if (inputs.email.trim().length === 0) {
      msg2 = languages[lang].validation.email1;
      err = true
    }

    else if (!inputs.email.trim().match(re)) {
      msg2 = languages[lang].validation.email2;
      err = true;
    }
    else {
      msg1 = ''
    }

    if (inputs.desc.trim().length === 0) {
      msg3 = languages[lang].validation.text;
      err = true
    } else {
      msg3 = ''
    }

    setValidation({
      ...validation,
      name: msg1,
      email: msg2,
      desc: msg3
    });

    setIsError(err)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputs])

  useEffect(() => {
    // window.scrollTo(0, 0)
    const aboutTop = aboutSection.current.getBoundingClientRect().top + window.scrollY;
    const homeBottom = homeSection.current.getBoundingClientRect().bottom + window.scrollY;
    const aboutBottom = aboutSection.current.getBoundingClientRect().bottom + window.scrollY;
    const faqTop = faqSection.current.getBoundingClientRect().top + window.scrollY;
    const faqBottom = faqSection.current.getBoundingClientRect().bottom + window.scrollY;
    const serviceTop = serviceSection.current.getBoundingClientRect().top + window.scrollY;
    const serviceBottom = serviceSection.current.getBoundingClientRect().bottom + window.scrollY;
    const contactTop = contactSection.current.getBoundingClientRect().top + window.scrollY;
    const contactBottom = contactSection.current.getBoundingClientRect().bottom + window.scrollY;
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 600) {
        setShowGoUp(true)
      } else {
        setShowGoUp(false)
      }

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
      else if (window.scrollY >= 0 && window.scrollY < homeBottom) {
        setActiveLink('home')
      }
    });
    window.addEventListener('mousemove', (e) => {
      setMousePositions({
        ...mousePositions,
        y: e.clientY,
        x: e.clientX
      })

      // window.addEventListener('click', () => {
      //   setIsAnimate(true);

      //   setTimeout(() => {
      //     setIsAnimate(false)
      //   }, 100)
      // })

    });

    return () => {
      window.removeEventListener('mousemove');
      // window.removeEventListener('click')
    }

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
        <section id="home" ref={homeSection}>
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
                    <img src="/assets/home.png" alt="" />
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
                        <img src="/assets/globe.png" alt="" />
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
                        <img src="/assets/smmicon.png" alt="" />
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
                        <img src="/assets/qricon.png" alt="" />
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
              <div className="col-lg-6">
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
                  className="about_left">
                  <h3>{languages[lang].heading1}</h3>
                  <h2>{languages[lang].heading2}</h2>
                  <p>{languages[lang].heading3}</p>
                </motion.div>
              </div>
              <div className="col-lg-6">
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
                    <img src="/assets/about_img.png" alt="" />
                    <div className="border_div"></div>
                  </motion.div>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={serviceSection} id="services">
          <div className="container">
            <div className="section_heading">
              <motion.h2
                whileInView={{
                  x: 0,
                  opacity: 1
                }}

                initial={{
                  x: 250,
                  opacity: 0
                }}

                transition={{
                  delay: 0.2,
                  stiffness: 100,
                  type: 'spring'
                }}
                viewport={{ once: true }}
              >{languages[lang].services.top}
                <div className="bottom_line"></div>
              </motion.h2>
            </div>

            <div className="row g-5 justify-content-center">
              <div className="col-lg-5">
                <motion.div
                  whileInView={{
                    x: 0,
                    opacity: 1,
                  }}

                  initial={{
                    x: 250,
                    opacity: 0,
                  }}

                  transition={{
                    delay: 0.2,
                    stiffness: 80,
                    type: 'spring',
                  }}

                  viewport={{ once: true }}
                  className="service_container">
                  <h3>{languages[lang].services.onepart.title}</h3>
                  <div className="service_options">
                    {
                      languages[lang].services.onepart.options.map((el, idx) => (
                        <motion.div
                          whileInView={{
                            x: 0,
                            opacity: 1
                          }}

                          initial={{
                            x: 120,
                            opacity: 0
                          }}

                          transition={{
                            delay: (idx + 1) * 0.1,
                            stiffness: 60,
                            type: 'spring'
                          }}

                          viewport={{ once: true }}
                          key={idx} className="service_option">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#FFD002" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M22 4L12 14.01L9 11.01" stroke="#FFD002" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {el}
                        </motion.div>
                      ))
                    }
                  </div>
                </motion.div>
              </div>
              <div className="col-lg-5">
                <motion.div
                  whileInView={{
                    x: 0,
                    opacity: 1
                  }}

                  initial={{
                    x: 250,
                    opacity: 0
                  }}

                  transition={{
                    delay: 0.4,
                    stiffness: 80,
                    type: 'spring'
                  }}

                  viewport={{ once: true }}
                  className="service_container">
                  <h3>{languages[lang].services.twopart.title}</h3>
                  <div className="service_options">
                    {
                      languages[lang].services.twopart.options.map((el, idx) => (
                        <motion.div
                          whileInView={{
                            x: 0,
                            opacity: 1
                          }}

                          initial={{
                            x: 120,
                            opacity: 0
                          }}

                          transition={{
                            delay: (idx + 1) * 0.1,
                            stiffness: 60,
                            type: 'spring'
                          }}

                          viewport={{ once: true }}
                          key={idx} className="service_option">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#FFD002" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M22 4L12 14.01L9 11.01" stroke="#FFD002" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {el}
                        </motion.div>
                      ))
                    }
                  </div>
                </motion.div>
              </div>
              <div className="col-lg-5">
                <motion.div
                  whileInView={{
                    x: 0,
                    opacity: 1
                  }}

                  initial={{
                    x: 250,
                    opacity: 0
                  }}

                  transition={{
                    delay: 0.6,
                    stiffness: 80,
                    type: 'spring'
                  }}

                  viewport={{ once: true }}
                  className="service_container">
                  <h3>{languages[lang].services.threepart.title}</h3>
                  <div className="service_options">
                    {
                      languages[lang].services.threepart.options.map((el, idx) => (
                        <motion.div
                          whileInView={{
                            x: 0,
                            opacity: 1
                          }}

                          initial={{
                            x: 120,
                            opacity: 0
                          }}

                          transition={{
                            delay: (idx + 1) * 0.1,
                            stiffness: 60,
                            type: 'spring'
                          }}

                          viewport={{ once: true }}
                          key={idx} className="service_option">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#FFD002" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M22 4L12 14.01L9 11.01" stroke="#FFD002" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {el}
                        </motion.div>
                      ))
                    }
                  </div>
                </motion.div>
              </div>
              <div className="col-lg-5">
                <motion.div
                  whileInView={{
                    x: 0,
                    opacity: 1
                  }}

                  initial={{
                    x: 250,
                    opacity: 0
                  }}

                  transition={{
                    delay: 0.8,
                    stiffness: 80,
                    type: 'spring'
                  }}

                  viewport={{ once: true }}
                  className="service_container">
                  <h3>{languages[lang].services.fourpart.title}</h3>
                  <div className="service_options">
                    {
                      languages[lang].services.fourpart.options.map((el, idx) => (
                        <motion.div
                          whileInView={{
                            x: 0,
                            opacity: 1
                          }}

                          initial={{
                            x: 120,
                            opacity: 0
                          }}

                          transition={{
                            delay: (idx + 1) * 0.1,
                            stiffness: 60,
                            type: 'spring'
                          }}

                          viewport={{ once: true }}
                          key={idx} className="service_option">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#FFD002" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M22 4L12 14.01L9 11.01" stroke="#FFD002" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {el}
                        </motion.div>
                      ))
                    }
                  </div>
                </motion.div>
              </div>
              <div className="col-lg-5">
                <motion.div
                  whileInView={{
                    x: 0,
                    opacity: 1
                  }}

                  initial={{
                    x: 250,
                    opacity: 0
                  }}

                  transition={{
                    delay: 0.6,
                    stiffness: 80,
                    type: 'spring'
                  }}

                  viewport={{ once: true }}
                  className="service_container">
                  <h3>{languages[lang].services.fivepart.title}</h3>
                  <div className="service_options">
                    {
                      languages[lang].services.fivepart.options.map((el, idx) => (
                        <motion.div
                          whileInView={{
                            x: 0,
                            opacity: 1
                          }}

                          initial={{
                            x: 120,
                            opacity: 0
                          }}

                          transition={{
                            delay: (idx + 1) * 0.1,
                            stiffness: 60,
                            type: 'spring'
                          }}

                          viewport={{ once: true }}
                          key={idx} className="service_option">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#FFD002" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M22 4L12 14.01L9 11.01" stroke="#FFD002" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {el}
                        </motion.div>
                      ))
                    }
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <section id="work_process">
            <div className="container">
              <div className="section_heading">
                <motion.h2
                  whileInView={{
                    x: 0,
                    opacity: 1
                  }}

                  initial={{
                    x: 250,
                    opacity: 0
                  }}

                  transition={{
                    delay: 0.2,
                    stiffness: 100,
                    type: 'spring'
                  }}
                  viewport={{ once: true }}
                >{languages[lang].procestop}
                  <div className="bottom_line"></div>
                </motion.h2>
              </div>
              <div className="process_container">
                <motion.div
                  initial={{
                    y: 200,
                    opacity: 0
                  }}

                  whileInView={{
                    y: 0,
                    opacity: 1
                  }}

                  transition={{
                    delay: 0.2
                  }}

                  viewport={{ once: true }}

                  className="process_step">
                  <div className="process_circle step_1">
                    <img src="/assets/step1.png" alt="" />
                    <motion.div
                      initial={{
                        scale: 0
                      }}

                      whileInView={{
                        scale: 1
                      }}

                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                      className="step_num">01</motion.div>
                  </div>
                  <h5>{languages[lang].idea}</h5>
                </motion.div>
                <motion.div
                  initial={{
                    y: 200,
                    opacity: 0
                  }}

                  whileInView={{
                    y: 0,
                    opacity: 1
                  }}

                  transition={{
                    delay: 0.4
                  }}

                  viewport={{ once: true }}
                  className="process_step step2_cont">
                  <div className="process_circle step_2">
                    <img src="/assets/step2.png" alt="" />
                    <motion.div
                      initial={{
                        scale: 0
                      }}

                      whileInView={{
                        scale: 1
                      }}

                      transition={{ delay: 0.5 }}
                      viewport={{ once: true }}
                      className="step_num">02</motion.div>
                  </div>
                  <h5>{languages[lang].plan}</h5>
                </motion.div>
                <motion.div
                  initial={{
                    y: 200,
                    opacity: 0
                  }}

                  whileInView={{
                    y: 0,
                    opacity: 1
                  }}

                  transition={{
                    delay: 0.6
                  }}

                  viewport={{ once: true }}
                  className="process_step">
                  <div className="process_circle step_3">
                    <img src="/assets/step3.png" alt="" />
                    <motion.div
                      initial={{
                        scale: 0
                      }}

                      whileInView={{
                        scale: 1
                      }}

                      transition={{ delay: 0.7 }}
                      viewport={{ once: true }}
                      className="step_num">03</motion.div>
                  </div>
                  <h5>{languages[lang].prototip}</h5>
                </motion.div>
                <motion.div
                  initial={{
                    y: 200,
                    opacity: 0
                  }}

                  whileInView={{
                    y: 0,
                    opacity: 1
                  }}

                  transition={{
                    delay: 0.8
                  }}

                  viewport={{ once: true }}
                  className="process_step step4_cont">
                  <div className="process_circle step_4">
                    <img src="/assets/step4.png" alt="" />
                    <motion.div
                      initial={{
                        scale: 0
                      }}

                      whileInView={{
                        scale: 1
                      }}

                      transition={{ delay: 0.9 }}
                      viewport={{ once: true }}
                      className="step_num">04</motion.div>
                  </div>
                  <h5>{languages[lang].destek}</h5>
                </motion.div>
              </div>
            </div>
          </section>
        </section>



        <section ref={faqSection} id="faq">
          <div className="container">
            <div className="section_heading">
              <motion.h2
                whileInView={{
                  x: 0,
                  opacity: 1
                }}

                initial={{
                  x: 250,
                  opacity: 0
                }}

                transition={{
                  delay: 0.2,
                  stiffness: 100,
                  type: 'spring'
                }}
                viewport={{ once: true }}
              >Tez-tez verilən suallar
                <div className="bottom_line"></div>
              </motion.h2>
            </div>

            <div className="faq_container">
              {
                faqContent[lang].map((el, idx) => (
                  <motion.div key={idx}
                    initial={{
                      x: 350,
                      opacity: 0
                    }}

                    transition={{
                      stiffness: 100,
                      type: 'spring',
                      delay: (idx + 1) * 0.1
                    }}

                    whileInView={{
                      x: 0,
                      opacity: 1
                    }}

                    viewport={{ once: true }}
                  >
                    <FaqComponent answer={el.duckanswer} question={el.duckquestion} />
                  </motion.div>
                ))
              }
            </div>
          </div>
        </section>

        <section ref={contactSection} id="contact">
          <div className="container">
            <div className="section_heading">
              <motion.h2
                whileInView={{
                  x: 0,
                  opacity: 1
                }}

                initial={{
                  x: 250,
                  opacity: 0
                }}

                transition={{
                  delay: 0.2,
                  stiffness: 100,
                  type: 'spring'
                }}
                viewport={{ once: true }}
              >{languages[lang].connect}
                <div className="bottom_line"></div>
              </motion.h2>
            </div>

            <div className="row">

              <div className="col-lg-3 col-md-6">
                <motion.div
                  initial={{
                    y: 200,
                    opacity: 0
                  }}

                  whileInView={{
                    y: 0,
                    opacity: 1
                  }}

                  transition={{
                    type: 'spring',
                    stiffness: 60
                  }}

                  viewport={{ once: true }}
                  className="contact_card">
                  <div className="imgcont">
                    <img src="/assets/tel.png" alt="" />
                  </div>
                  <h3>{languages[lang].phone}</h3>
                  <a href="">+994 50 000 00 00</a>
                  <div className="overlay ovr_yellow"></div>
                </motion.div>
              </div>


              <div className="col-lg-3 col-md-6">
                <motion.div
                  initial={{
                    y: 200,
                    opacity: 0
                  }}

                  whileInView={{
                    y: 0,
                    opacity: 1
                  }}

                  transition={{
                    type: 'spring',
                    stiffness: 60
                  }}

                  viewport={{ once: true }}
                  className="contact_card">
                  <div className="imgcont">
                    <img src="/assets/vp.png" alt="" />
                  </div>
                  <h3>Whatsapp</h3>
                  <a href="">+994 50 000 00 00</a>
                  <div className="overlay ovr_green"></div>
                </motion.div>
              </div>


              <div className="col-lg-3 col-md-6">
                <motion.div
                  initial={{
                    y: 200,
                    opacity: 0
                  }}

                  whileInView={{
                    y: 0,
                    opacity: 1
                  }}

                  transition={{
                    type: 'spring',
                    stiffness: 60
                  }}

                  viewport={{ once: true }}
                  className="contact_card">
                  <div className="imgcont">
                    <img src="/assets/email.png" alt="" />
                  </div>
                  <h3>Email</h3>
                  <a href="">Helloduckweb@gmail.com</a>
                  <div className="overlay ovr_yellow"></div>
                </motion.div>
              </div>


              <div className="col-lg-3 col-md-6">
                <motion.div
                  initial={{
                    y: 200,
                    opacity: 0
                  }}

                  whileInView={{
                    y: 0,
                    opacity: 1
                  }}

                  transition={{
                    type: 'spring',
                    stiffness: 60
                  }}

                  viewport={{ once: true }} className="contact_card">
                  <div className="imgcont">
                    <img src="/assets/insta.png" alt="" />
                  </div>
                  <h3>Instagram</h3>
                  <a href="">@duckweb</a>
                  <div className="overlay ovr_gradient"></div>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{
                y: 250,
                opacity: 0
              }}

              whileInView={{
                y: 0,
                opacity: 1
              }}

              transition={{
                type: 'spring',
                stiffness: 60
              }}

              viewport={{ once: true }}
              className="contact_form">
              <div className="row">
                <div className="col-lg-6">
                  <div className="cf_left">
                    <p>👋 {languages[lang].contact_form.left}</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="cf_right">
                    <form>
                      <div className="inputs">
                        <div className="input_container">
                          <label htmlFor="name">{languages[lang].contact_form.names}</label>
                          <input
                            className={isClick && !validation.name.trim().length == 0 ? `input_error` : ``}
                            type="text" name="name" onChange={(e) => setInputs({ ...inputs, name: e.target.value })} />
                          <h6 className="validation_error">{isClick && validation.name}</h6>
                        </div>
                        <div className="input_container">
                          <label htmlFor="email">Email</label>
                          <input
                            className={isClick && !validation.email.trim().length == 0 ? `input_error` : ``}
                            type="email" name="email" onChange={(e) => setInputs({ ...inputs, email: e.target.value })} />
                          <h6 className="validation_error">{isClick && validation.email}</h6>
                        </div>
                      </div>

                      <textarea
                        className={isClick && !validation.desc.trim().length == 0 ? `input_error` : ``}
                        cols="30" rows="8" placeholder={languages[lang].contact_form.placeholder} onChange={(e) => setInputs({ ...inputs, desc: e.target.value })}></textarea>
                      <h6 className="validation_error mbottom">{isClick && validation.desc}</h6>
                      <button onClick={handleSubmit} type="submit">{languages[lang].contact_form.send}</button>
                    </form>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>


      </main>

      <footer>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-3 image">
              <h2>Logo</h2>
            </div>
            <div className="col-lg-3 text">
              <p>{languages[lang].footerone.title}</p>

              <ul>
                <li> <a href="#home"> {languages[lang].footerone.options[0]}</a></li>
                <li> <a href="#about">{languages[lang].footerone.options[1]} </a></li>
                <li> <a href="#services">{languages[lang].footerone.options[2]} </a> </li>
                <li> <a href="#faq">{languages[lang].footerone.options[3]} </a></li>
                <li> <a href="#contact">{languages[lang].footerone.options[4]} </a></li>

              </ul>

            </div>
            <div className="col-lg-4">
              <p>{languages[lang].footertwo.title}</p>

              {
                languages[lang].footertwo.options.map((el, idx) => (
                  <ul key={idx}>
                    <li>{el}</li>
                  </ul>
                ))
              }

            </div>
            <div className="col-lg-2 icons">
              <p>{languages[lang].footerthree.title}</p>
              <div className="iconss">
                <img src={wp} alt="" />
                <img src={ig} alt="" />
              </div>
            </div>
          </div>
          <div className="row copy g-5">
            <h3>© Copyright <span>Duckweb. 2023</span>  Bütün hüquqlar qorunur.</h3>
          </div>
        </div>
      </footer>
      <motion.div
        animate={{
          x: showGoUp ? 0 : 150,
          opacity: showGoUp ? 1 : 0
        }}

        transition={{
          stiffness: 100,
          type: 'spring'
        }}
        className="go_up" onClick={() => window.scrollTo(0, 0)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 6.66699V25.3337M16 6.66699L24 14.667M16 6.66699L8 14.667" stroke="#272829" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>

      <motion.div
        animate={{
          scale: isAnimate ? 0.8 : 1
        }}
        className="custom_mouse"
        style={{ left: (parseInt(mousePositions.x) - 12), top: (parseInt(mousePositions.y) - 12) }}
      >
        <img src="/assets/rubber-duck.png" alt="" />
      </motion.div>
    </>

  )
}

export default App