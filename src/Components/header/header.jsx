import React from 'react'
import './header.scss'
import Pakko from '../images/pakko.png'
const header = () => {
  return (
   <div className="header">
        <img src = {Pakko} />

        <ul>
            <li><a href="">Fonctionnalités</a> </li>
            <li><a href="">Tarifs</a> </li>
            <li><a href="">App iOS</a> </li>
            <li><a href="">Me connecter</a>  </li>
            <button>S'inscrire</button>
        </ul>
   </div>
  )
}

export default header