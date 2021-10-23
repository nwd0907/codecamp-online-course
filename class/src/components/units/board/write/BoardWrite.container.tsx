import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { useRouter } from 'next/router'
import BoardWriteUI from './BoardWrite.presenter'
import {CREATE_BOARD, UPDATE_BOARD} from './BoardWrite.quries'
import { IMyVariables } from './BoardWrite.types'

export default function BoardWrite(props){
    const router = useRouter()

    const [myWriter, setMyWriter] = useState("")
    const [myTitle, setMyTitle] = useState("")
    const [myContents, setMyContents] = useState("")

    const [isActive, setIsAcitve] = useState(false)

    // const [myMessage, setMyMessage] = useState("")
    const [createBoard] = useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD)

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
        router.push(`/08-04-board-detail/${result.data.createBoard.number}`) // =>  /05-06-dynamic-board-detail/17  =>  템플릿 리터럴
    }

    async function onClickUpdate(){
        if(myWriter !== "" || myTitle !== "" || myContents !== ""){
            const myVariables: IMyVariables = {
                number: Number(router.query.number),
            }
            if(myWriter !== "") myVariables.writer = myWriter
            if(myTitle !== "") myVariables.title = myTitle
            if(myContents !== "") myVariables.contents = myContents
    
            await updateBoard({
                variables: myVariables
            })
            router.push(`/08-04-board-detail/${router.query.number}`)
        } else {
            alert('아무것도 변경된 것이 없습니다!')
        }
    }

    return (
        <BoardWriteUI 
            onChangeWriter={onChangeWriter}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            onClickGraphqlApi={onClickGraphqlApi}
            onClickUpdate={onClickUpdate}
            isActive={isActive}
            isEdit={props.isEdit}
            data={props.data}
        />
    )
}