import {observer} from 'mobx-react-lite';
import Page from "../Page/Page";
import style from './App.module.css';
import Footer from "../Footer/Footer";
import {useContext, useEffect} from "react";
import {Context} from "../../index";
import Pagination from "../Pagination/Pagination";

const App = observer(() => {
    const {data} = useContext(Context);
    const escFunction = event => {
        if (event.keyCode === 27) {
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
            <Pagination/>
            <Footer/>
        </div>
    );
})

export default App;
