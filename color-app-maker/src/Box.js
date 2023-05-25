import React from 'react';
const Box = ({id, width = 6, height = 6, backgroundColor= "red", handleRemove}) => {
    const remove = () => handleRemove(id);
    return (
        <div>
            <div style = {{
                width: `${width}em`,
                height: `${height}em`,
                backgroundColor: `${backgroundColor}`
            }}>
            </div>
            <button onClick ={remove}>X</button>
        </div>
    );
}
export default Box;