import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

        <header className="header" id="header">
            <nav className="nav container">
                <a href="#" className="nav__logo">Marlon</a>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <i className='bx bx-home-alt nav__icon'></i>
                                <span className="nav__name">Home</span>
                            </a>
                        </li>
                        
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className='bx bx-user nav__icon'></i>
                                <span className="nav__name">About</span>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className='bx bx-book-alt nav__icon'></i>
                                <span className="nav__name">Skills</span>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                                <i className='bx bx-briefcase-alt nav__icon'></i>
                                <span className="nav__name">Portfolio</span>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contactme" className="nav__link">
                                <i className='bx bx-message-square-detail nav__icon'></i>
                                <span className="nav__name">Contactme</span>
                            </a>
                        </li>
                    </ul>
                </div> 

                <img src="assets/img/perfil.png" alt="" className="nav__img"/>
            </nav>
        </header>

        <main>
            
            <section className="container section section__height" id="home">
                <h2 className="section__title">Home</h2>
            </section>

            
            <section className="container section section__height" id="about">
                <h2 className="section__title">About</h2>
            </section>

            
            <section className="container section section__height" id="skills">
                <h2 className="section__title">Skills</h2>
            </section>

            
            <section className="container section section__height" id="portfolio">
                <h2 className="section__title">Portfolio</h2>
            </section>

            
            <section className="container section section__height" id="contactme">
                <h2 className="section__title">Contactme</h2>
            </section>
        </main>

    </>
  )
}

export default App
