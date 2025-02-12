import React from "react";
import './Login.css';

function Footer() {

    return(
        <footer>
        <div className="main-container">
            <div className="container-links">
                <div className="box">
                    <a href="https://about.meta.com/">
                        <span>Meta</span>
                    </a>
                </div>
                <div className="box">
                    <a href="https://about.instagram.com/">
                        <span>Informazioni</span>
                    </a>
                </div>
                <div className="box">
                    <a href="">
                        <span>Blog</span>
                    </a>
                </div>
                <div className="box">
                    <a href="">
                        <span>Lavora con noi</span>
                    </a>
                </div>
                <div className="box">
                    <a href="">
                        <span>Aiuto</span>
                    </a>
                </div>
                <div className="box">
                    <a href="">
                        <span>API</span>
                    </a>
                </div>
                <div className="box">
                    <a href="">
                        <span>Privacy</span>
                    </a>
                </div>
                <div className="box">
                    <a href="">
                        <span>Impostatzioni cookie</span>
                    </a>
                </div>
                <div className="box">
                    <a href="">
                        <span>Condizioni</span>
                    </a>
                </div>
                <div className="box">
                    <a href="">
                        <span>Luoghi</span>
                    </a>
                </div>
                <div className="box">
                    <a href="">
                        <span>Instagram Lite</span>
                    </a>
                </div>
                <div className="box">
                    <a href="">
                        <span>Threads</span>
                    </a>
                </div>
                <div className="box">
                    <a href="">
                        <span>Caricamento dei contatti e non-utenti</span>
                    </a>
                </div>
                <div className="box">
                    <a href="">
                        <span>Meta verified</span>
                    </a>
                </div>
            </div>
            <div className="container-lang-copyright">
                <div className="language">
                    <select aria-label="it">
                        <option value="it">Italiano</option>
                        <option value="en">Inglese</option>
                        <option value="es">Spagnolo</option>
                        <option value="fr">Francese</option>
                        <option value="de">Tedesco</option>
                        <option value="pt">Portoghese</option>
                        <option value="ru">Russo</option>
                        <option value="zh">Cinese</option>
                        <option value="ja">Giapponese</option>
                        <option value="ar">Arabo</option>
                    </select>
                </div>
                <div className="copyright">
                    <span>&#169; 2025 Instagram from Meta</span>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer;