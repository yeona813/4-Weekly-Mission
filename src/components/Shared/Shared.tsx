import React from "react";
import { useGetFolder } from "../../hooks/useGetFolder";
import Header from "./Header/Header";
import ReadCard from "./ReadCard";
import CardList from "../common/CardList/CardList";
import SearchBar from "../common/SearchBar/SearchBar";
import * as S from "./SharedStyled";

interface SharedProps {
  profileImage: string;
  ownerName: string;
  folderName: string;
  links: Link[];
}

interface Link {
  id?: number;
  url: string;
  imageSource: string;
  alt: string;
  elapsedTime: string;
  description: string;
  createdAt: string;
}

function Shared() {
  const { data } = useGetFolder();
  const { profileImage, ownerName, folderName, links } =
    (data as SharedProps) || {};

  return (
    <S.Shared>
      <Header
        profileImage={profileImage}
        ownerName={ownerName}
        folderInfo={folderName}
      />
      <S.Items>
        <SearchBar />
        <CardList>
          {links?.map((link) => (
            <ReadCard key={link?.id} {...link} />
          ))}
        </CardList>
      </S.Items>
    </S.Shared>
  );
}

export default Shared;
