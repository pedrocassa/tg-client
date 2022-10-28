import React, { useState } from "react";
import * as S from "./styles";
import { Button, GameTitle, RulesDialog } from "shared/components";
import { useNavigate } from "react-router-dom";
import { selectWordBankInitialized } from "../../store";
import { useSelector } from "react-redux";

export function Home() {
  const [rulesDialogVisibility, setRulesDialogVisibility] =
    useState<boolean>(false);

  const handleOpenRulesDialog = () => setRulesDialogVisibility(true);
  const handleCloseRulesDialog = () => setRulesDialogVisibility(false);

  const navigate = useNavigate();

  const wordBankInitiliazed = useSelector(selectWordBankInitialized);

  const handlePlayButtonPress = () => {
    if (!wordBankInitiliazed) return;

    navigate("/play-game");
  };

  return (
    <S.Container>
      <GameTitle />
      <Button
        type={"button"}
        onClick={handlePlayButtonPress}
        label={"Jogar"}
        style={{ marginBottom: 10 }}
      />
      <Button
        type={"button"}
        onClick={handleOpenRulesDialog}
        label={"Regras"}
        outlined
      />
      <RulesDialog
        isOpen={rulesDialogVisibility}
        onClose={handleCloseRulesDialog}
      />
    </S.Container>
  );
}
