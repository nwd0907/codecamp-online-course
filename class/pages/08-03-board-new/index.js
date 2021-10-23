import BoardWrite from "../../src/components/units/board/write/BoardWrite.container";

// 게시물 등록하기 페이지
export default function BoardNewPage(){
    return (
        <BoardWrite isEdit={false} />
    )
}