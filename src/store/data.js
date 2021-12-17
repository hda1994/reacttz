import {makeAutoObservable} from "mobx";
import {data} from '../data/data.json';

export default class Data {
    constructor() {
        this._data = data.map((elem, index) => {
            elem.checked = false;
            elem.id = index;
            return elem
        });
        this._checkedType = true;
        this._itemsPerPage = 6;
        this._currentPage = 1;
        makeAutoObservable(this);
    }

    get checkedType() {
        return this._checkedType;
    }

    get lastPageIndex() {
        return this._currentPage * this._itemsPerPage;
    }

    get firstPageIndex() {
        return (this._currentPage - 1) * this._itemsPerPage;
    }

    get itemsPerPage() {
        return this._itemsPerPage;
    }

    get currentPage() {
        return this._currentPage;
    }

    get totalItems() {
        return this._data.length;
    }

    get data() {
        return this._data;
    }

    get currentData() {
        return this._data.slice(this.firstPageIndex, this.lastPageIndex);
    }

    setCurrentPage(number) {
        this._currentPage = number;
    }

    setData(data) {
        this._data = data;
    }

    getItem(id) {
        return this._data.find(elem => elem.id === id)
    }

    getCheckedCount() {
        return this._data.filter(elem => elem.checked).length;
    }

    removeItem(id) {
        this._data = this._data.filter(elem => elem.id !== id);
    }

    removeCheckedItems() {
        this._data = this._data.filter(elem => !elem.checked);
    }

    toggleCheckItem(id) {
        this._data = this._data.map(elem =>
            elem.id === id ? {...elem, checked: !elem.checked} : {...elem}
        )
    }

    toggleCheckAll() {
        if (this._checkedType) {
            this.checkedAll();
        } else {
            this.unCheckedAll();
        }
        this._checkedType = !this._checkedType;
    }

    unCheckedAll() {
        this._data = this._data.map(elem => {
                return {...elem, checked: false}
            }
        )
        this._checkedCount = 0;
    }

    checkedAll() {
        this._data = this._data.map(elem => {
                return {...elem, checked: true}
            }
        )
        this._checkedCount = this._data.length;
    }

}