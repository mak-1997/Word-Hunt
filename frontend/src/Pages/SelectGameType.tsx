import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Home.css";

export const SelectGameType = () => {

    const authentication = localStorage.getItem("userToken") || null;
    const isAuth = authentication ? true : false;
  
    const navigate = useNavigate();
  
    React.useEffect(() => {
      if (!isAuth) {
        navigate("/");
      }
    }, [authentication]);

    return (
        <div
            id="home"
            className="font-[cursive] grid sm:grid-cols-2 grid-cols-1 bg-[#27282c]"
        >
            <div className="homeLogoDiv text-white flex flex-col py-20 sm:py-40 items-center justify-center">
                <img
                    className="homeLogo"
                    src="https://i.ibb.co/ZGfvJtZ/WORD.png"
                    alt="Something went wrong"
                />
                <img
                    className="homeLogo2"
                    src="https://i.ibb.co/cNrv8pq/HUNT.png"
                    alt="Something went wrong"
                />
            </div>
            <div>
                <div className="text-white flex flex-col py-10 sm:py-52 items-center justify-center gap-20">
                    <Link
                        className="homeComponents sm:skew-y-12 py-5 px-10"
                        id="homeButtons"
                        style={{ "--clr": "yellow" } as React.CSSProperties}
                        to={"/singleplayer"}
                    >
                        <span>Single-player</span>
                        <i></i>
                    </Link>
                    <Link
                        className="homeComponents sm:skew-y-12 py-5 px-10"
                        id="homeButtons"
                        style={{ "--clr": "red" } as React.CSSProperties}
                        to={"/userList"}
                    >
                        <span>Multi-player</span>
                        <i></i>
                    </Link>
                </div>
            </div>
        </div>
    );
};
