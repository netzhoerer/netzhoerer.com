import React from 'react';
import TextDecoration from 'TextDecoration';
import { Output, Input, CaseChanger } from 'Output';


const App = () => (
  <div style={{ textAlign: 'center' }}>
    <h1>Hello World 5</h1>
    <p>
      <TextDecoration
        content="die ist der eis baum"
      />
    </p>
    <div>{Output()}</div>
    <div>{Input('Loremo')}</div>
    <div>{new CaseChanger('lowerCASE').output()}</div>
  </div>);

export default App;
