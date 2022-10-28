import React, { useCallback, useEffect } from "react";
import * as S from "./styles";
import { Key } from "../Key";
import {
  FIRST_LINE_KEYS,
  SECOND_LINE_KEYS,
  THIRD_LINE_KEYS,
} from "shared/constants";
import { MdOutlineBackspace } from "react-icons/md";
import { indexIsLast } from "shared/utils";
import {
  onDelete,
  onEnter,
  onLeftArrowClick,
  onRightArrowClick,
  setLetter,
} from "store";
import { useDispatch } from "react-redux";

export function Keyboard() {
  const dispatch = useDispatch();

  const handleKeyboard = useCallback(
    (event: any) => {
      switch (event.key) {
        case "Enter":
          return dispatch(onEnter());
        case "Backspace":
          return dispatch(onDelete());
        case "ArrowLeft":
          return dispatch(onLeftArrowClick());
        case "ArrowRight":
          return dispatch(onRightArrowClick());
        default:
          if (
            event.key.length > 1 ||
            !(
              FIRST_LINE_KEYS.includes(event.key) ||
              SECOND_LINE_KEYS.includes(event.key) ||
              THIRD_LINE_KEYS.includes(event.key)
            )
          )
            return;
          return dispatch(setLetter(event.key));
      }
    },
    [dispatch]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <S.KeyboardContainer onKeyDown={handleKeyboard}>
      <S.Row>
        {FIRST_LINE_KEYS.map((value, index) => (
          <Key
            keyValue={value}
            key={index}
            isLast={indexIsLast(FIRST_LINE_KEYS, index)}
          />
        ))}
      </S.Row>

      <S.Row>
        {SECOND_LINE_KEYS.map((value, index) => (
          <Key keyValue={value} key={index} />
        ))}
        <Key
          keyValue={"delete"}
          icon={<MdOutlineBackspace size={40} />}
          isLast
          bigKey
        />
      </S.Row>

      <S.Row>
        {THIRD_LINE_KEYS.map((value, index) => (
          <Key keyValue={value} key={index} />
        ))}
        <Key keyValue={"enter"} isLast bigKey />
      </S.Row>
    </S.KeyboardContainer>
  );
}
