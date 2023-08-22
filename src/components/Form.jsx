import React, {useState} from 'react';
import {toast} from "react-toastify";
import axios from "axios";

const Form = () => {
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
        }

        try {
            const response = await axios.post(`http://test`,
                formDataEl,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            console.log('Response:', response.data);
            console.log(formDataEl)
        } catch (error) {

            console.error('Error:', error);
        }
    };

    const handleInputChange = (e) => {
        const {name, value,} = e .target;
        setFormDataEl((prevData) => ({
            ...prevData,
            [name]: value
        }))


    }


    return (

        <div className=" col-md-6 mx-auto mt-5">

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