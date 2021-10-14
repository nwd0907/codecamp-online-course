export function getMyDate(aaa){
    const myDate = new Date(aaa)
    const year = myDate.getFullYear()
    const month = myDate.getMonth() + 1
    const date = myDate.getDate()
    return `${year}년 ${month}월 ${date}일`
}