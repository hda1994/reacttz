import {observer} from 'mobx-react-lite';
import style from './Card.module.css';
import {Context} from "../../index";
import {useContext} from "react";
import Checkbox from "../Checkbox/Checkbox";
import Delete from "../Delete/Delete";
import {ReactComponent as ViewSVG} from '../../assets/svg/view.svg';

const Card = observer(({name, sampleUrl, height, width, onClick, checked, id}) => {
    const {data} = useContext(Context);
    const handleDelete = () => {
        data.removeItem(id);
    }

    return (
        <div className={style.wrapper}>
            <div className={style.imgWrapper}>
                <img className={style.img} src={sampleUrl} alt={name}/>
                <div className={`${style.imgFrontground} ${checked ? style.check : ''}`}>
                    <Checkbox className={style.check} checked={checked} id={id}/>
                    <Delete onClick={handleDelete} className={style.delete} color={'#ffffff'}/>
                    <div className={style.view}>
                        <ViewSVG fill={'#ffffff'} style={{height: '24px', width: '24px'}}/>
                    </div>
                </div>
            </div>
            <div className={style.name}>{name}</div>
        </div>
    );
})

export default Card;