import React from 'react';
import defImg from '../images/room-1.jpeg'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Room = (props) => {
    const {name, slug, price, images} = props;
    //let slug = 342345;
    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0]||defImg} alt="img"/>
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per-night</p>
                </div>
                <Link to={`/rooms/${slug}`} className='btn-primary room-link'>Feature</Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    );
}

Room.propTypes={
    name:PropTypes.string.isRequired,
    price: PropTypes.number,
    slug:PropTypes.string.isRequired,
    images:PropTypes.arrayOf(PropTypes.string).isRequired
}
 
export default Room;