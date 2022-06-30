import React from 'react';
import s from './startPage.module.scss'
import House from '../../img/viniHouse.png'

const StartPage: React.FC = () => {
    return (
        <div className={s.container}>
            <div className={s.gameField}>
                <img className={s.house} src={House} alt="" />
            </div>
        </div>
    );
};

export default StartPage;