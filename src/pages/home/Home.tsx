import React from "react";
import * as S from "./styles";
import { Button, GameTitle } from "shared/components";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  const handlePlayButtonPress = () => navigate("/play-game");
  const handleRulesButtonPress = () => null;

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
        onClick={handleRulesButtonPress}
        label={"Regras"}
        outlined
      />
    </S.Container>
  );
}
