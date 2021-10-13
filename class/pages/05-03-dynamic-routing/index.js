import {useRouter} from 'next/router'

export default function DynamicRoutingPage(){
    const router = useRouter()

    function onClickMove1(){
        router.push('/05-04-dynamic-routed/1')
    }

    function onClickMove17(){
        router.push('/05-04-dynamic-routed/17')
    }

    function onClickMove158(){
        router.push('/05-04-dynamic-routed/158')
    }

    function onClickMove356(){
        router.push('/05-04-dynamic-routed/356')
    }

    return (
        <>
            <button onClick={onClickMove1}>1번 글로 이동하기</button>
            <button onClick={onClickMove17}>17번 글로 이동하기</button>
            <button onClick={onClickMove158}>158번 글로 이동하기</button>
            <button onClick={onClickMove356}>356번 글로 이동하기</button>
        </>
    )
}