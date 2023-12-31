import './header.css';
import React, { useState, useEffect } from 'react';
import { Link, animateScroll } from 'react-scroll';


function Header(){

  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + scrollPosition;
        const sectionBottom = sectionTop + rect.height;

        // Defina as posições verticais específicas para ativar a borda inferior
        const offset = 1050; // Ajuste conforme necessário

        if (scrollPosition >= sectionTop - offset && scrollPosition < sectionBottom - offset) {
          setCurrentSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (to) => {
    animateScroll.scrollToTop();
    setCurrentSection(to);
  };


    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li> <Link
              to="hero"
              smooth={true}
              duration={500}
              className={currentSection === 'hero' ? 'active' : ''}
              onClick={() => handleLinkClick('hero')}
              style={{ borderBottom: currentSection === 'hero' ? '2px solid #3498db' : 'none' }}
            >
              Home
            </Link></li>
                        <li> <Link
              to="section2"
              smooth={true}
              duration={500}
              className={currentSection === 'section2' ? 'active' : ''}
            >
              Sobre
            </Link></li>
                        <li> <Link
              to="section3"
              smooth={true}
              duration={500}
              className={currentSection === 'section3' ? 'active' : ''}
            >
              Projetos
            </Link></li>
                        <li> <Link
              to="section4"
              smooth={true}
              duration={500}
              className={currentSection === 'section4' ? 'active' : ''}
            >
              Contato
            </Link></li>
                        <li> <Link
              to="section5"
              smooth={true}
              duration={500}
              className={currentSection === 'section5' ? 'active' : ''}
            >
              Resumo
            </Link></li>
                    </ul>
                </nav>
            </header>
            <div className="above_hero"></div>
        </div>
    );
}

export default Header;
