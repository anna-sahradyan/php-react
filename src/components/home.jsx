import React, {useState} from 'react';
import {RiProductHuntLine} from "react-icons/ri";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";


const Home = () => {
    const [isSignup, setIsSignup] = useState(false);
    const navigate = useNavigate();
    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        navigate("/signup")
    }
    return (
        <>
                <img src={`/img/reg1.jpg`} alt={"bg"} style={{width: "100%", height: "100vh", position: "absolute", opacity:"0.6"}}
                />
                <section className="nav">
                    <div className="logo">
                        <RiProductHuntLine size={33}/>
                    </div>
                    <Button onClick={switchMode} size="medium" variant="contained">
                        {isSignup ? "Sign Up" : "Sign In"}
                    </Button>

                </section>




        </>
    );
};

export default Home;