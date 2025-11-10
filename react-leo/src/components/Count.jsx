import { useState } from 'react'



function Count() {
    const [count, setCount] = useState(0)

    

    return (
        <>
        <p>Count is: {count}</p>
        <button onClick={ () => setCount(count + 1)}></button>
        </>
    )
}


export default Count