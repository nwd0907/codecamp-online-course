import { Component } from "react";

interface IMyClass {
  count: number;
  aaa?: string;
}
export default class MyClass extends Component<IMyClass> {
  render() {
    return <div>새로운 컴포넌트입니다. props는 {this.props.count}</div>;
  }
}
