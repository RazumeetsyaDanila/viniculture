import React from 'react';
import s from './whiteBottles.module.scss'
import white_bottles1_9 from '../../../img/white_bottles/1_9_white_bottle.png'
import white_bottles2_9 from '../../../img/white_bottles/2_9_white_bottle.png'
import white_bottles3_9 from '../../../img/white_bottles/3_9_white_bottle.png'
import white_bottles4_9 from '../../../img/white_bottles/4_9_white_bottle.png'
import white_bottles5_9 from '../../../img/white_bottles/5_9_white_bottle.png'
import white_bottles6_9 from '../../../img/white_bottles/6_9_white_bottle.png'
import white_bottles7_9 from '../../../img/white_bottles/7_9_white_bottle.png'
import white_bottles8_9 from '../../../img/white_bottles/8_9_white_bottle.png'
import white_bottles9_9 from '../../../img/white_bottles/9_9_white_bottle.png'
import bottles from '../../../img/white_bottles/bottles.png'

interface IWhiteBottlesProps {
    whiteBottlesCount: number
}

const WhiteBottles: React.FC<IWhiteBottlesProps> = ({whiteBottlesCount}) => {
    return (
        <div className={s.container}>
            {
                (() => {
                    switch (whiteBottlesCount) {
                        case 0:
                            return <img className={s.grapesImg} src={bottles} alt=""/>
                        case 1:
                            return <img className={s.grapesImg} src={white_bottles1_9} alt=""/>
                        case 2:
                            return <img className={s.grapesImg} src={white_bottles2_9} alt=""/>
                        case 3:
                            return <img className={s.grapesImg} src={white_bottles3_9} alt=""/>
                        case 4:
                            return <img className={s.grapesImg} src={white_bottles4_9} alt=""/>
                        case 5:
                            return <img className={s.grapesImg} src={white_bottles5_9} alt=""/>
                        case 6:
                            return <img className={s.grapesImg} src={white_bottles6_9} alt=""/>
                        case 7:
                            return <img className={s.grapesImg} src={white_bottles7_9} alt=""/>
                        case 8:
                            return <img className={s.grapesImg} src={white_bottles8_9} alt=""/>
                        case 9:
                            return <img className={s.grapesImg} src={white_bottles9_9} alt=""/>
                        default:
                            break
                    }
                })()
            }
        </div>
    );
};

export default WhiteBottles;