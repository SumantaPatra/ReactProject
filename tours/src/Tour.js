import React, { useState } from 'react';

const Tour = ({ id, name, image, price, info, removeTour }) => {
    const [Readmore, setReadmore] = useState(false);
    return <article className="single-tour">
        <img src={image} alt={name} />
        <footer>
            <div className="tour-info">
                <h4>{name}</h4>
                <h4 className="tour-price">${price}</h4>
            </div>
            <p>{Readmore ? info : `${info.substring(0, 200)}...`}</p>
            <button onClick={() => setReadmore(!Readmore)}>{Readmore ? 'show less' : 'show more'}</button>
            <button className='delete-btn' onClick={() => removeTour(id)}>Not Interested</button>
        </footer>
    </article>
};

export default Tour;