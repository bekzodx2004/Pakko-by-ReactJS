import React from 'react'
import './card.scss'
const card = (props) => {
  return (
    <div className="tarifs__card">
        <div className="price">
            <div>
                <h4>Pakko</h4>
                <h3>{props.tr_name}</h3>
            </div>
            <h2>{props.price}<font>/mois</font></h2>
        </div>
        <div className="comforts">
            <h3>
                <i className='fa-regular fa-circle-check'></i>
                {props.cm1}</h3>
            <h3>
                <i className='fa-regular fa-circle-check'></i>
                {props.cm2}</h3>
            <h3>
                <i className='fa-regular fa-circle-check'></i>
                {props.cm3}</h3>
        </div>
    </div>
  )
}

export default card