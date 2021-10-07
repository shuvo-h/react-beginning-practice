import React from 'react';
import Parent from '../Parent/Parent';
import Uncle from '../Uncle/Uncle';

const GrandParent = (props) => {
    const {house} = props;
    return (
        <div >
            <h2>Grandparent</h2>
            <p>House: {house}</p>
            <Parent house={house}></Parent>
            <Uncle house={house}></Uncle>
        </div>
    );
};

export default GrandParent;