import React from "react";
import ReactDOM from "react-dom";
import styles from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
    return (
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={props.onClose}>Close</Button>
            </footer>
        </Card>
    );
};

const Modal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onClose={props.onClose} />,
                document.getElementById("backdrop")
            )}
            {ReactDOM.createPortal(
                <ModalOverlay
                    title={props.title}
                    message={props.message}
                    onClose={props.onClose}
                />,
                document.getElementById("overlay")
            )}
        </React.Fragment>
    );
};

export default Modal;
