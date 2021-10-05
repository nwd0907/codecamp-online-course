import styled from '@emotion/styled'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h1`
    color: red;
`

const Email = styled.div``
const EmailInput = styled.input`
    width: 200px;
    height: 30px;
`

const Password = styled.div``
const PasswordInput = styled.input`
    width: 200px;
    height: 30px;
`

export default function EmotionPage(){

    return (
        <Wrapper>
            <Title>로그인</Title>
            <Email>이메일:</Email>
            <EmailInput type="text" />
            <Password>비밀번호:</Password>
            <PasswordInput type="password" />
        </Wrapper>
    )

}