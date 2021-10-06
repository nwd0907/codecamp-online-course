export default function HelloLetPage(){

    function zzz(){
        document.getElementById("aaa").innerText = "반갑습니다." // <button id="aaa" onClick={zzz}>안녕하세요</button>
        document.getElementById("bbb").innerText = "반갑습니다."
        document.getElementById("ccc").innerText = "반갑습니다."
        document.getElementById("ddd").innerText = "반갑습니다."
    }

    return (
        <>
            <button id="aaa" onClick={zzz}>안녕하세요</button>
            <button id="bbb" onClick={zzz}>안녕하세요</button>
            <button id="ccc" onClick={zzz}>안녕하세요</button>
            <button id="ddd" onClick={zzz}>안녕하세요</button>
        </>
    )

}