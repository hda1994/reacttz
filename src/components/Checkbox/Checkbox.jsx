import {observer} from 'mobx-react-lite';
import style from './Checkbox.module.css';
import {Context} from "../../index";
import {useContext} from "react";

const Checkbox = observer(({id, checked, className}) => {
    const {data} = useContext(Context);
    const handleChange = () => {
        data.toggleCheckItem(id);
    }

    return (
        <div className={className}>
            <label
                className={[
                    style.container,
                    `${checked ? style.checked : ''}`
                ].join(' ')}>
                <input type="checkbox" className={style.input} checked={checked} onChange={handleChange}/>
                <span className={style.checkmark}/>
            </label>
        </div>
    );
});

export default Checkbox;
