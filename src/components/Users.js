import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../actions/userActions";

const Users = () => {

    const isLoading = useSelector((state) => state.userReducer.isLoading);
    const users = useSelector((state) => state.userReducer.users);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(getUsers());
    };

    return (
        <div>
            <button onClick={handleClick}>{!isLoading ? <p>Get User</p> : <p>Loading</p>}</button>
            <div>{users.map(element=><p>{element.name}</p>)}</div>
        </div>
    );
};

export default Users;
