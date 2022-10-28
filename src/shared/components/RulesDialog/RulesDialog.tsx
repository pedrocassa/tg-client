import React from "react";
import Modal from "react-modal";
import * as S from "./styles";
import { AiOutlineCloseCircle } from "react-icons/ai";

type RulesDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

const customModalStyles = {
  content: {
    width: "70%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
};

const rulesListItems = [
  "O jogo consiste em descobrir uma palavra secreta de 5 letras.",
  "Você terá somente 6 tentativas e verá seu progresso através das cores de fundo de cada letra.",
  "Se, depois de submeter a palavra, alguma letra aparecer com a cor de fundo verde, significa que a letra existe na palavra e está na posição correta.",
  "Caso alguma letra apareça com a cor de fundo amarela, significa que ela existe na palavra mas em uma posição diferente.",
  "Ao acertar todas as letras e descobrir a palavra secreta, você vence o jogo. Entretanto, se ao final de 6 tentativas você não acertar a palavra, você perde o jogo.",
];

export function RulesDialog({ isOpen, onClose }: RulesDialogProps) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customModalStyles}>
      <S.Container>
        <S.Header>
          <h1>Como jogar:</h1>
          <AiOutlineCloseCircle size={30} type={"button"} onClick={onClose} />
        </S.Header>
        <ul>
          {rulesListItems.map((item, index) => (
            <li key={index}>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </S.Container>
    </Modal>
  );
}
