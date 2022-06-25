import React from 'react';
import './app.scss';
import s from './app.module.scss'
import House from './img/vinihHouse.png'

const App: React.FC = () => {
  return (
    <div className={s.container}>
      <div className={s.gameField}>
        <img className={s.house} src={House} alt="" />
      </div>
    </div>
  );
}

export default App;
