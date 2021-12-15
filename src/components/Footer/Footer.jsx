import {observer} from 'mobx-react-lite';
import style from './Footer.module.css';
import {Context} from "../../index";
import {useContext} from "react";

const Footer = observer(({id, checked}) => {
    const {data} = useContext(Context);
    const handleChange = () => {
        data.toggleCheckItem(id);
    }
    const handleClick = () => {
        data.removeCheckedItems();
    }
    return (
        <footer className={style.footer}>
            <div className={style.wrapper}>
                <div>{data.getCheckedCount()} изображение выбрано</div>
                <div onClick={handleClick}>Delete Checked</div>
                <div>Для отмены нажмите Esc</div>
            </div>
        </footer>
    );
})

export default Footer;
