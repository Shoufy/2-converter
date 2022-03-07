// == Import npm
import React from 'react';

//import composants
import Header from '../Header';
import Amount from '../Amount';
import Currencies from '../Currencies';

// == Import
// import './_app.scss';
import 'src/styles/index.scss';


// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Currencies />
    <Amount />

  </div>
);

// == Export
export default App;
