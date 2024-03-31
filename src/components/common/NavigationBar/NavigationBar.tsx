import React from "react";
import { Profile } from "../Profile/Profile";
import * as S from "./NavigationStyled";
import Link from "next/link";

interface NavigationBarProps {
  profile: {
    profileImageSource: string;
    email: string;
  };
  isSticky: boolean;
}

const NavigationBar = ({ profile, isSticky }: NavigationBarProps) => {
  return (
    <S.Nav $isSticky={isSticky}>
      <S.NavItems>
        <Link href={"/"}>
          <S.Logo src="/images/linkbrary.svg" alt="로고 이미지" />
        </Link>
        {profile ? (
          <Profile profile={profile} />
        ) : (
          <S.SignInButton>로그인</S.SignInButton>
        )}
      </S.NavItems>
    </S.Nav>
  );
};

export default NavigationBar;
