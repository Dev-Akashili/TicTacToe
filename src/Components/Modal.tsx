import {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Modal.css";
import ModalLayout from "../Layouts/ModalLayout";
import Button from "./Button";

type ModalProps = {
  text: string;
}

function Modal(props: ModalProps) {

  const navigate = useNavigate();
  const [player, setPlayer] = useState("Player");

  function handleClickForPlayerX() {
    setPlayer("X");
    navigate("game-box");
  }

  function handleClickForPlayerY() {
    setPlayer("Y");
    navigate("game-box");
  }

  return (
    <ModalLayout>
      <h5><b>{props.text}</b></h5>
      <div className="btn-div">
        <Button onClick={handleClickForPlayerX} text="btn btn-primary" name="Player X" />
        <Button onClick={ handleClickForPlayerY} text="btn btn-danger" name="Player O" />
      </div>
    </ModalLayout>
  );
}

export default Modal;
