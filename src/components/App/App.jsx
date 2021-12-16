import {observer} from 'mobx-react-lite';
import Page from "../Page/Page";
import style from './App.module.css';
import Footer from "../Footer/Footer";
import React, {useContext, useEffect} from "react";
import {Context} from "../../index";
import Pagination from "../Pagination/Pagination";
import {ending} from "../../lib/ending";
import Header from "../Header/Header";

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
        <React.Fragment>
            <div className={style.wrapper}>
                <div className={style.container}>
                    <Header/>
                    <Page/>
                    <Pagination/>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    );
})

export default App;
