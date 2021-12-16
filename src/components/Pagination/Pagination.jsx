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
        if (data.currentPage === 1) {
            return null;
        }
        return (
            <a href="#" onClick={(e) => {
                e.preventDefault();
                data.setCurrentPage(data.currentPage - 1);
            }}>{'<prev'}</a>)
    }
    const nextPage = () => {
        if (data.currentPage === Math.ceil(data.totalItems / data.itemsPerPage)) {
            return null;
        }
        return (
            <a href="#" onClick={(e) => {
                e.preventDefault();
                data.setCurrentPage(data.currentPage + 1);
            }}>{'next>'}</a>)
    }

    return (
        <nav>
            <ul>
                <li>{prevPage()}</li>
                {pageNumbers.map(number =>
                    <li>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#"
                           onClick={(e) => {
                               e.preventDefault();
                               data.setCurrentPage(number);
                           }}>{number}</a>
                    </li>
                )}
                <li>{nextPage()}</li>
            </ul>
        </nav>
    );
})

export default Pagination;
