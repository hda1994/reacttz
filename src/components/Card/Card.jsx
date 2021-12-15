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
                    <div>{checked ? 'da' : 'net'}</div>
                    <div>{id}</div>
                    <div onClick={handleDelete}>Delete</div>
                    <Checkbox checked={checked} id={id}/>
                </div>
            </div>
            <div className={style.name}>{name}</div>

        </div>
    );
})

export default Card;
