import React from 'react';
import ReactDOM from 'react-dom';
import photo from './images/photo-cv-new.png'
import htmlLogo from './images/html-logo.png'
import cssLogo from './images/css-logo.png'
import jsLogo from './images/js-logo.png'
import reactLogo from './images/react-logo-.png'
import githubLogo from './images/github-brands.svg'
import linkedinLogo from './images/linkedin-brands.svg'

 // JSX element, header
const welcome = 'Arturo Solis'
const title = 'Front-end developer'
const subtitle = '[WordPress/ Drupal/ React/ JavaScript] Developer'
const author = {
     firstName: 'Arturo',
     lastName: 'Solis Di Miele'
 } 

const loca = {
     city: 'Brussels',
     country: 'Belgium'
 }

const user = (
  <div>
    <img src={photo} alt='photo-cv'/>
  </div>
)

const header = (
     <header>
      <div className = 'header-wrapper'>
        <div>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>Location: {loca.city}, {loca.country}</p>
        </div>
        <div>
          {user}
        </div>
      </div>
     </header>
   )


// JSX element, main
const skills = ['HTML', 'CSS', 'JavaScript', 'WordPress', 'Drupal', 'React', 'Docker']
const skillsFormated = skills.map((skill) => <button key={skill}>{skill}</button>)


    const main = (
        <main>
            <div className = 'main-wrapper'>
                <h2>skills</h2>
                <strong>
                <ul>{skillsFormated}</ul> 
            </strong>
            </div>
        </main>
      )

// JSX side
const side = (
  <aside className='aside-wrapper'>
  <div>
  <h2>Front End Stacks</h2>
  </div>
  <div>
  <img src={htmlLogo} alt='logo html'/>
  <img src={cssLogo} alt='logo css'/>
  <img src={jsLogo} alt='logo JavaScript'/>
  <img src={reactLogo} alt='logo React'/>
  </div>
  </aside>
)

const contact = (
  <aside className="contact-wrapper">
  <div>
  <h2>contact</h2>
  </div>
  <div>
    <a href="https://github.com/artedsolis" target="_blank">
  <img src={githubLogo} alt='logo github'/>
  </a>
  <a href="https://www.linkedin.com/in/arturosolisdimiele/" target="_blank">
  <img src={linkedinLogo} alt='logo linkedin'/>
  </a>
  </div>
  <div>
    <p>arturo.solis.dimiele@gmail.com</p>
  </div>
  </aside>

)


// JSX element, footer
const footer = (
  <footer className = "footer-wrapper">
    <p>Build with React. Copyright 2020</p>
  </footer>
)

// JSX element, app, a container or a parent
const app = (
  <div>
    {header}
    {main}
    {side}
    {contact}
    {footer}
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
// ReactDOM has the render method and the render method takes two argument
ReactDOM.render(app, rootElement)