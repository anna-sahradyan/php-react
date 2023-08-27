import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store/formSlice";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";

const List = () => {
    const users = useSelector(state => state.form.userData);
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const usersPerPage = 5;
    const pagesVisited = (page - 1) * usersPerPage;

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    const pageCount = Math.ceil(users?.length / usersPerPage);
    const handleChange = (event, value) => {
        event.preventDefault();
        setPage(value);
    };

    return (
        <div className={"content"}>
            <div className="col-md-6 mx-auto mt-5">
                <div className="home"><Link to={"/"}><img src="/img/home.png" alt=""/></Link></div>
                <div className="table_list">
                    <table className="table table-dark table-striped">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Mobile</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users?.slice(pagesVisited, pagesVisited + usersPerPage).map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{index + pagesVisited + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.mobile}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <div className={'o'}>
                        <Stack spacing={2}>
                            <Typography>Page: {page}</Typography>
                            <Pagination count={pageCount} page={page} color={`primary`} onChange={handleChange} />
                        </Stack>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;
