import { useRouter } from "next/router"

export default function DynamicRoutedPage(){
    const router = useRouter()

    return (
        <div>{router.query.aaa}번 게시글 입니다!!!</div>
    )
}