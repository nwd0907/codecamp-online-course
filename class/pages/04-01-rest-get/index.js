import axios from 'axios'
import {useState} from 'react'

export default function RestGetPage(){
    const [myTitle, setMyTitle] = useState("")

    async function onClickRestApi(){
        const result = await axios.get('https://koreanjson.com/posts/1')
        console.log(result)
        console.log(result.data.title)
        setMyTitle(result.data.title)
    }

    return (
        <>
            <div>rest 요청 페이지</div>
            <div>결과: {myTitle}</div>
            <button onClick={onClickRestApi}>API요청하기</button>
        </>
    )
}