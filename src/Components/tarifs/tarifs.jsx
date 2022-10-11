import React from "react";
import "./tarifs.scss";
import Tarif from "./card/card";
const tarifs = () => {
  return (
    <div className="tarifs">
      <Tarif
        price="0€"
        tr_name="Gratuit"
        cm1="Gratuit"
        cm2="Jusqu'à 4 clients"
        cm3="Chiffre d'affaires jusqu'à 5 000€"
      />

      <Tarif
        price="5€"
        tr_name="Basique"
        cm1="30 jours d'essai gratuits"
        cm2="Clients illimités"
        cm3="Chiffre d'affaires jusqu'à 30 000€"
      />

      <Tarif
        price="12€"
        tr_name="Pro"
        cm1="30 jours d'essai gratuits"
        cm2="Clients illimités"
        cm3="Chiffre d'affaires illimité"
      />
    </div>
  );
};

export default tarifs;
