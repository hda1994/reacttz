import {observer} from 'mobx-react-lite';
// import {useContext} from "react";
// import {Context} from "./index";
import style from './Card.module.css';
import {Context} from "../../index";
import {useContext} from "react";
import Checkbox from "../Checkbox/Checkbox";

const Card = observer(({name, sampleUrl, height, width, onClick, checked, id}) => {
    const {data} = useContext(Context);
    const handleDelete = () => {
      data.removeItem(id);
    }

    return (
        <div className={style.wrapper}>
            <div className={style.imgWrapper}>
                <img className={style.img} src={sampleUrl} alt={name}/>
                <div className={`${style.imgFrontground} ${checked? style.check:''}`}>
                    <Checkbox className={style.check} checked={checked} id={id}/>
                    <div className={style.delete} onClick={handleDelete}>Delete</div>
                    <div className={style.view}>{checked ? 'da' : 'net'}</div>
                </div>
            </div>
            <div className={style.name}>{name}  {id}</div>

        </div>
    );
})

export default Card;
