import React from 'react';
import House from '../../components/gameField/House/House';
import s from './gamePage.module.scss'
import CardTest from '../../components/cards/purple/cardTest/CardTest';
import Card401 from '../../components/cards/blue/Card401/Card401';
import RedGrapes from '../../components/gameField/RedGrapes/RedGrapes';
import WhiteGrapes from '../../components/gameField/WhiteGrapes/WhiteGrapes';
import RedBottles from '../../components/gameField/RedBottles/RedBottles';
import WhiteBottles from '../../components/gameField/WhiteBottles/WhiteBottles';

const GamePage: React.FC = () => {
    return (
        <div className={s.container}>
            <div className={s.gameField}>
                <House surface5={5} surface6={5} surface7={7} />
                {/* <CardTest/> */}
                {/* <Card401/> */}
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>
                    <RedGrapes redGrapesCount={4} />
                    <WhiteGrapes whiteGrapesCount={1} />
                    <RedBottles redBottlesCount={2}/>
                    <WhiteBottles whiteBottlesCount={4}/> 
                </div>
            </div>
        </div>
    );
};

export default GamePage;