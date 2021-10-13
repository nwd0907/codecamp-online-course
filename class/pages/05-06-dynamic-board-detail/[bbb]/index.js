import { useRouter } from "next/router"
import { useQuery, gql } from '@apollo/client'

const FETCH_BOARD = gql`
    query fetchBoard($number: Int){
        fetchBoard(number: $number){
            writer
            title
            contents
        }
    }
`

export default function DynamicBoardDetailPage(){
    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            number: Number(router.query.bbb)
        }
    })

    return (
        <>
            <div>{router.query.bbb}번 게시글 상세보기 페이지입니다!!!</div>
            <div>작성자: {data?.fetchBoard.writer}</div>
            <div>제목: {data?.fetchBoard.title}</div>
            <div>내용: {data?.fetchBoard.contents}</div>
        </>
    )

}