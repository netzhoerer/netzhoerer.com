import React from 'react';
import CSSModules from 'react-css-modules';
import TextDecoration from 'Components/TextDecoration';
import Pass from 'Components/Pass';
import { Output, Input, CaseChanger } from 'Tools/Output';
import styles from './app.scss';


const App = () => (
  <div style={{ textAlign: 'center' }}>
    <h1 styleName='blue'>Hello World 5</h1>
    <p>
      <TextDecoration
        content='die ist der eis baum'
      />
      <Pass content='content' pass='pass ->' />
    </p>
    <div>{Output()}</div>
    <div>{Input('Loremo')}</div>
    <div>{new CaseChanger('lowerCASE').output()}</div>
  </div>);

export default CSSModules(App, styles);
