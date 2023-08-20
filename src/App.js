import React from 'react';
const App = () => {
    return (
        <>
            <div className=" col-md-6 mx-auto mt-5">

                <form>
                    <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input type="text" className="form-control" id="name" name="name" />

                </div>
                    <div className="mb-3">
                        <label htmlFor="mobile" className="form-label">Your Mobile</label>
                        <input type="text" className="form-control" id="mobile" name="mobile" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name={"email"}/>

                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">I agree all statements <a
                                href="/"><u>Terms of service</u></a>  </label>
                    </div>
                    <div className={"d-flex justify-content-center"}>
                    <button type="submit" className="btn btn-success  " id={"submit"} name={"submit"}>Submit</button>
                    </div>
                    <p className={"text-center text-muted mt-5 mb-0"}>Have already account ? <a href="/" className={"fw-bold text-body"}><u>Login here</u></a></p>
                </form>
            </div>
        </>
    );
};

export default App;