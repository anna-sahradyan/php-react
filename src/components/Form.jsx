import React, {useState} from 'react';
import {toast} from "react-toastify";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addUser} from "../store/formSlice";

const Form = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formDataEl, setFormDataEl] = useState({
        email: "",
        name: "",
        mobile: ""

    })
    const {name, mobile, email} = formDataEl;

    const onSubmit = async (e) => {
        e.preventDefault();

        if (name.length === 0) {
            toast.warn('Error: Name is required', {
                className: 'custom-toast',
            });
            return;
        }
        if (email.length === 0) {
            toast.warn('Error: Email is required', {
                className: 'custom-toast',
            });
            return;
        }
        if (mobile.length === 0) {
            toast.warn('Error: Mobile is required', {
                className: 'custom-toast',
            });
            return;
        } else {
            dispatch(addUser(formDataEl))
            navigate("/list")

        }

    };


    const handleInputChange = (e) => {
        const {name, value,} = e.target;
        setFormDataEl((prevData) => ({
            ...prevData,
            [name]: value
        }))


    }


    return (


        <div className=" col-md-6 mx-auto mt-5">
            <div className="home"><Link to={"/"}><img src="/img/home.png" alt=""/></Link></div>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input type="text" className="form-control" id="name" name="name" onChange={handleInputChange}
                           value={name}/>

                </div>
                <div className="mb-3">
                    <label htmlFor="mobile" className="form-label">Your Mobile</label>
                    <input type="text" className="form-control" id="mobile" name="mobile" onChange={handleInputChange}
                           value={mobile}/>

                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name={"email"} onChange={handleInputChange}
                           value={email}/>

                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">I agree all statements <a
                        href="/"><u>Terms of service</u></a> </label>
                </div>
                <div className={"d-flex justify-content-center"}>
                    <button type="submit" className="btn btn-success  " id={"submit"} name={"submit"}
                            onClick={onSubmit}>Submit
                    </button>
                </div>
                <p className={"text-center text-muted mt-5 mb-0"}>Have already account ? <a href="/"
                                                                                            className={"fw-bold text-body"}><u>Login
                    here</u></a></p>
            </form>
        </div>

    );
};

export default Form;