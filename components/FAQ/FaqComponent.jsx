/* eslint-disable react/prop-types */
import { useState } from "react";
// import { motion } from 'framer-motion'
import './faq.scss';
const FaqComponent = ({ question, answer, isDark }) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="faq_component">
            <div className={`faq_question ${isDark && 'darkmode_secondary'}`} onClick={() => setIsOpen((prev) => !prev)}>
                <h3 style={{ color: isOpen ? '#FFD002' : '#262626' }}>{question}</h3>
                {
                    !isOpen ? (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M16 3C8.832 3 3 8.832 3 16C3 23.168 8.832 29 16 29C23.168 29 29 23.168 29 16C29 8.832 23.168 3 16 3ZM16 5C22.087 5 27 9.913 27 16C27 22.087 22.087 27 16 27C9.913 27 5 22.087 5 16C5 9.913 9.913 5 16 5ZM15 10V15H10V17H15V22H17V17H22V15H17V10H15Z" fill={!isDark ? "#262626" : '#E0E0E0'} />
                    </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M16 3C8.832 3 3 8.832 3 16C3 23.168 8.832 29 16 29C23.168 29 29 23.168 29 16C29 8.832 23.168 3 16 3ZM16 5C22.087 5 27 9.913 27 16C27 22.087 22.087 27 16 27C9.913 27 5 22.087 5 16C5 9.913 9.913 5 16 5ZM10 15V17H22V15H10Z" fill="#FFD002" />
                    </svg>)
                }
            </div>

            <div
                style={{ gridTemplateRows: isOpen ? '1fr' : '0fr', transform: isOpen ? 'scaleY(1)' : 'scaleY(0)', backgroundColor: isDark ? 'transparent' : '' }}
                className={`wrapper`}


            >
                <div
                    className="faq_answer">
                    {answer}
                </div>
            </div>
        </div >
    )
}

export default FaqComponent