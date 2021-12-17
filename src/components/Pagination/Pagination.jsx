import {observer} from 'mobx-react-lite';
import style from './Pagination.module.css';
import {Context} from "../../index";
import {useContext} from "react";
import {ReactComponent as ArrowSVG} from '../../assets/svg/right-arrow.svg';

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
                <a href="/" onClick={(e) => {
                    e.preventDefault();
                    data.setCurrentPage(data.currentPage - 1);
                }}>
                    <ArrowSVG fill={'#3c3c3c'}
                              style={{height: '24px', width: '24px', transform: 'rotate(180deg)'}}/>
                </a>
            </li>)
    }
    const nextPage = () => {
        if (data.currentPage === Math.ceil(data.totalItems / data.itemsPerPage) || data.data.length === 0) {
            return null;
        }
        return (
            <li className={style.arrow}>
                <a href="/" onClick={(e) => {
                    e.preventDefault();
                    data.setCurrentPage(data.currentPage + 1);
                }}>
                    <ArrowSVG fill={'#3c3c3c'}
                              style={{height: '24px', width: '24px'}}/>
                </a>
            </li>)
    }

    return (
        <ul className={style.wrapper}>
            {prevPage()}
            {pageNumbers.filter(num => num === 1
                || Math.abs(num - data.currentPage) <= 4
                || num === Math.ceil(data.totalItems / data.itemsPerPage))
                .map(number =>
                    <li key={number}
                        className={`${style.number} ${number === data.currentPage ? style.active : ''}`}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="/"
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