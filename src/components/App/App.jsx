import {observer} from 'mobx-react-lite';
import Page from "../Page/Page";
import style from './App.module.css';
import Footer from "../Footer/Footer";
import {useContext, useEffect} from "react";
import {Context} from "../../index";

const App = observer(() => {
    const {data} = useContext(Context);
    const escFunction = event => {
        if(event.keyCode === 27) {
            //Do whatever when esc is pressed
            data.unCheckedAll();
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);

        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, []);

    return (
        <div className={style.wrapper}>
            <Page/>
            <Footer/>
        </div>
    );
})

export default App;
