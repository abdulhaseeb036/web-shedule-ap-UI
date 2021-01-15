import React from "react";
import "./styles/App.css";
import Header from './components/header/header';
import Subheader from './components/subheader/subheader';
import Maincal from './components/maincalander/maincalender';
import Calaenderfoot from './components/calaender-foot/calaenderfoot'
import Undercal from './components/undercal/undercal'
function App() {
  return (
   <div className="container">
   <Header />
   <Subheader />
   <Maincal />
   <Calaenderfoot />
   <Undercal />
    </div>
  );
}

export default App;
