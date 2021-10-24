export default function CounterLetPage(){

    function aaa(){
        const number = Number(document.getElementById("zzz").innerText) + 1
        document.getElementById("zzz").innerText = number
    }

    return (
        <>
            <div id="zzz">0</div>
            <button onClick={aaa}>카운트 증가!!</button>
        </>
    )
}