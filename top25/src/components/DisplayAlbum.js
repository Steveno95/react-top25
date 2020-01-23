import React from 'react';
import './Album.css';

import Display from './Display';

const DisplayChar = props => {
    return (
        <div className="container">
            {props.top_25.map(albums => {
                return (
                <Display
                    key={albums.name}
                    albums={albums}
                />
                );
            })}
        </div>
    );
}

export default DisplayChar;