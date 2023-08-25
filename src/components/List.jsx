import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../store/formSlice";

const List = () => {
    const users = useSelector(state => state.form.userData);
    const dispatch = useDispatch();
    console.log(users)
    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    return (
        <div>
            <h1>hello list</h1>
        </div>
    );
};

export default List;