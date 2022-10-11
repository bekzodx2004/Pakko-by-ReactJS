import React from "react";
import "./services.scss";

import Card from "./card/card";

import S1 from "../images/s1.png";
import S2 from "../images/s2.png";
import S3 from "../images/s3.png";
import S4 from "../images/s4.png";
import S5 from "../images/s5.png";
import S6 from "../images/s6.png";
import S7 from "../images/s7.png";
import S8 from "../images/s8.png";

const services = () => {
  return (
    
    <div className="services">
      <Card img={S1} text="Gestion de l'ACRE" />
      <Card img={S2} text="Gestion de la TVA" />
      <Card img={S3} text="Calcul des cotisations" />
      <Card img={S4} text="Prélèvement libératoire" />
      <Card img={S5} text="Factures externes" />
      <Card img={S6} text="Plafonds CA & TVA" />
      <Card img={S7} text="Import de données" />
      <Card img={S8} text="Et plus à venir ..." />
    </div>
  );
};

export default services;
