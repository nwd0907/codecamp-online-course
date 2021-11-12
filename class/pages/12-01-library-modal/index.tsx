import { Modal } from "antd";

export default function LibraryModalPage() {
  function onClickSuccess() {
    Modal.confirm({ content: "성공하였습니다!!" }); // alert("성공하였습니다!!");
  }

  function onClickFail() {
    Modal.error({ content: "실패하였습니다!!!" }); // alert("실패하였습니다!!!");
  }

  return (
    <div>
      <button onClick={onClickSuccess}>버튼 클릭!!(성공했을때)</button>
      <button onClick={onClickFail}>버튼 클릭!!(에러났을때)</button>
    </div>
  );
}
