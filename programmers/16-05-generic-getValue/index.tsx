const obj = {
  name: "wondoo",
  age: 10,
} as const;

interface AAA {
  a: keyof typeof obj;
}

const obj2 = {
  animal: "🌺",
} as const;

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const aaa = getValue(obj, "name"); // 'wondoo
const bbb = getValue(obj, "age"); // 10
const ccc = getValue(obj2, "animal"); // 🌺
