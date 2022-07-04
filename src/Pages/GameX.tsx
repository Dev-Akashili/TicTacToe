import { useState } from "react";
import Grid from "../Layouts/Grid";
import Box from "../Components/Box";
import Header from "../Components/Header";
import GameLayout from "../Layouts/GameLayout";
import Modal from "../Components/Modal";

function GameX() {

  function game() {}


  return (
    <GameLayout>
      <Header />
      <Grid>
        <Box name="box1" playerTile={""} onClick={game} />
        <Box name="div2" playerTile={""} onClick={game} />
        <Box name="div3" playerTile={""} onClick={game} />
        <Box name="div4" playerTile={""} onClick={game} />
        <Box name="div5" playerTile={""} onClick={game} />
        <Box name="div6" playerTile={""} onClick={game} />
        <Box name="div7" playerTile={""} onClick={game} />
        <Box name="div8" playerTile={""} onClick={game} />
        <Box name="div9" playerTile={""} onClick={game} />
      </Grid>
    </GameLayout>
  );
}

export default GameX;
