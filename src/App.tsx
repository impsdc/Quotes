import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import LoadQuery from './components/LoadQuery';

const lol = LoadQuery();
console.log(lol);
const App = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
    </React.Fragment>
  );
};

export default App;
