import React from 'react';
import s from './redGrapes.module.scss'
import red_grape1_9 from '../../../img/red_grapes/1_9red_grape.png'
import red_grape2_9 from '../../../img/red_grapes/2_9red_grape.png'
import red_grape3_9 from '../../../img/red_grapes/3_9red_grape.png'
import red_grape4_9 from '../../../img/red_grapes/4_9red_grape.png'
import red_grape5_9 from '../../../img/red_grapes/5_9red_grape.png'
import red_grape6_9 from '../../../img/red_grapes/6_9red_grape.png'
import red_grape7_9 from '../../../img/red_grapes/7_9red_grape.png'
import red_grape8_9 from '../../../img/red_grapes/8_9red_grape.png'
import red_grape9_9 from '../../../img/red_grapes/9_9red_grape.png'
import grapes from '../../../img/red_grapes/grapes.png'

interface IRedGrapesProps {
    redGrapesCount: number
}

const RedGrapes: React.FC<IRedGrapesProps> = ({ redGrapesCount }) => {
    return (
        <div className={s.container}>
            {
                (() => {
                    switch (redGrapesCount) {
                        case 0:
                            return <img className={s.grapesImg} src={grapes} alt=""/>
                        case 1:
                            return <img className={s.grapesImg} src={red_grape1_9} alt=""/>
                        case 2:
                            return <img className={s.grapesImg} src={red_grape2_9} alt=""/>
                        case 3:
                            return <img className={s.grapesImg} src={red_grape3_9} alt=""/>
                        case 4:
                            return <img className={s.grapesImg} src={red_grape4_9} alt=""/>
                        case 5:
                            return <img className={s.grapesImg} src={red_grape5_9} alt=""/>
                        case 6:
                            return <img className={s.grapesImg} src={red_grape6_9} alt=""/>
                        case 7:
                            return <img className={s.grapesImg} src={red_grape7_9} alt=""/>
                        case 8:
                            return <img className={s.grapesImg} src={red_grape8_9} alt=""/>
                        case 9:
                            return <img className={s.grapesImg} src={red_grape9_9} alt=""/>
                        default:
                            break
                    }
                })()
            }
        </div>
    );
};

export default RedGrapes;