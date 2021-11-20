// 1. generic 어디에?
// 2. keyof typeof 커리큘럼 추가
// 3. this 커리큘럼 추가
// 4. class typescript 추가

export default function AaaPage() {
  function checkNotNull<T>(arg: T | null): T {
    if (arg === null) throw new Error("error!!");
    return arg;
  }

  const aaa = checkNotNull("asdf");

  return <div />;
}
