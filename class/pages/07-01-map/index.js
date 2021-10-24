export default function MapPage(){

    const classmates = ["철수", "영희", "훈이"]
    const aaa = classmates.map((el) => (<div key={el}>{el}</div>))

    return (
        <div>{aaa}</div>
    )

}