interface Either<L, R> {
  left: () => L;
  right: () => R;
}

class Aaa<L, R> implements Either<L, R> {
  constructor(private leftValue: L, private rightValue: R) {
    this.leftValue = leftValue;
    this.rightValue = rightValue;
  }

  left(): L {
    return this.leftValue;
  }

  right(): R {
    return this.rightValue;
  }
}

const aaa = new Aaa({ kkk: "asdf" }, 123);
console.log(aaa.left());
