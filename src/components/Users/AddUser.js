import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import Modal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [userName, setUserName] = useState("");
    // const [userAge, setUserAge] = useState("");
    const [error, setError] = useState();

    const addUserHandler = (_event) => {
        _event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid Input",
                message: "Please enter valid input",
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: "Invalid Age",
                message: "Please enter age > 0",
            });
            return;
        }

        props.onSaveUser(enteredName, enteredAge);
        nameInputRef.current.value = "";
        ageInputRef.current.value = "";

        // setUserAge("");
        // setUserName("");
    };

    // const userNameHandler = (_event) => {
    //     setUserName(_event.target.value);
    // };

    // const userAgeHandler = (_event) => setUserAge(_event.target.value);

    const modalCloseHandler = () => {
        setError(null);
    };
    return (
        <Wrapper>
            {error && (
                <Modal
                    title={error.title}
                    message={error.message}
                    onClose={modalCloseHandler}
                />
            )}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <div className={styles["form-control"]}></div>
                    <label htmlFor='username'>Username</label>
                    <input
                        id='username'
                        type='text'
                        // onChange={userNameHandler}
                        // value={userName}
                        ref={nameInputRef}
                    />
                    <label htmlFor='age'>Age (years)</label>
                    <input
                        id='age'
                        type='number'
                        // onChange={userAgeHandler}
                        // value={userAge}
                        ref={ageInputRef}
                    />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;
