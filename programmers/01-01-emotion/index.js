import styled from '@emotion/styled'

const Title = styled.h1`
    color: red;
    font-size: 30px;
`

const ID = styled.div`
    color: blue;
`

const PW = styled.div`
    color: green;
`

const IdInput = styled.input``

const PwInput = styled.input``

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default function EmotionPage(){

    // 위에는 JAVASCRIPT 작성하는 곳
    // 아래는 HTML 작성하는 곳
    return (
        <Wrapper>
            <Title>로그인</Title>
            <ID>아이디</ID>
            <IdInput type="text" />
            <PW>비밀번호</PW>
            <PwInput type="password" />
            {/* <div>이모션 페이지 연습</div> */}
        </Wrapper>
    )
}