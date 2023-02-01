import React from "react";
import * as S from "./styles";
import { MdOutlineKeyboardBackspace, MdOutlineRefresh } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { initializeWordBank, refresh } from "store";

export function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoBackClick = () => navigate("/");

  const handleRefreshClick = () => {
    dispatch(refresh());

    // @ts-ignore
    dispatch(initializeWordBank());
  };

  return (
    <S.Container>
      <div onClick={handleGoBackClick}>
        <MdOutlineKeyboardBackspace size={40} />
      </div>
      <h1>Termo</h1>
      <div onClick={handleRefreshClick}>
        <MdOutlineRefresh size={40} />
      </div>
    </S.Container>
  );
}
