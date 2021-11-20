import { Component } from "react";

interface IProps {
  aaa: () => void;
  bbb: () => void;
  count: number;
}
export default class ChildClass extends Component<IProps> {
  render() {
    return <div />;
  }
}
