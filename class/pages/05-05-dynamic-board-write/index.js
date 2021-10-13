import { useMutation, gql } from '@apollo/client'
import { useState } from 'react'
import { useRouter } from 'next/router'

const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String){
        createBoard(writer: $writer, title: $title, contents: $contents){
            number
        }
    }
`

export default function DynamicBoardWritePage(){
    const router = useRouter()

    const [myWriter, setMyWriter] = useState("")
    const [myTitle, setMyTitle] = useState("")
    const [myContents, setMyContents] = useState("")
    // const [myMessage, setMyMessage] = useState("")
    const [createBoard] = useMutation(CREATE_BOARD)

    function onChangeWriter(event){
        setMyWriter(event.target.value)
    }

    function onChangeTitle(event){
        setMyTitle(event.target.value)
    }

    function onChangeContents(event){
        setMyContents(event.target.value)
    }

    async function onClickGraphqlApi(){
        const result = await createBoard({
            variables: {
                writer: myWriter,
                title: myTitle,
                contents: myContents
            }
        })
        // console.log(result)
        // console.log(result.data.createBoard.number)
        // setMyMessage(result.data.createBoard.number)

        // router.push('/05-06-dynamic-board-detail/' + result.data.createBoard.number) // =>  /05-06-dynamic-board-detail/17
        router.push(`/05-06-dynamic-board-detail/${result.data.createBoard.number}`) // =>  /05-06-dynamic-board-detail/17  =>  템플릿 리터럴
    }

    return (
        <>
            <div>Graphql 요청하기!!!</div>
            {/* <div>결과: {myMessage}</div> */}
            작성자: <input type="text" onChange={onChangeWriter} /><br />
            제목: <input type="text" onChange={onChangeTitle} /><br />
            내용: <input type="text" onChange={onChangeContents}/><br />
            <button onClick={onClickGraphqlApi}>Graphql API 요청!!(게시물 등록하기!!!)</button>
        </>
    )

}