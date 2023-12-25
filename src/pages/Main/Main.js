import React from 'react'
import { Helmet } from 'react-helmet'


 
import { Navbar, Footer, Landing, About, Skills, Testimonials, Blog, Education, Experience, Contacts, Projects, Services, Achievement } from '../../components'
import { headerData } from '../../data/headerData'


/**
 * The Main function returns a JSX element that represents a portfolio website with various sections
 * such as landing, about, education, skills, experience, projects, achievements, services,
 * testimonials, blog, contacts, and footer.
 * @returns The Main component is returning a JSX element, which is a div containing multiple
 * components such as Helmet, Navbar, Landing, About, Education, Skills, Experience, Projects,
 * Achievement, Services, Testimonials, Blog, Contacts, and Footer.
 */
function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            <Achievement />
            <Services />
            <Testimonials />
            <Blog />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
