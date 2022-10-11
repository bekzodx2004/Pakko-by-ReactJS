import React from "react";
import Block from "./block/block";
import './analyzes.scss'
import I1 from "../images/i1.png";
import I2 from "../images/i2.png";
import I3 from "../images/i3.png";

const analyzes = () => {
  return (
    <div className="analyzes">
      <Block
        card_img={I1}
        h5="Suivi et analyse"
        h2="Chiffre d'affaires, cotisations, plafonds ..."
        p="Visualisez et comparez vos chiffres sur l'année, le trimestre ou le mois. Chiffre d'affaires, cotisations, plafonds, TVA récoltée, encaissements et ce qu'il reste dans votre poche réellement à la fin !"
      />
      <Block
        card_img={I2}
        h5="Devis et facturation"
        h2="Générez vos factures et devis en un rien de temps"
        p="Générez des factures et des devis esthétiques. Suivez chaque étape importante : envoyé, en retard, payé… Générez des acomptes et des soldes en quelques clics seulement."
      />
      <Block
        card_img={I3}
        h5="Gestion des projets et clients"
        h2="Gérez facilement vos clients et projets"
        p="Créez rapidement vos projets et clients. Suivez les chiffres clés pour chacun. Retrouvez tous vos documents plus facilement."
      />
    </div>
  );
};

export default analyzes;
