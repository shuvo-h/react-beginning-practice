import React from 'react';

const Uncle = (props) => {
    const {house} = props;
    return (
        <div>
            <p>Uncle</p>
            <p>house: {house}</p>
        </div>
    );
};

export default Uncle;