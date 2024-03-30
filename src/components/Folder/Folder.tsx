import React, { useState, useEffect } from "react";
import { useGetFolderById } from "../../hooks/useGetFolder";
import SearchBar from "../common/SearchBar/SearchBar";
import FolderList from "./FolderList/FolderList";
import AllFolderCard from "./FolderCard/AllFolderCard";
import FolderCard from "./FolderCard/FolderCard";
import useFolderLinks from "../../hooks/useFolderLinks";
import renderButton from "../../utils/renderButtons";
import SelectedOption from "./SelectedOption/SelectedOption";
import * as S from "./FolderStyled";

interface Data {
  data: any;
}
function Folder() {
  const { data }: Data = useGetFolderById();
  const dataArray = data?.data;

  const [activeButton, setActiveButton] = useState("전체");
  const [selectedFolder, setSelectedFolder] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearchResult, setShowSearchResult] = useState(false);

  useEffect(() => {
    if (selectedFolder === "" && dataArray?.length > 0) {
      setSelectedFolder("전체");
    }
  }, [selectedFolder, dataArray]);

  const folderLinks = useFolderLinks(selectedFolder, dataArray);

  const handleButtonClick = (name: string) => {
    setActiveButton(name);
    setSelectedFolder(name);
  };

  const renderedButtons = renderButton({
    dataArray,
    activeButton,
    handleButtonClick,
  });

  return (
    <S.Folder>
      <S.FolderItems>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setShowSearchResult={setShowSearchResult}
        />
        {showSearchResult && (
          <S.SearchResult>
            <S.SearchKeyword>{searchTerm}</S.SearchKeyword>으로 검색한
            결과입니다.
          </S.SearchResult>
        )}
        <FolderList
          activeButton={activeButton}
          handleButtonClick={handleButtonClick}
          renderedButtons={renderedButtons}
        />
        {selectedFolder && (
          <SelectedOption
            selectedFolder={selectedFolder}
            activeButton={activeButton}
          />
        )}
        {selectedFolder === "전체" ? (
          <AllFolderCard />
        ) : folderLinks.length > 0 ? (
          <FolderCard folderLinks={folderLinks} />
        ) : (
          <S.None>저장된 링크가 없습니다.</S.None>
        )}
      </S.FolderItems>
    </S.Folder>
  );
}

export default Folder;
