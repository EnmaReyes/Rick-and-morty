import React from 'react'
import style from "../About/About.module.css"
export const About = () => {
  return (
    <div >
      <div className= {style.aboutpage}>
        <h1>Todo acerca la pagina y su creador</h1>
        <p>Creador: <bold>Enmanuel Reyes</bold> </p>
        <p>Pagina: <bold>Rick and Morty Characters</bold></p>
        </div>
    </div>
  )
}

export default About;
