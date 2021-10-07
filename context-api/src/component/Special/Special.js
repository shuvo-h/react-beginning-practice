import React, { useContext } from 'react';
import { NeclessContext } from '../../App';

const Special = () => {
    const surprise = useContext(NeclessContext)
    return (
        <div>
            <p>Special </p>
            <p>Gift: {surprise}</p>
        </div>
    );
};

export default Special;