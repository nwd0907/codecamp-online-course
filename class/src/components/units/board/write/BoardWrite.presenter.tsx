import { MyButton } from './BoardWrite.styles'

export default function BoardWriteUI(props){
    return (
        <>
            <div>Graphql 요청하기!!!</div>
            {/* <div>결과: {myMessage}</div> */}
            작성자: <input type="text" onChange={props.onChangeWriter} defaultValue={props.data?.fetchBoard.writer} /><br />
            제목: <input type="text" onChange={props.onChangeTitle} defaultValue={props.data?.fetchBoard.title} /><br />
            내용: <input type="text" onChange={props.onChangeContents} defaultValue={props.data?.fetchBoard.contents} /><br />
            {!props.isEdit ? (
                <MyButton 
                    onClick={props.onClickGraphqlApi}
                    isActive={props.isActive}
                >
                    Graphql API 요청!!(게시물 등록하기!!!)
                </MyButton>
            ): (
                <MyButton 
                    onClick={props.onClickUpdate} 
                    isActive={props.isActive}
                >
                    Graphql API 요청!!(게시물 수정하기!!!)
                </MyButton>
            )}
            
        </>
    )
}