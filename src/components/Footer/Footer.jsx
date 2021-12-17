import {observer} from 'mobx-react-lite';
import style from './Footer.module.css';
import {Context} from "../../index";
import {useContext} from "react";
import {ending} from "../../lib/ending";
import Delete from "../Delete/Delete";

const Footer = observer(() => {
    const {data} = useContext(Context);
    const handleClick = () => {
        data.removeCheckedItems();
    }
    return (
        <footer className={style.footer}>
            <div className={style.wrapper}>
                <div>{`${data.getCheckedCount()} ${ending(data.getCheckedCount())} выбрано`}</div>
                <Delete onClick={handleClick}/>
                <div>Для отмены нажмите Esc</div>
            </div>
        </footer>
    );
})

export default Footer;
