import React, { useState } from "react";
import Welcome from "./Welcome";
import Footer from "./Footer";
import './Login.css';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        if (password.trim() !== "" && username.trim() !== "") {
            setIsLogin(true);
        }
    }

    function togglePassword() {
        setShowPassword((passwordVisible) => !passwordVisible);
    }

    return (
        <>
            {isLogin ? (
                <Welcome username={username} setUsername={setUsername} setPassword={setPassword} setIsLogin={setIsLogin} />
            ) : (
                <div className="main-footer-container">
                    <main>

                        <div className="login-container">

                            <i className="icon-ig"></i>

                            <form onSubmit={handleSubmit}>

                                <div className="input-container">
                                    <input type="text" id="username" placeholder=" " value={username} onChange={(e) => setUsername(e.target.value)} />
                                    <label htmlFor="username">
                                        Numero di telefono, nome utente o email
                                    </label>
                                </div>

                                <div className="input-container password-container">
                                    <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} id="password" className="password-input" placeholder=" " />
                                    <label htmlFor="password">Password</label>
                                    {password && (
                                        <button type="button" id="toggle-password" className="toggle-password" onClick={togglePassword}>
                                            {showPassword ? "Nascondi" : "Mostra"}
                                        </button>
                                    )}
                                </div>

                                <div className="button-container">
                                    <button type="submit">
                                        <div className="button-text">Accedi</div>
                                    </button>
                                </div>

                                <div className="container-line-o">
                                    <div className="line-orizzontal"></div>
                                    <div className="letter-o">o</div>
                                    <div className="line-orizzontal"></div>
                                </div>

                                <a href="https://www.facebook.com" className="link-icon-fb" target="_blank">
                                    <i className="icon-fb"></i>
                                    <span>Accedi con Facebook</span>
                                </a>

                                <a className="link-password" href="https://www.instagram.com/accounts/password/reset/" target="_blank">
                                    Password dimenticata?
                                </a>

                                <div className="text">
                                    Puoi anche <a href="https://help.instagram.com/contact/406206379945942/" target="_blank">segnalare i contenuti</a> nel tuo Paese senza accedere.
                                </div>

                            </form>

                        </div>

                        <div className="registration-container">
                            <span>Non hai un account? <a href="https://www.instagram.com/accounts/emailsignup/">Iscriviti</a></span>
                        </div>

                        <div className="other-info">
                            <span>Scarica l'applicazione.</span>
                            <div className="image">
                                <a href="https://apps.apple.com/app/instagram/id389801252?ct=igweb.loginPage.badge&mt=8&pt=428156&vt=lo" target="_blank">
                                    <img id="imgApple" src="/IplMXprwqaI.png" />
                                </a>

                                <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3DA4C4C39D-82F8-42CA-B4D8-EBBBC0229CAD%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge%26original_referrer%3Dhttps%253A%252F%252Fwww.google.com%252F" target="_blank">
                                    <img id="imgGoogle" src="/piglPIPOKiJ.png" />
                                </a>
                            </div>
                        </div>

                    </main>

                    <Footer />

                </div>
            )}
        </>
    );
}

export default Login;