import {observer} from 'mobx-react-lite';
import {useContext} from "react";
import {Context} from "../../index";
import Card from "../Card/Card";
import style from './Page.module.css'

const Page = observer(() => {
    const {data} = useContext(Context);

    return (
        <div className={style.wrapper}>
            <div>{data.getTotalCount()}</div>

            <div className={style.container}>
                {data.data.map((elem, index) =>
                    <Card
                        // onClick={() => data.removeItem(index)}
                        key={elem.id}
                        {...elem}
                        sampleUrl={elem.sample_url}/>)}
            </div>
        </div>
    );
})

export default Page;

