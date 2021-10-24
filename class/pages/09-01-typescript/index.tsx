export default function TypescriptPage() {
  // // 타입추론
  // let aaa = "안녕하세요"
  // aaa = 123

  // // 문자타입
  // let bbb: string = "반갑습니다!"
  // bbb = "반가워요!!"
  // bbb = 123

  // // 숫자타입
  // let ccc: number = 333
  // ccc = "333"

  // // 배열타입
  // let ddd: number[] = [1, 2, 3, 4, 5, 6]
  // ddd = "ddd"
  // ddd = 123
  // ddd = ["철수", "영희", "훈이"]
  // let eee: string[] = ["철수", "영희", "훈이"]
  // let fff: (string | number)[] = ["철수", 1]
  // let ggg: string[] | number[] = [1, 2, 3, 4, 5]
  // ggg = ["철수", "영희", "훈이"]
  // ggg = ["철수", 1]

  // // 객체타입추론
  // let profile = {
  //     name: "철수",
  //     age: 8,
  //     school: "다람쥐초등학교"
  // }
  // profile.name = 3 // 타입추론에서 어긋남!
  // profile.gender = "남성"

  // // 객체타입
  // interface IProfile2 {
  //     name: string
  //     age: number
  //     school: string
  // }
  // let profile2: IProfile2 = {
  //     name: "철수",
  //     age: 8,
  //     school: "다람쥐초등학교"
  // }
  // profile2.name = 3
  // profile2.gender = "남성"

  // // 타입추론보다 실제로 타입을 만들어야만 하는 경우
  // interface IProfile3 {
  //     name: string
  //     age: number
  //     school: string
  //     gender?: "남성" | "여성"
  // }
  // let profile3: IProfile3 = {
  //     name: "철수",
  //     age: 8,
  //     school: "다람쥐초등학교",
  // }
  // profile3.gender = "남성"
  // profile3.candy = "신호등캔디"

  // let profile4: IProfile3; // 초기값을 주고싶지 않을 경우

  return <div>타입스크립트 연습!!</div>;
}
