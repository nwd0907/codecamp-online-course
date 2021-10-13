import { MyButton } from './BoardWrite.styles'

export default function BoardWriteUI(props){
    return (
        <>
            <div>Graphql 요청하기!!!</div>
            {/* <div>결과: {myMessage}</div> */}
            작성자: <input type="text" onChange={props.onChangeWriter} /><br />
            제목: <input type="text" onChange={props.onChangeTitle} /><br />
            내용: <input type="text" onChange={props.onChangeContents}/><br />
            <MyButton onClick={props.onClickGraphqlApi} isActive={props.isActive}>Graphql API 요청!!(게시물 등록하기!!!)</MyButton>
        </>
    )
}