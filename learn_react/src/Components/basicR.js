import React from 'react';

// export default function basic()
// {
//     return <h1>Hello World!!</h1>
// }

const Basic = (props) =>
{
console.log(props);
return (
    <div>
        <h1>Hello {props.name}</h1>
        {props.children}
    </div>
    );

} 

export default Basic;