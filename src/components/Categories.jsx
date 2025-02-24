import { useContext } from 'react';
import './Categories.css';
import { Link } from 'react-router-dom';
import { datacontext } from '../context/UserContext';

function Categories(props) {
    let {dark} = useContext(datacontext);
    return (
        <div className={`cbox ${dark ? 'dark-cbox' : ''}`}>
            <Link to={props.link} className='cname'>{props.title}</Link>
        </div>
    );
}

export default Categories;