import React from 'react';

const Sibling = (props) => {
    const {house} = props;
    return (
        <div>
            <p>Sibling</p>
            <p>house: {house}</p>
        </div>
    );
};

export default Sibling;