import React from 'react';
import s from './redBottles.module.scss';
import red_bottles1_9 from '../../../img/red_bottles/1_9_red_bottle.png'
import red_bottles2_9 from '../../../img/red_bottles/2_9_red_bottle.png'
import red_bottles3_9 from '../../../img/red_bottles/3_9_red_bottle.png'
import red_bottles4_9 from '../../../img/red_bottles/4_9_red_bottle.png'
import red_bottles5_9 from '../../../img/red_bottles/5_9_red_bottle.png'
import red_bottles6_9 from '../../../img/red_bottles/6_9_red_bottle.png'
import red_bottles7_9 from '../../../img/red_bottles/7_9_red_bottle.png'
import red_bottles8_9 from '../../../img/red_bottles/8_9_red_bottle.png'
import red_bottles9_9 from '../../../img/red_bottles/9_9_red_bottle.png'
import bottles from '../../../img/red_bottles/bottles.png'

interface IRedBottlesProps {
    redBottlesCount: number
}

const RedBottles: React.FC<IRedBottlesProps> = ({redBottlesCount}) => {
    return (
        <div className={s.container}>
            {
                (() => {
                    switch (redBottlesCount) {
                        case 0:
                            return <img className={s.grapesImg} src={bottles} alt=""/>
                        case 1:
                            return <img className={s.grapesImg} src={red_bottles1_9} alt=""/>
                        case 2:
                            return <img className={s.grapesImg} src={red_bottles2_9} alt=""/>
                        case 3:
                            return <img className={s.grapesImg} src={red_bottles3_9} alt=""/>
                        case 4:
                            return <img className={s.grapesImg} src={red_bottles4_9} alt=""/>
                        case 5:
                            return <img className={s.grapesImg} src={red_bottles5_9} alt=""/>
                        case 6:
                            return <img className={s.grapesImg} src={red_bottles6_9} alt=""/>
                        case 7:
                            return <img className={s.grapesImg} src={red_bottles7_9} alt=""/>
                        case 8:
                            return <img className={s.grapesImg} src={red_bottles8_9} alt=""/>
                        case 9:
                            return <img className={s.grapesImg} src={red_bottles9_9} alt=""/>
                        default:
                            break
                    }
                })()
            }
        </div>
    );
};

export default RedBottles;