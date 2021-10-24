export default function ExampleUI(props){

    console.log('======presenter===========')
    console.log(props.zzz)
    console.log('==========================')

    return (
        <>
            <h1>{props.zzz ? "수정" : "등록"} 페이지 입니다!!</h1>
            작성자:<input type="text" /><br />
            비밀번호:<input type="password" /><br />
            제목:<input type="text" /><br />
            내용:<input type="text" /><br />
            <button>{props.zzz ? "수정" : "등록"}하기</button>
        </>
    )
    
}