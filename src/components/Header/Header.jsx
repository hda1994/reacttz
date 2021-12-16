import {observer} from 'mobx-react-lite';
import style from './Header.module.css';
import {Context} from "../../index";
import {useContext} from "react";
import {ending} from "../../lib/ending";

const Header = observer(({id, checked}) => {
    const {data} = useContext(Context);
    return (
        <header className={style.header}>
            <div>{`${data.totalItems} ${ending(data.totalItems)}`}</div>
        </header>

    );
})

export default Header;
