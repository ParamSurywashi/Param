import React, { useEffect } from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom";

function Main() {
    useEffect(() => {
        const typed = new Typed(".position", {
            strings: [
                "A Software Engineer",
                "A JavaScript Developer",
                "A React Developer",
                "A Front-End Developer",
                "A Full-Stack Developer",
                "An API Tester"
            ],
            typeSpeed: 90,
            backSpeed: 60,
            backDelay: 1000,
            loop: true,
            showCursor:false
        });

        return () => {
            typed.destroy();
            
        };
    }, []);

    return (
        <main>
            <section className="first_session">
                <h1 className="first_info">
                    Hello, My Name is
                </h1>
                <h2 className="name">
                    <span className="charName">P</span>
                    <span className="charName">a</span>
                    <span className="charName">r</span>
                    <span className="charName">m</span>
                    <span className="charName">a</span>
                    <span className="charName">n</span>
                    <span className="charName">a</span>
                    <span className="charName">n</span>
                    <span className="charName">d</span>
                    <span className="charName"> </span>
                    <span className="charName">C</span>
                    <span className="charName">h</span>
                    <span className="charName">a</span>
                    <span className="charName">r</span>
                    <span className="charName">e</span>
                    <span className="charName">d</span>
                     <span className="dots"></span>
                </h2>
                <h3 className="position">{""}</h3>
                <h4 className="headlines">
                    Hello! <br /> I am a passionate software engineer with a solid background in software development and a drive to learn new technologies.
                    <br /> I specialize in <span id="Programs">JavaScript, React, MERN stack development</span>, and <span id="Programs">API testing</span> .
                </h4>
                <Link to="/contact" className="GetInTouchBtn">
                        Get In Touch
                    </Link>
            </section>
        </main>
    );
}

export default Main;
