import React from 'react';

const Divider = ({width}) => {
    return (
        <div
            style={{
                width: width,
                height: '1px',
                backgroundColor: '#ccc',
                margin: '20px 0',
            }}
        >

        </div>
    );
};

export default Divider;