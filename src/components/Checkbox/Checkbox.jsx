import {observer} from 'mobx-react-lite';
import style from './Checkbox.module.css';
import {Context} from "../../index";
import {useContext} from "react";

const Checkbox = observer(({id, checked}) => {
    const {data} = useContext(Context);
    const handleChange = () => {
        data.toggleCheckItem(id);
    }
    return (
        <input type="checkbox" checked={checked} onChange={handleChange}/>
    );
})

export default Checkbox;
