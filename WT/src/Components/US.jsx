import { useEffect, useState } from "react";

const Lab = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(count);
    }, [count])
    return (
        <>
            <button onClick={() => {
                setCount(count + 4)
            }}>Increment</button>
            <button onClick={() => {
                setCount(count - 1)
            }}>Decrement</button>
            <h1>{count}</h1>
        </>
    )
}
export default Lab;