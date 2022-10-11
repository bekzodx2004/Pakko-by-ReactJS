import React from "react";
import "./users.scss";

import User from "./user/user";

import U1 from "../images/user1.png";
import U2 from "../images/user2.png";
import U3 from "../images/user3.png";
import U4 from "../images/user4.png";
import U5 from "../images/user5.png";
import U6 from "../images/user6.png";
import U7 from "../images/user7.png";
import U8 from "../images/user8.png";
import U9 from "../images/user9.png";
const users = () => {
  return (
    <div className="users">
      <h2>Ils en parlent mieux que nous</h2>

      <User
        avatar={U1}
        name="Antony Legrand"
        username="@Wisibility"
        a="Voir le post"
        text="Merci pour toutes vos réponses concernant un bon service de facturation / suivi de CA pour les Free… Je crois qu'avec @Pakko_app j'ai trouvé ce que je cherche. Simple et efficace."
      />
      <User
        avatar={U2}
        name="Retour utilisateur"
        username="Formulaire de feedback"
        a=""
        text="Un onboarding clair et vraiment bien pensé. +10 pour les liens vers le site de l’URSSAF lors de l’inscription."
      />
      <User
        avatar={U3}
        name="Retour utilisateur"
        username="Formulaire de feedback"
        a=""
        text="J’aime beaucoup voir en un clin d’oeil ce que j’ai encaissé mais surtout ce qui reste dans ma poche après les cotisations."
      />
      <User
        avatar={U4}
        name="mood"
        username="@maudrchl"
        a="Voir le post"
        text="Je viens de commencer à utiliser Pakko pour mes projets freelance. Je ne peux que le recommander. Le produit est très bien pensé 👏"
      />
      <User
        avatar={U5}
        name="Retour utilisateur"
        username="Formulaire de feedback"
        a=""
        text="C’est exactement ce que je cherchais."
      />
      <User
        avatar={U6}
        name="Matthieu Teyssandier"
        username="@m_teyssandier"
        a="Voir le post"
        text="@Pakko_app Best service de CA !"
      />
      <User
        avatar={U7}
        name="Retour utilisateur"
        username="Formulaire de feedbackz"
        a=""
        text="Le service a l’air super ça faisait longtemps que je cherchais un dashboard aussi clean que le votre ! Ça donne envie de l'utiliser !"
      />
      <User
        avatar={U8}
        name="Maxine Ficheux"
        username="@Maxine_fi"
        a="Voir le post"
        text="Je n'utilise plus que ça ! C'est super simple, assez joli et abordable, le top quoi !"
      />
      <User
        avatar={U9}
        name="Retour utilisateur"
        username="Formulaire de feedback"
        a=""
        text="Trop bien de pouvoir demandé un acompte ou le solde !!!!"
      />
    </div>
  );
};

export default users;
