import {makeAutoObservable} from "mobx";
import {data} from '../data/data.json';

export default class Data {
    constructor() {
        this._data = data.map((elem, index) => {
            elem.checked = false;
            elem.id = index;
            return elem
        });
        makeAutoObservable(this);
    }

    setData(data) {
        this._data = data;
    }

    get data() {
        return this._data;
    }

    getItem(id) {
        return this._data.filter(elem => elem.id === id)[0]
    }

    getTotalCount() {
        return this._data.length;
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

    unCheckedAll() {
        this._data = this._data.map(elem => {
                return {...elem, checked: false}
            }
        )
    }

}