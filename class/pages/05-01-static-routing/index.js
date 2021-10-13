import {useRouter} from 'next/router'

export default function StaticRoutingPage(){
    const router = useRouter()

    function onClickRoutingPage(){
        // 페이지 이동하기!!!
        router.push('/05-02-static-routed')
    }

    return (
        <>
            <div>페이지 이동하기</div>
            <button onClick={onClickRoutingPage}>페이지 이동!!</button>
        </>
    )

}