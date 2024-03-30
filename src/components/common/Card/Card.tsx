import React, { ReactNode } from "react";
import * as S from "./CardStyled";

interface CardProps {
  children: ReactNode;
}

function Card({ children }: CardProps) {
  return <S.Card>{children}</S.Card>;
}

export default Card;
