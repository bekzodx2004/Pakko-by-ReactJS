import React from 'react'
import './top.scss'

import Top_img from '../images/site_shot.png'

const top = () => {
  return (
    <div className="top">
        <h2>Devis, factures, suivi, plafonds, cotisations</h2>
        <p>Pakko accompagne les micro-entrepreneurs et leur fait gagner du temps !</p>
        <button>Créer mon compte</button>
        <button>Voir la vidéo</button>

        <img src={Top_img} alt="" />
    </div>
  )
}

export default top