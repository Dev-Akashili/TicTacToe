import "./Button.css";

type ButtonProp = {
    text: string;
    name: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function Button(props: ButtonProp) {
    return <button onClick={props.onClick} className={props.text}>{props.name}</button>
}

export default Button;