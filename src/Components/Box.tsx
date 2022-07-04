import "./Box.css";

type BoxProp = {
  name: string;
  playerTile: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void
};

function Tile(props: BoxProp) {
  return <div onClick={props.onClick} id={props.name}>
    <h1>{props.playerTile}</h1>
  </div>;
}

export default Tile;
