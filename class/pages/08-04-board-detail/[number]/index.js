// 상세보기 페이지 (몇 번째 글? number 에 저장)
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

export default function BoardDetailPage(){
    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            number: Number(router.query.number)
        }
    })

    function oniClickMoveToEdit(){
        router.push(`/08-04-board-detail/${router.query.number}/edit`)
    }

    return (
        <>
            <div>{router.query.number}번 게시글 상세보기 페이지입니다!!!</div>
            <div>작성자: {data?.fetchBoard.writer}</div>
            <div>제목: {data?.fetchBoard.title}</div>
            <div>내용: {data?.fetchBoard.contents}</div>
            <button onClick={oniClickMoveToEdit}>수정 페이지로 이동하기!!</button>
        </>
    )

}