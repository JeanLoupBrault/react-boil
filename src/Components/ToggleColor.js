import React, { useState } from 'react';
import styled from 'styled-components';


function ToggleColor() {
    const blue = 'blue';
    const red = 'red';
    const [color, setColor] = useState(blue);


    return (
        <div>
            <button style={{ background: color }}>
                {color}
            </button>
            <h1 onClick={() => setColor('red')}>
                Click to change button color
        </h1>
        </div>
    );
}


// const Button = styled.button`
// background: blue;
// color: white;
// width: 100px;
// height: 60px;
// `;


export default ToggleColor