import "./ModalLayout.css";

type ModalLayoutProps = {
    children: JSX.Element | JSX.Element[];
}

function ModalLayout(props: ModalLayoutProps) {
    return <div className="main-div">{props.children}</div>
}

export default ModalLayout;