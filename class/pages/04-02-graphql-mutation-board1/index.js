import { useMutation, gql } from '@apollo/client'
import { useState } from 'react'

const CREATE_BOARD = gql`
    mutation{
        createBoard(writer:"철수", title:"제목!", contents:"내용!"){
            message
        }
    }
`

export default function GraphqlMutationBoard1Page(){
    const [myMessage, setMyMessage] = useState("")
    const [createBoard] = useMutation(CREATE_BOARD)


    async function onClickGraphqlApi(){
        const result = await createBoard()
        console.log(result)
        console.log(result.data.createBoard.message)
        setMyMessage(result.data.createBoard.message)
    }

    return (
        <>
            <div>Graphql 요청하기!!!</div>
            <div>결과: {myMessage}</div>
            <button onClick={onClickGraphqlApi}>Graphql API 요청!!</button>
        </>
    )

}