import React from "react";
import Modal from "react-modal";
import * as S from "./styles";
import { AiOutlineCloseCircle } from "react-icons/ai";

type RulesDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function RulesDialog({ isOpen, onClose }: RulesDialogProps) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <S.Container>
        <S.Header>
          <h1>Como jogar:</h1>
          <AiOutlineCloseCircle size={30} type={"button"} onClick={onClose} />
        </S.Header>
        <ul>
          <li>
            <p>O jogo consiste em descobrir uma palavra secreta de 5 letras.</p>
          </li>
          <li>
            <p>
              Você terá somente 6 tentativas e verá seu progresso através das
              cores de fundo de cada letra.
            </p>
          </li>
          <li>
            <p>
              Se, depois de submeter a palavra, alguma letra aparecer com a cor
              de fundo verde, significa que a letra existe na palavra e está na
              posição correta.
            </p>
          </li>
          <li>
            <p>
              Caso alguma letra apareça com a cor de fundo amarela, significa
              que ela existe na palavra mas em uma posição diferente.
            </p>
          </li>
          <li>
            <p>
              Ao acertar todas as letras e descobrir a palavra secreta, você
              vence o jogo. Entretanto, se ao final de 6 tentativas você não
              acertar a palavra, você perde o jogo.
            </p>
          </li>
        </ul>
      </S.Container>
    </Modal>
  );
}
