import { useState } from 'react'

export default function SignupStatePage(){
    const [myEamil, setMyEmail] = useState()
    const [myEmailError, setMyEmailError] = useState("")

    const [myPassword1, setMyPassword1] = useState()
    const [myPassword2, setMyPassword2] = useState()

    function onChangeMyEmail(event){
        setMyEmail(event.target.value) // aaa@aaa.com
    }

    function onChangeMyPassword1(event){
        setMyPassword1(event.target.value)
    }

    function onChangeMyPassword2(event){
        setMyPassword2(event.target.value)
    }

    function onClickSignup(){
        if(!myEamil.includes("@")){
            setMyEmailError("이메일을 제대로 입력해 주세요!!!") // alert("이메일에 @가 없습니다!!!")
        } else if(myPassword1 !== myPassword2){
            alert("비밀번호를 제대로 입력해 주세요!!")
        } else {
            alert("회원가입을 축하합니다!")
        }

    }

    return (
        <>
            <div>회원가입</div>
            이메일: <input type="text" onChange={onChangeMyEmail}/><br />
            <div>{myEmailError}</div> {/* Emotion을 사용해서, 빨간글씨와 작은사이즈 폰트로 변경하기 */}
            비밀번호1: <input type="password" onChange={onChangeMyPassword1} /><br />
            비밀번호2: <input type="password" onChange={onChangeMyPassword2}/><br />
            <button onClick={onClickSignup}>가입하기</button>
        </>
    )

}