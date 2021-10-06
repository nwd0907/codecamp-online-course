import { useState } from 'react'

export default function CounterStatePage(){
    const [count, setCount] = useState(0)

    function aaa(){
        setCount(count + 1)
    }

    return (
        <>
            <div>{count}</div>
            <button onClick={aaa}>카운트 증가!!</button>
        </>
    )
}