import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";
import { useState } from "react";

export default function LibraryModal3AddressPage() {
  const [isVisible, setIsVisible] = useState(false);

  function openModal() {
    setIsVisible(true);
  }

  function closeModal() {
    setIsVisible(false);
  }

  const handleComplete = (data: any) => {
    console.log(data);
    setIsVisible(false);
  };

  return (
    <>
      <button onClick={openModal}>우편번호검색</button>
      {isVisible && (
        <Modal title="주소입력창!!!" visible={true} onCancel={closeModal}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
