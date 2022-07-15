import HouseImg from '../../../img/viniHouse.png'
import Harvest80 from '../../../img/harvest_wine_80.png'
import FullHarvest80 from '../../../img/full_harvest_wine_80.png'
import Harvest95 from '../../../img/harvest_wine_95.png'
import FullHarvest95 from '../../../img/full_harvest_wine_95.png'
import Harvest105 from '../../../img/harvest_wine_105.png'
import FullHarvest105 from '../../../img/full_harvest_wine_105.png'
import s from './house.module.scss'

interface IHouseProps {
    surface5: number,
    surface6: number,
    surface7: number
}

const House: React.FC<IHouseProps> = ({surface5, surface6, surface7}) => {
    return (
        <div className={s.container}>
            <img className={s.house} src={HouseImg} alt="" />
            {
                surface7 === 7 ? 
                <img className={s.harvest80} src={FullHarvest80} alt="" />
                :
                <img className={s.harvest80} src={Harvest80} alt="" />
            }
            <div className={s.harvest80label}>{surface7}/7</div>
            {
                surface5 === 5 ?
                <img className={s.harvest95} src={FullHarvest95} alt="" />
                :
                <img className={s.harvest95} src={Harvest95} alt="" />
            }            
            <div className={s.harvest95label}>{surface5}/5</div>

            {
                surface6 === 6 ?
                <img className={s.harvest105} src={FullHarvest105} alt="" />
                :
                <img className={s.harvest105} src={Harvest105} alt="" />
            }            
            <div className={s.harvest105label}>{surface6}/6</div>
        </div>
    );
};

export default House;