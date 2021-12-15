import {observer} from 'mobx-react-lite';
import {useContext} from "react";
import {Context} from "../../index";
import Card from "../Card/Card";
import style from './Page.module.css'
import {ending} from "../../lib/ending";

const Page = observer(() => {
    const {data} = useContext(Context);

    return (
        <div className={style.wrapper}>
            <div>{`${data.getTotalCount()} ${ending(data.getTotalCount())}`}</div>

            <div className={style.container}>
                {data.data.map((elem, index) =>
                    <Card
                        {...elem}
                        key={elem.id}
                        sampleUrl={elem.sample_url}/>)}
            </div>
        </div>
    );
})

export default Page;

