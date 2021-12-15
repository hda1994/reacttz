import {observer} from 'mobx-react-lite';
import style from './Checkbox.module.css';
import {Context} from "../../index";
import {useContext, useState} from "react";

const Checkbox = observer(({id, checked}) => {
    const {data} = useContext(Context);
    // const [check, setCheck] = useState(checked);
    const handleChange = () => {
        data.toggleCheckItem(id);
    }
    return (
        <input type="checkbox" value={data.getItem(id).checked} onChange={handleChange}/>
    );
})

export default Checkbox;
