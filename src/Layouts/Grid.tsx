import "./Grid.css";

type GridProps = {
    children: JSX.Element | JSX.Element[];
}

function Grid(props: GridProps) {
    return <div className="parent">{props.children}</div>
}

export default Grid;