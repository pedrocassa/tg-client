import React from "react";
import * as S from "./styles";
import { Word } from "../Word";
import { useSelector } from "react-redux";
import { selectBoard } from "store";
import { indexIsLast } from "shared/utils";

export function Board() {
  const board: string[][] = useSelector(selectBoard);

  return (
    <S.Container>
      {board.map((row, rowIndex) => (
        <Word
          rowLetters={row}
          rowNumber={rowIndex}
          key={rowIndex}
          isLast={indexIsLast(board, rowIndex)}
        />
      ))}
    </S.Container>
  );
}
