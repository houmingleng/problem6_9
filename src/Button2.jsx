import React from 'react';

const Button = (props) => {
    return (
        <div className='but' onClick={props.click}>
           { props.value}
        </div>
    );
}

export default Button;
