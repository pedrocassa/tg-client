import React from "react";
import * as S from "./styles";
import { ValueContainer } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCorrectWord,
  selectCurrentAttempt,
  selectCurrentPosition,
  setCurrentPosition,
} from "store";
import { LetterState } from "types";

type LetterProps = {
  value: string;
  isLast?: boolean;
  rowNumber: number;
  columnNumber: number;
};

export function Letter({
  value,
  isLast,
  rowNumber,
  columnNumber,
}: LetterProps) {
  const currentAttempt = useSelector(selectCurrentAttempt);
  const currentPosition = useSelector(selectCurrentPosition);
  const correctWord = useSelector(selectCorrectWord);

  const dispatch = useDispatch();

  const isFocused = () =>
    rowNumber === currentAttempt && columnNumber === currentPosition;

  const handleCompareLetters = (): LetterState | undefined => {
    if (currentAttempt <= rowNumber) return;

    if (correctWord[columnNumber] === value) return LetterState.CORRECT;

    if (value !== "" && correctWord.includes(value)) return LetterState.ALMOST;

    return;
  };

  const handleClickOnLetter = () => {
    if (rowNumber !== currentAttempt) return;

    dispatch(setCurrentPosition(columnNumber));
  };

  return (
    <S.LetterContainer
      isLast={isLast}
      letterState={handleCompareLetters()}
      onClick={handleClickOnLetter}
    >
      <ValueContainer>{value}</ValueContainer>

      {isFocused() && <S.FocusLine />}
    </S.LetterContainer>
  );
}
