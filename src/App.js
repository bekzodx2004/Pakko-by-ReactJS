import "./App.css";

import Header from "./Components/header/header";
import Top from "./Components/top/top";
import Analyzes from "./Components/Analyzes/analyzes";
import Services from "./Components/services/services";

import Tarifs from "./Components/tarifs/tarifs";

import Users from "./Components/users/users";
import Subscribe from "./Components/subscribe/subscribe";

function App() {
  return (
    <div className="App">
      <Header />
      <Top />
      <Analyzes />

      <h2 className="services_header">Pensé pour les micro-entrepreneurs</h2>
      <Services />

      <h2 className="tarifs__header">
        Des tarifs qui s'adaptent à votre activité !
      </h2>

      <Tarifs />
      <Users />
      <Subscribe />
    </div>
  );
}

export default App;
