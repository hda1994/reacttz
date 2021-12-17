import style from './Delete.module.css';
import {ReactComponent as TrashSVG} from '../../assets/svg/delete.svg';

const Delete = ({onClick, height = '24px', width = '24px', color = '#000000', className = ''}) => {

    return (
        <div onClick={onClick} className={`${style.delete} ${className}`}>
            <TrashSVG style={{height: height, width: width}} fill={color}/>
        </div>
    );
};

export default Delete;