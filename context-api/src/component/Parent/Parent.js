import React from 'react';
import Myself from '../Myself/Myself';
import Sibling from '../Sibling/Sibling';

const Parent = (props) => {
    const {house} = props;
    return (
        <div>
            <p>Parent</p>
            <Myself house={house}></Myself>
            <Sibling house={house}></Sibling>
        </div>
    );
};

export default Parent;