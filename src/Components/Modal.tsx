import {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Modal.css";
import ModalLayout from "../Layouts/ModalLayout";
import Button from "./Button";

type ModalProps = {
  text: string;
  buttonName1: string;
  buttonName2: string;
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
        <Button onClick={handleClickForPlayerX} text="btn btn-primary" name={props.buttonName1} />
        <Button onClick={ handleClickForPlayerY} text="btn btn-danger" name={props.buttonName2} />
      </div>
    </ModalLayout>
  );
}

export default Modal;
