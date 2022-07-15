import s from './whiteGrapes.module.scss'
import white_grape1_9 from '../../../img/white_grapes/1_9white_grape.png'
import white_grape2_9 from '../../../img/white_grapes/2_9white_grape.png'
import white_grape3_9 from '../../../img/white_grapes/3_9white_grape.png'
import white_grape4_9 from '../../../img/white_grapes/4_9white_grape.png'
import white_grape5_9 from '../../../img/white_grapes/5_9white_grape.png'
import white_grape6_9 from '../../../img/white_grapes/6_9white_grape.png'
import white_grape7_9 from '../../../img/white_grapes/7_9white_grape.png'
import white_grape8_9 from '../../../img/white_grapes/8_9white_grape.png'
import white_grape9_9 from '../../../img/white_grapes/9_9white_grape.png'
import grapes from '../../../img/white_grapes/grapes.png'

interface IWhiteGrapesProps {
    whiteGrapesCount: number
}

const WhiteGrapes: React.FC<IWhiteGrapesProps> = ({whiteGrapesCount}) => {
    return (
        <div className={s.container}>
            {
                (() => {
                    switch (whiteGrapesCount) {
                        case 0:
                            return <img className={s.grapesImg} src={grapes} alt=""/>
                        case 1:
                            return <img className={s.grapesImg} src={white_grape1_9} alt=""/>
                        case 2:
                            return <img className={s.grapesImg} src={white_grape2_9} alt=""/>
                        case 3:
                            return <img className={s.grapesImg} src={white_grape3_9} alt=""/>
                        case 4:
                            return <img className={s.grapesImg} src={white_grape4_9} alt=""/>
                        case 5:
                            return <img className={s.grapesImg} src={white_grape5_9} alt=""/>
                        case 6:
                            return <img className={s.grapesImg} src={white_grape6_9} alt=""/>
                        case 7:
                            return <img className={s.grapesImg} src={white_grape7_9} alt=""/>
                        case 8:
                            return <img className={s.grapesImg} src={white_grape8_9} alt=""/>
                        case 9:
                            return <img className={s.grapesImg} src={white_grape9_9} alt=""/>
                        default:
                            break
                    }
                })()
            }
        </div>
    );
};

export default WhiteGrapes;