import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App(props) {
    const [user, setUser] = useState([]);
    const saveUserHandler = (userName, userAge) => {
        setUser((prevUser) => {
            return [
                ...prevUser,
                { id: Math.random().toString(), userName, userAge },
            ];
        });
    };
    return (
        <React.Fragment>
            <AddUser onSaveUser={saveUserHandler} />
            <UsersList userList={user}></UsersList>
        </React.Fragment>
    );
}

export default App;
