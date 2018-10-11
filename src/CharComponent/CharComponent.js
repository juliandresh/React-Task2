import React from 'react'

const charComponent = (props) => {  
    const style = {
        display: 'inline-block',
        font: 300,   
        padding: '16px', 
        textAlign: 'center', 
        margin: '16px', 
        border: '1px solid black'
    }

    return (
        <div style={style}>
            <p onClick={props.click}>{props.character}</p>
        </div>
    );
}

export default charComponent;