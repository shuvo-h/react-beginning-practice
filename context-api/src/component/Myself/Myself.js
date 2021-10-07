import React from 'react';
import Special from '../Special/Special';

const Myself = (props) => {
    const {house} = props;
    return (
        <div>
            <p>Myself</p>
            <p>house: {house}</p>
            <Special house={house}></Special>
        </div>
    );
};

export default Myself;