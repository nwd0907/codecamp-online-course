import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { useRouter } from 'next/router'
import BoardWriteUI from './BoardWrite.presenter'
import {CREATE_BOARD} from './BoardWrite.quries'



export default function BoardWrite(){
    const router = useRouter()

    const [myWriter, setMyWriter] = useState("")
    const [myTitle, setMyTitle] = useState("")
    const [myContents, setMyContents] = useState("")

    const [isActive, setIsAcitve] = useState(false)

    // const [myMessage, setMyMessage] = useState("")
    const [createBoard] = useMutation(CREATE_BOARD)

    function onChangeWriter(event){
        setMyWriter(event.target.value)

        if(event.target.value !== "" && myTitle !== "" && myContents !== ""){
            setIsAcitve(true)
        } else {
            setIsAcitve(false)
        }
    }

    function onChangeTitle(event){
        setMyTitle(event.target.value)

        if(myWriter !== "" && event.target.value !== "" && myContents !== ""){
            setIsAcitve(true)
        } else {
            setIsAcitve(false)
        }
    }

    function onChangeContents(event){
        setMyContents(event.target.value)

        if(myWriter !== "" && myTitle !== "" && event.target.value !== ""){
            setIsAcitve(true)
        } else {
            setIsAcitve(false)
        }
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
        <BoardWriteUI 
            onChangeWriter={onChangeWriter}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            onClickGraphqlApi={onClickGraphqlApi}
            isActive={isActive}
        />
    )
}