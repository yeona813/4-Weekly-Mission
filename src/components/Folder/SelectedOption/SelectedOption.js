import { useState } from "react";
import "./SelectedOption.css";
import ModalEdit from "../Modal/ModalEdit/ModalEdit";

function SelectedOption({ selectedFolder, activeButton }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="Selected-folder">
      <span className="Selected-folder-name">{selectedFolder}</span>
      {activeButton !== "전체" && (
        <div className="Selected-option">
          <button className="Selected-option-content">
            <img src="images/share.svg" alt="공유 이미지" />
            <p>공유</p>
          </button>
          <button className="Selected-option-content" onClick={handleOpenModal}>
            <img src="images/pen.svg" alt="이름 변경 이미지" />
            <p>이름 변경</p>
          </button>
          {isModalOpen && (
            <ModalEdit
              setIsModalOpen={setIsModalOpen}
              text="폴더 이름 변경"
              buttonText="변경하기"
            />
          )}
          <button className="Selected-option-content">
            <img src="images/delete.svg" alt="삭제 이미지" />
            <p>삭제</p>
          </button>
        </div>
      )}
    </div>
  );
}

export default SelectedOption;
