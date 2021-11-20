const obj = {
  name: "wondoo",
  age: 10,
};

interface AAA {
  a: keyof typeof obj;
}

const obj2 = {
  animal: "🌺",
};

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

getValue(obj, "name"); // 'wondoo
getValue(obj, "age"); // 10
getValue(obj2, "animal"); // 🌺
