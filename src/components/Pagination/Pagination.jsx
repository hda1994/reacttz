import {observer} from 'mobx-react-lite';
import style from './Pagination.module.css';
import {Context} from "../../index";
import {useContext} from "react";

const Pagination = observer(() => {
    const {data} = useContext(Context);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.totalItems / data.itemsPerPage); i++) {
        pageNumbers.push(i);
    }
    const prevPage = () => {
        if (data.currentPage === 1 || data.data.length === 0) {
            return null;
        }
        return (
            <li className={style.arrow}>
                <a href="#" onClick={(e) => {
                    e.preventDefault();
                    data.setCurrentPage(data.currentPage - 1);
                }}>{'<prev'}</a>
            </li>)
    }
    const nextPage = () => {
        if (data.currentPage === Math.ceil(data.totalItems / data.itemsPerPage || data.data.length === 0)) {
            return null;
        }
        return (
            <li className={style.arrow}>
                <a href="#" onClick={(e) => {
                    e.preventDefault();
                    data.setCurrentPage(data.currentPage + 1);
                }}>{'next>'}</a>
            </li>)
    }

    return (
        <ul className={style.wrapper}>
            {prevPage()}
            {pageNumbers.map(number =>
                <li className={`${style.number} ${number === data.currentPage ? style.active : ''}`}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#"
                       onClick={(e) => {
                           e.preventDefault();
                           data.setCurrentPage(number);
                       }}>{number}</a>
                </li>
            )}
            {nextPage()}
        </ul>
    );
})

export default Pagination;
