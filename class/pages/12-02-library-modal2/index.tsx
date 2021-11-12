import { ChangeEvent, useState } from "react";
import { Modal, Button } from "antd";

export default function LibraryModal2Page() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [myPassword, setMyPassword] = useState("");
  console.log(myPassword);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function onChangeMyPassword(event: ChangeEvent<HTMLInputElement>) {
    setMyPassword(event.target.value);
  }

  return (
    <>
      <Button onClick={showModal}>모달열기!!</Button>
      <Modal
        title="비밀번호입력창!"
        visible={isModalVisible}
        onCancel={handleCancel}
      >
        <input type="password" onChange={onChangeMyPassword} />
      </Modal>
    </>
  );
}
