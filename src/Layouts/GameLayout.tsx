import "./GameLayout.css";

type GameLayoutProps = {
    children: JSX.Element | JSX.Element[];
}

function GameLayout(props: GameLayoutProps) {
    return <div className="game-div">{props.children}</div>
}

export default GameLayout;