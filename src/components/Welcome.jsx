import React from "react";
import Footer from "./Footer";
function Welcome(props) {

    function handleSubmit(event) {
        event.preventDefault();
        props.setIsLogin(false);
        props.setUsername("");
        props.setPassword("");
    }

    return (
        <>
            <h1>Benvenuto, {props.username}</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className="button-container button-esc">
                    <button type="submit">
                        <div className="button-text">Esci</div>
                    </button>
                </div>
            </form>
        </>
        
    )
}

export default Welcome;