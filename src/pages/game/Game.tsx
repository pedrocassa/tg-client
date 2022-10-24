import React from "react";
import * as S from "./styles";
import { Board, Header, Keyboard } from "shared/components";

export function Game() {
  return (
    <S.Container>
      <Header />
      <Board />
      <Keyboard />
    </S.Container>
  );
}
