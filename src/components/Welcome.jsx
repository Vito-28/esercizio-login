import React from "react";

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
                <button type="submit">Esci</button>
            </form>
        </>
        
    )
}

export default Welcome;